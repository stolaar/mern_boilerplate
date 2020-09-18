const keys = {
    db: {
        uri: process.env.MONGO_URI,
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT,
        database: process.env.MONGO_DATABASE,
        options: process.env.MONGO_OPTIONS
    }
}

export default keys
