const OLLAMA_URL =
  process.env.OLLAMA_URL ||
  "http://192.168.4.54:11434/api/generate";

export const generateWithOllama =
  async (prompt) => {

    const response = await fetch(
      OLLAMA_URL,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          model: "llama3",
          prompt,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to connect to Ollama"
      );
    }

    const data =
      await response.json();

    return data.response;
  };