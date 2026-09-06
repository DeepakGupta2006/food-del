import mongoose from "mongoose";
 
export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://greatstack:KtxrnQ22OeWTxPP4@cluster0.e8xodti.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
