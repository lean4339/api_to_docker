import mongoose from 'mongoose';
import UserSchema from './User.model.js';



    
        const db = await mongoose.connect('mongodb://db:27017/data');
        console.log('connected')
        const users = db.model('users', UserSchema);
        export default {users};


