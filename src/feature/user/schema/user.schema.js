import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user name is requires"],
        maxLength: [30, "user name can't exceed 30 characters"],
        minLength: [2, "name should have atleast 2 charcters"],
      },
      tasks:{type:mongoose.Types.ObjectId,ref:"Tasks"}
})