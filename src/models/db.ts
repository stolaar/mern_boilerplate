import mongoose from 'mongoose'
import {logger} from "../logger/logger";

const connectDb = async (mongoURI: string) => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        logger.info("MongoDB connected!")
    } catch (err) {
        logger.error({label: "MongoDB error", error: err})
        process.exit(1)
    }
}

export default connectDb
