import db from '../models/db.js';

export default {
    async find () {
        const users = await db.users.find();
        return { message:users }
    },
    async findOne (id) {
        const user = await db.users.findOne({_id: id});
        return { message:user }
    },
    async create (user) {
        const newUser = await db.users.create(user);
        return { message: newUser }
    },
    async update (id, user) {
        const updatedUser = await db.users.updateOne({_id: id}, user);
        return { message: updatedUser }
    },
    async delete (id) { 
        const deletedUser = await db.users.deleteOne({_id: id});
        return { message: deletedUser }
    }
}