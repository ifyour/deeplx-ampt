import fastify from "fastify";
import { http } from "@ampt/sdk";

const app = fastify();

app.get("/translate", (_request, reply) => {
  reply.send({ hello: "ifyour" });
});

http.node.use(app);
