import express from 'express';
import UserController from './controllers/userController/userController';
import EmployeeController from './controllers/employeeController/employeeController';
const app = express();
const port = 3000;
app.use(express.json());

const userController = new UserController()
const employeeController = new EmployeeController()

app.get('/customers/:organizationId', async (req, res) => {
  res.send(await userController.getUsers(req));
});

app.post('/customers', async (req, res) => {
  const result = await userController.createUser(req);
  return res.status(result.status).send(result.message);
});

app.get('/employee/:organizationId', async (req, res) => {
  res.send(await employeeController.getEmployeeByOrganizationId(req))
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});