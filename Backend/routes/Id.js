import express from "express";
import {

  createIdController,

} from "../controller/idcontroller.js";











const router = express.Router();

//routes
router.post(
  "/create-id",
  createIdController
);



export default router;