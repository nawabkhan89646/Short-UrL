import { set, connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    console.log("Connecting to MongoDB...");

    set("strictQuery", false);

    try {
        const conn = await connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
