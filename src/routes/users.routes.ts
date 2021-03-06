import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../services/CreateUserService';

const usersRoutes = Router();

usersRoutes.post('/', async (request, response)=> {

    const { name, email, password} = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
        name, email, password
    });

    delete user.password;

    return response.json(user);
    
})

export default usersRoutes;

