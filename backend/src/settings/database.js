import { connect } from "mongoose";

//se crea la funcion que va a conectarse con la bdd de mongo desde app.js
export const startConnection = async ({ uri, database }) => {
  try {
    const db = await connect(uri, {
      dbName: database,
    });

    console.log(`Connected to ${db.connection.name} database`);
  } catch (error) {
    console.log(error);
  }
};
