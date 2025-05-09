package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"ai-card-generator-webapi/internal/groq"
)

func main() {
	apiUrl := os.Getenv("GROQ_API_URL")
	if apiUrl == "" {
		log.Fatal("GROQ_API_URL environment variable not set")
	}

	apiKey := os.Getenv("GROQ_API_KEY")
	if apiKey == "" {
		log.Fatal("GROQ_API_KEY environment variable not set")
	}

	systemMessage := os.Getenv("GROQ_SYSTEM_MESSAGE")
	if systemMessage == "" {
		log.Fatal("GROQ_SYSTEM_MESSAGE environment variable not set")
	}

	model := os.Getenv("GROQ_MODEL")
	if model == "" {
		model = "meta-llama/llama-4-maverick-17b-128e-instruct"
	}

	groqClient := groq.NewClient(apiUrl, apiKey, systemMessage, model)

	http.HandleFunc("/ask", func(w http.ResponseWriter, r *http.Request) {
		var req struct {
			Prompt string `json:"prompt"`
		}

		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid request", http.StatusBadRequest)
			return
		}

		answer, err := groqClient.ChatCompletion(req.Prompt)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		var parsedAnswer [][]string
		err = json.Unmarshal([]byte(answer), &parsedAnswer)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(parsedAnswer)
	})

	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
