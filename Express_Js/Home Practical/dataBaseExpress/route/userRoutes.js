import express from "express";
import { createUser, viewAllUsers } from "../controller/userController";

const route = express.Router();

use.post("/create", createUser);
use.get("/getAll", viewAllUsers);

export default route;