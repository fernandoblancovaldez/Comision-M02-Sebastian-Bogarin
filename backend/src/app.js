import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./settings/config.js";
import { startConnection } from "./settings/database.js";

//se crea el servidor
const app = express();

//se aplican Middlewares comunes
app.use(express.json()); //Middleware para interpretar JSON por body
app.use(express.urlencoded({ extended: true })); //Middleware para habilitar los formularios HTML
app.use(express.static("public")); //Middleware para leer archivos estaticos de la carpeta "public"
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

//se pone en escucha en el puerto designado en las variables de entorno
app.listen(env.PORT, async () => {
  await startConnection({ uri: env.MONGO, database: env.DATABASE });
  console.log(`Server is running on port: http://localhost:${env.PORT}`);
});
