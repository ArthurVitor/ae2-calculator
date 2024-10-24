import { Request, Response } from 'express';
import express from 'express';
const router = express.Router();
router.use(express.json())

import ItemToCraft from '../interfaces/itemToCraft.i';
import ae2Service from '../service/ae2-service';


router.post('/', (req: Request<{}, {}, ItemToCraft[]>, res: Response) => {
    res.send(ae2Service.getRecipes(req.body)).status(200);
});

export default router;