import { LLMChain } from "langchain/chains";
import { model } from "./model.js";
import { prompt } from "./prompt.js";
import { memory } from "./memory.js";

export const chain = new LLMChain({
  llm: model,
  prompt,
  memory,
});