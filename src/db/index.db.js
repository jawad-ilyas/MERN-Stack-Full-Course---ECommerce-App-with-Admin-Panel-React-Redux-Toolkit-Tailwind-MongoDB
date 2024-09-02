import mongoose from "mongoose"



const connectDb = async () => {

    try {
        const conection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("index db :: connectDb :: db connected ")
        return conection;
    } catch (error) {
        console.log("index db :: connectDb :: error ", error)
    }
}


export { connectDb }