import { Client } from "https://deno.land/x/mysql/mod.ts";
import { load } from "https://deno.land/std@0.206.0/dotenv/mod.ts";

const env = await load();
const client = await new Client().connect({
    hostname: env["DB_HOSTNAME"],
    port: Number(env["DB_PORT"]),
    db: env["DB_NAME"],
    user: env["DB_USER"],
    password: env["DB_PASSWORD"],
});

export default client