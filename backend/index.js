import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGODB_URI;
const app = express(); //express is a framework for building web applications

// Connect to MongoDB function
const connectDb = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};
app.use(cors({
    origin: "http://localhost:5173", //request kewal issi origin se aayega
})); //middleware to allow cross-origin requests

app.use(express.json()); // server ko json data send karne ke liye use karna padta hai ye middleware hai

app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
        status: "success",
        data: {
            name: "Harsh",
        }
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    res.send({status: "success", message: "Data received successfully"});
});

app.listen(port, () => {
    connectDb();
    console.log(`Server is running on port ${port}`);
});
