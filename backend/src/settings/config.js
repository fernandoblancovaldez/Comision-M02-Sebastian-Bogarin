import { config } from "dotenv";

//se ejecuta dotenv para interpretar las variables de entorno declaradas dentro d .env
config();

//se exporta el objeto que reune las variales de entorno
export const env = {
  PORT: process.env.PORT || 5000,
  MONGO: process.env.MONGO_URI || "mongodb://localhost:27017/tripshare",
  DATABASE: process.env.DATABASE_NAME || "tripshare",
};
