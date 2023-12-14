import { verifyJWT } from "../utils/jwt.js";
import { UserModel } from "../models/user-model.js";

//se crea middleware para recibir el token por headers, extraer el id de usuario y con eso traer el usuario adecuado
export const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const { userId } = await verifyJWT({ token });

    const user = await UserModel.findOne({ _id: userId });

    if (!user) return res.status(401).json({ error: "Invalid token" });

    //una vez extraido el user se lo pega a la request como nueva propiedad
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
