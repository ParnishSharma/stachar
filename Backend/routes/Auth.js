import express from 'express';
import {
  registerController,
//   loginController,
//   testController,
//   forgotPasswordController,

} from "../controller/authcontroller.js";


const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);



export default router;