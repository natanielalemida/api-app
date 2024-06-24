import express from 'express';
import UserController from './controllers/userController/userController';
import EmployeeController from './controllers/employeeController/employeeController';
import ProductController from './controllers/productController/productController';

const app = express();

const port = 3000;

app.use(express.json());

const userController = new UserController()
const employeeController = new EmployeeController()
const productController = new ProductController()

/* PRODUCTS SESSION */

app.get('/products/:organizationId', async (req, res) => {
  res.send(await productController.getProducts(req))
});

app.get('/product/:productId', async (req, res) => {
  const result = await productController.getProductById(req)
  return res.status(result.status).send(result.body);
});

app.post('/product', async (req, res) => {
  const result = await productController.createProducts(req)
  return res.status(result.status).send(result.message);
});

app.put('/product', async (req, res) => {
  const result = await productController.editProduct(req);
  return res.status(result.status).send(result.message);
});

app.delete('/product/:productId', async (req, res) => {
  const result = await productController.deleteProduct(req);
  return res.status(result.status).send(result.message);
});

/* END SESSION */

/* CUSTOMERS SESSION */

app.get('/customers/:organizationId', async (req, res) => {
  res.send(await userController.getUsers(req));
});

app.post('/customers', async (req, res) => {
  const result = await userController.createUser(req);
  return res.status(result.status).send(result.message);
});

app.put('/customers', async (req, res) => {
  const result = await userController.editUser(req);
  return res.status(result.status).send(result.message);
});

app.delete('/customers/:userId', async (req, res) => {
  const result = await userController.deleteUser(req);
  return res.status(result.status).send(result.message);
});

/* END SESSION */

/* EMPLOYEE SESSION */

app.get('/employee/:organizationId', async (req, res) => {
  res.send(await employeeController.getEmployeeByOrganizationId(req))
});

app.delete('/employee/:userId', async (req, res) => {
  res.send(await employeeController.deleteUser(req))
});

app.post('/auth', async (req, res) => {
  res.send(await employeeController.validateEmailAndPassword(req))
});

/* END SESSION */

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});