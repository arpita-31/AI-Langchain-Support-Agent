import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { model } from "./model.js";
import { tools } from "./tools.js";

export const createAgent = async () => {
  return await initializeAgentExecutorWithOptions(
    tools,
    model,
    {
      agentType: "zero-shot-react-description",
      verbose: true,
    }
  );
};