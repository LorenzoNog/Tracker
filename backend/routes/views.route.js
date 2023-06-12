import { Router } from "express";

const ViewsRouter = Router();

ViewsRouter.get('/', (req,res) => {
    res.send('pantalla de inicio')
});



export default ViewsRouter;
