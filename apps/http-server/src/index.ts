import express from "express";
import { prismaClient } from "../../../packages/prisma/src/index"

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "hello world"
    })
})

app.post('/post', async (req, res) => {
    const { username, password } = req.body;
    try {
        await prismaClient.User.create({
            data: {
                username,
                password
            }
        })
    } catch (e) {
        res.json({
            message: "error occured while sign up"
        })
    }
})

app.listen(3001);