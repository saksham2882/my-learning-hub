# Generative AI (GenAI): Day 1 Basics


## Introduction to GenAI
Generative AI (GenAI) is a type of artificial intelligence that creates new content, like text, images, music, or code, by learning patterns from data. Unlike traditional AI that might classify or predict, GenAI generates something new. For example, it can write stories, create art, or compose music.

## What is GenAI and How is it Different?
- **What is GenAI?**: GenAI systems learn from large datasets to produce original outputs. For example, a model like GPT can write human-like text, or DALL·E can generate images from text prompts.
- **Difference from Other AI**:
  - **Traditional AI** (e.g., rule-based systems): Follows fixed rules, no creativity.
  - **Predictive AI** (e.g., classification models): Predicts outcomes, like spam detection.
  - **GenAI**: Creates new content, not just predictions or classifications. It’s dynamic and creative, but needs more data and computation.

## Key Terms in GenAI
- **Tokenization**: Breaking down input (text, etc.) into smaller pieces called tokens. Tokens can be words, subwords, or characters. For example, the sentence "Hi, how are you" might be tokenized into: ["Hi", ",", "how", "are", "you"].
- **Token**: A single unit of meaning (e.g., a word or punctuation). Tokens are used by models to process and generate text.
- **Embedding**: A numerical representation of tokens capturing their meaning. For example, "king" and "queen" have similar embeddings because they’re related.
- **Model**: The AI system (e.g., GPT, Stable Diffusion) trained to generate content.
- **Prompt**: The input you give to a GenAI model, like “Write a story about a robot.”
- **Fine-tuning**: Adjusting a pre-trained model for specific tasks, like making it better at writing poems.

## How GenAI Works (With Tokenization Example)
GenAI models, like language models, process input and generate output using these steps:
1. **Input Processing**:
   - Input: “Hi, how are you”
   - **Tokenization**: The model splits the input into tokens: ["Hi", ",", "how", "are", "you"]. Each token gets a unique ID (e.g., "Hi" = 1234, "," = 56, etc.).
   - **Embedding**: Tokens are converted into numerical vectors that capture their meaning.
2. **Model Processing**:
   - The model (e.g., a neural network like GPT) analyzes the sequence of tokens using patterns learned during training.
   - It predicts the next token based on the context (e.g., after “Hi, how are you”, it might predict “?” or a response like “I’m good!”).
3. **Output Generation**:
   - The model generates tokens one by one, converting them back to text.
   - For example, it might output: “I’m doing great, thanks for asking!”
4. **Training**: Models are trained on huge datasets (e.g., books, websites) to learn language patterns.

**Example**: For input “Hi, how are you”:
- Tokens: ["Hi", ",", "how", "are", "you"]
- Model predicts a response by generating tokens like ["I’m", "doing", "great", ",", "thanks"].
- Final output: “I’m doing great, thanks!”

## Fields Where GenAI is Used
- **Content Creation**: Writing articles, stories, or social media posts.
- **Art and Design**: Generating images, logos, or 3D models (e.g., Stable Diffusion).
- **Music and Audio**: Creating music or voiceovers (e.g., AI-generated songs).
- **Coding**: Writing or debugging code (e.g., GitHub Copilot).
- **Healthcare**: Generating medical reports or drug discovery simulations.
- **Education**: Creating personalized study materials or tutoring systems.
- **Gaming**: Generating game levels, characters, or storylines.


## Challenges in GenAI
- **Bias**: Models can reflect biases in training data (e.g., unfair language).
- **Cost**: Training and running GenAI models is expensive.
- **Ethics**: Misuse for deepfakes or misinformation.
- **Accuracy**: Models can “hallucinate” incorrect facts.