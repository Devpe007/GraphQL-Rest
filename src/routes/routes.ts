import { Router } from 'express';

import { CreateUserController } from '@modules/users/controllers/CreateUserController';
import { GetPostsByUserController } from '@modules/posts/controllers/GetPostsByUserController';

const createUserController = new CreateUserController();
const getPostsByUserController = new GetPostsByUserController();

const routes = Router();

routes.post('/users', createUserController.handle);

routes.get('/posts/user/:id', getPostsByUserController.handle);

export { routes };