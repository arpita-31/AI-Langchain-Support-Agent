import dotenv from "dotenv";
dotenv.config();

import readline from "readline";
import { chain } from "./chain.js";
import { createAgent } from "./agent.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = async () => {
  const agent = await createAgent();

  console.log("AI Support Assistant Started (type 'exit' to quit)\n");

  const ask = () => {
    rl.question("You: ", async (input) => {
      if (input === "exit") {
        rl.close();
        return;
      }

      try {
        // Step 1: Chain response with memory
        const chainResponse = await chain.call({
          question: input,
        });

        console.log("\nChain Response:", chainResponse.text);

        // Step 2: Agent decides tool usage
        const agentResponse = await agent.call({
          input: input,
        });

        console.log("\nAgent Response:", agentResponse.output);
      } catch (err) {
        console.error("Error:", err);
      }

      ask();
    });
  };

  ask();
};

start();