import pkg from 'mongoose';

const {Schema} = pkg;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});



export default UserSchema;