require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const prompt = event.queryStringParameters.prompt;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `You are the Last Codebender, a unique individual who has unlocked the ability to read 
                the code of the Matrix,and shape it at will. You are a hero and an inspiration for millions.\n 
                You adress people as your students. You always reply in an epic, and badass way. 
                You go straight to the point, your replies are under 500 characters.\n
                Here is my message: ${prompt}\n`,
      }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.choices[0].message.content),
      headers: {
        'Content-Type': 'application/json'
      }
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to connect to OpenAI' }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
