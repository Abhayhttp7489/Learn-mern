import express from "express";
import cors from "cors";

const port = 3000;
const app = express(); //express is a framework for building web applications
app.use(cors()); //middleware to allow cross-origin requests

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello World",
        status: "success",
        data: {
            name: "Harsh",
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
