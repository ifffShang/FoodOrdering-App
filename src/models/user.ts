import mongoose from "mongoose"

// @ts-ignore
const userSchema = new mongoose.Schema({
    auth0Id:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    name:{
        type: String
    },
    addressLine1:{
        type: String
    },

    city:{
        type: String,
    },
    country:{
        type: String,
    },
});

const User = mongoose.model( "User", userSchema)// @ts-ignore

export default User