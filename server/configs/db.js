import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log('Database coneected Sucessfuly'));
        await mongoose.connect(`${process.env.MONGODB_URI}/QuickShow`)
    } catch (error) {
        console.log('❗ Connection Error:', error.message);
    }
}

export default connectDB;