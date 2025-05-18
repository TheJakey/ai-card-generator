import axios, { AxiosError } from "axios";

export interface PromptRequest {
  prompt: string;
}

export type PromptResponse = string[][];

const api = axios.create({
  baseURL: "webapi",
  headers: {
    "Content-Type": "application/json",
  },
});

const API_ENDPOINT = "/ask";

export default {
  async sendPrompt(request: PromptRequest): Promise<PromptResponse> {
    try {
      const response = await api.post<PromptResponse>(API_ENDPOINT, request);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          `Failed to send prompt: ${
            error.response?.data?.message || error.message
          }`
        );
      }
      throw new Error("An unexpected error occurred while sending the prompt");
    }
  },
};
