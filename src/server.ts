import express from "express";
import payload from "payload";
import next from "next";
import dotenv from "dotenv";
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET as string,
    express: server,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Custom route to serve Next.js pages
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
