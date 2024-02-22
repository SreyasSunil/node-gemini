const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(process.env.API_KEY)

// Model Initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

const history = [];
exports.history;

exports.generateResponse = async (req, res) => {
    try {
        const { prompt } = req.body;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);

        history.push(text);
        console.log(history)

        res.send({ response: text });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
