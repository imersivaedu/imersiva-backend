import express from "express";
import { setupWebSocket } from "../infra/websocket/serverSocket";
import  http from 'http';
import { cityRouter, classRouter, schoolRouter, studentRouter, userRouter, authRouter } from "./routers";
import { asyncErrors } from './middlewares/asyncErrors'

const app = express();
const server = http.createServer(app);

app.use(express.json());
setupWebSocket(server);

app.get("/", (req, res) => {
  res.send("working working!!!!");
})
app.use('/student', studentRouter)
app.use('/school', schoolRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/class', classRouter)
app.use('/city', cityRouter)
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../infra/docs/swagger-api.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(asyncErrors as any)

export {app}