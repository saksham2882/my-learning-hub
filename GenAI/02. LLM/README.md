## What is an LLM?
- **Definition**: Large Language Models (LLMs) are AI models trained on massive datasets to understand and generate human-like content.
- **Examples**: Gemini, GPT, Grok.
- **Purpose**: Answer questions, write content, or hold conversations.

## How LLMs Work
- **Training**: LLMs learn from huge datasets (e.g., books, websites) to predict patterns.
- **Processing**:
  - Take input (prompt) and tokenize it.
  - Use context (history) to make responses relevant.
  - Generate output token by token.
- **Example**:
  - `LLM.js`: Shows a static conversation with predefined history to test context.
  - `LLM_using_History.js`: Dynamic chat with user input, storing history manually.
  - `LLM_automate.js`: Uses a chat session to automatically manage history, simplifying the code.

## What LLMs Cannot Do
- **Understand Emotions**: LLMs mimic human but don’t feel or truly understand emotions.
- **Access Real-Time Data**: They rely on training data or APIs, not live info.
- **Guarantee Accuracy**: They can “hallucinate” incorrect facts.
- **Replace Human Judgment**: They need human oversight for critical tasks.

## Common LLM Challenges
- **Bias**: LLMs can reflect biases in training data.
- **Cost**: APIs like Gemini have usage limits or costs.
- **Ethics**: Risk of misuse, like generating fake content.
- **Complexity**: LLMs can be difficult to integrate and fine-tune.

## My Files
- **LLM.js**: Demonstrates a basic LLM interaction with a static conversation. It shows how context (history) helps the model answer questions like “What is my name?” by remembering “Hi, I am Saksham.”
- **LLM_using_History.js**: Creates an interactive chat where I manually store conversation history in an array. This teaches how LLMs use context to maintain coherent conversations.
- **LLM_automate.js**: Simplifies the chat by using Gemini’s built-in chat session to handle history automatically, showing a more efficient way to build a chatbot.