import { BufferMemory } from "langchain/memory";

export const memory = new BufferMemory({
  memoryKey: "history",
  returnMessages: true,
});