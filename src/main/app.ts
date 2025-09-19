import express from "express";
import cors from "cors";
import { setupWebSocket } from "../infra/websocket/serverSocket";
import http from "http";
import {
  cityRouter,
  classRouter,
  schoolRouter,
  studentRouter,
  userRouter,
  authRouter,
  experienceRouter,
} from "./routers";
import { asyncErrors } from "./middlewares/asyncErrors";

const app = express();
const server = http.createServer(app);

// Configure CORS to allow requests from frontend
app.use(
  cors({
    origin: [/^http:\/\/localhost:\d+$/], // to permitindo todas as portas de localhost
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
setupWebSocket(server);

app.get("/", (req, res) => {
  res.send("working working!!!!");
});
app.use("/student", studentRouter);
app.use("/school", schoolRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/class", classRouter);
app.use("/city", cityRouter);
app.use("/auth", authRouter);
app.use("/experience", experienceRouter);
import swaggerUi from "swagger-ui-express";
const swaggerDocument = require("../infra/docs/swagger-api.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(asyncErrors as any);

export { app };
