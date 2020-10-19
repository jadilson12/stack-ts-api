import { Router } from 'express';

const routes = Router();

routes.post('/users', (req, res) => {
  const { name } = req.body;
  const user = {
    name: name,
  };

  return res.json(user);
});

export default routes;
