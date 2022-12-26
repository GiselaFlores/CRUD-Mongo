import mongoose from "mongoose";

export const connect = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://codo:4UYkG4eckwheTYlX@db01.pulgqpp.mongodb.net/test",
        {}
      )
      .then(() => {
        console.log("Database connected");
      });
    return;
  } catch (error) {
    console.log(error);
    console.log("Database not connected");
    return;
  }
};
