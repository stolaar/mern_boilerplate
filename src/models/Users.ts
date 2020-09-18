import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    email: {
        type: String,
        isRequired: true
    },
    password: {
        type: String,
        isRequired: true
    },
    user_type: {
        type: String,
        isRequired: true
    }
})
const User = mongoose.model("users", UserSchema, "users");
export default User
