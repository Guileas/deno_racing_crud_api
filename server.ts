import { Application } from "https://deno.land/x/oak/mod.ts";
import client from "./db/client.ts";
import { load } from "https://deno.land/std@0.206.0/dotenv/mod.ts";

const env = await load();
const app = new Application();

app.use(async (ctx) => {
    ctx.response.body = "Hello players!";
});

await app.listen({ port: Number(env["APP_PORT"]) });