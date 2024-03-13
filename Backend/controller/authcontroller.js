import userModel from "../models/Users.js";





export const registerController = async (req, res) => {
    // console.log(req.body);
    try {
      const { name, email, address,phone,income,employment } = req.body ;
      //validations
      if (!name || name.trim() === '') {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
      if (!address) {
        return res.send({ message: "Address is Required" });
      }
      if (!income) {
        return res.send({ message: "income is Required" });
      }
      if (!employment) {
        return res.send({ message: "employment is Required" });
      }
     
      //check user
      const exisitingUser = await userModel.findOne({ phone });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register ",
        });
      }
      //register user
      // const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        income,
        employment,
       
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };