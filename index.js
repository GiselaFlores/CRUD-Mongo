// https://www.mongodb.com/try/download/community

// 3764861704
// joelnicolass@gmail.com

import express from "express";
import userRoutes from "./src/routes/user.routes.js";
import { connect } from "./src/storage/mongo/connect.js";

// declarar la instacia de express
const app = express();

// 1 configuraciones
const port = 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect();
app.use(userRoutes);

// 2 rutas
//CRUD
//app.post(); // C
//app.get(); // R
//app.put(); // U
//app.delete(); // D

// 3 iniciar el servidor
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
