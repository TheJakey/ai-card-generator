package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"ai-card-generator-webapi/internal/groq"
)

func main() {
	apiKey := os.Getenv("GROQ_API_KEY")

	if apiKey == "" {
		log.Fatal("GROQ_API_KEY environment variable not set")
	}
	groqClient := groq.NewClient(apiKey)

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
		json.NewEncoder(w).Encode(map[string]string{"answer": answer})
	})

	log.Println("Server started on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
