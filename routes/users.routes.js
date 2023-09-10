import usersController from "../controllers/users.controller.js"

export default async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return await usersController.find();
    });
    fastify.get('/:id', async (request, reply) => {
        return await usersController.findOne(request.params.id);
    });
    fastify.post('/', async (request, reply) => {
        return await usersController.create(request.body);
    });
    fastify.put('/:id', async (request, reply) => {
        return await usersController.update(request.params.id, request.body);
    });
    fastify.delete('/:id', async (request, reply) => {
        return await usersController.delete(request.params.id);
    });
  }
  