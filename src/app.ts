import express from 'express';
import UserController from './controllers/userController/userController';
const app = express();
const port = 3000;

const userController = new UserController()

app.get('/customers/:organizationId', async (req, res) => {
  res.send(await userController.getUsers(req));
});

app.post('/customers', async (req, res) => {
    res.send(await userController.createUser(req, res));
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});