import { config } from "dotenv";
import envVar from "env-var";

config()

export const env = {
  PORT: envVar.get('PORT').required().asPortNumber(),
  PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString()
}
