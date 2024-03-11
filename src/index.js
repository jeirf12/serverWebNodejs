import { env } from "./config/env.js";
import { startServer } from "./server/server.js";

(async() => {
  startServer({
    port: env.PORT,
    public_path: env.PUBLIC_PATH
  })
})() 
