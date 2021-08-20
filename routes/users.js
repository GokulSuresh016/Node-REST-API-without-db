import express from 'express';
import { getUsers,postUser,getUser,deleteUser,updateUser} from '../controllers/users.js';

const router = express.Router();


router.get('/', getUsers);

router.post('/', postUser);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser)

export default router;