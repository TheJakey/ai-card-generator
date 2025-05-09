package groq

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type GroqMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type GroqRequest struct {
	Model    string        `json:"model"`
	Messages []GroqMessage `json:"messages"`
}

type GroqChoice struct {
	Message struct {
		Content string `json:"content"`
	} `json:"message"`
}

type GroqResponse struct {
	Choices []GroqChoice `json:"choices"`
}

type Client struct {
	apiUrl        string
	apiKey        string
	systemMessage string
	model         string
}

func NewClient(apiUrl string, apiKey string, systemMessage string, model string) *Client {
	return &Client{apiUrl: apiUrl, apiKey: apiKey, systemMessage: systemMessage, model: model}
}

func (c *Client) ChatCompletion(userPrompt string) (string, error) {
	reqBody := GroqRequest{
		Model: "llama-3.3-70b-versatile",
		Messages: []GroqMessage{
			{Role: "system", Content: c.systemMessage},
			{Role: "user", Content: userPrompt},
		},
	}
	bodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		return "", err
	}

	req, err := http.NewRequest("POST", c.apiUrl, bytes.NewBuffer(bodyBytes))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+c.apiKey)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("Groq API error: %s", resp.Status)
	}

	var groqResp GroqResponse
	if err := json.NewDecoder(resp.Body).Decode(&groqResp); err != nil {
		return "", err
	}
	if len(groqResp.Choices) == 0 {
		return "", fmt.Errorf("no choices returned")
	}
	return groqResp.Choices[0].Message.Content, nil
}
