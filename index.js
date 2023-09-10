import fastify from "fastify";
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.routes.js';

const server = fastify({logger: true});

server.get("/", async (request, reply) => {
    try {
        
        reply.send({message: "Holasa"});
    } catch (error) {
        reply.send(error);
    }
});
server.register(usersRoutes, {prefix: '/users'});
server.listen(4000, '0.0.0.0', (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});