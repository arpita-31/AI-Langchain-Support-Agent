import { PromptTemplate } from "langchain/prompts";

export const prompt = PromptTemplate.fromTemplate(`
You are a helpful support assistant.

Conversation history:
{history}

User question:
{question}

Answer clearly:
`);