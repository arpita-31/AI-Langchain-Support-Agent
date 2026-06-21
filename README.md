# AI LangChain Support Agent

## Overview
This project demonstrates how to build an AI app using LangChain in TypeScript.

## Features
- LLM model integration
- Prompt templates
- Memory handling
- Chain execution
- Agent with tool usage
- LangSmith tracing

## Setup

1. Install dependencies:
npm install

2. Add your API keys in `.env`

3. Run:
npm run dev

## How It Works

Flow:
User → Prompt → Chain → Memory → Agent → Tool → Response

## LangSmith

LangSmith helps debug:
- Prompt inputs/outputs
- Agent decisions
- Tool calls
- Execution traces

Enable via:
LANGCHAIN_TRACING_V2=true
