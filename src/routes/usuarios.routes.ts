import { Router } from 'express';

const usuariosRouter = Router();

usuariosRouter.post('/', (req, res) => {
    try{
        return res.json({ ok: 'rota de usuarios'});
    } catch(erro) {
        return res.status(400).json({ error: erro.message });
    }
});

export default usuariosRouter;
