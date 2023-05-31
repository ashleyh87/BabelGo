require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const userInput = "What rooms do you have available?";
const languageInput = "French"

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Translate this into ${languageInput} \n\n${userInput}\n\n1.`,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
});
