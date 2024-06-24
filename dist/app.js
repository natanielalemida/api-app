"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("./controllers/userController/userController"));
const employeeController_1 = __importDefault(require("./controllers/employeeController/employeeController"));
const productController_1 = __importDefault(require("./controllers/productController/productController"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const userController = new userController_1.default();
const employeeController = new employeeController_1.default();
const productController = new productController_1.default();
/* PRODUCTS SESSION */
app.get('/products/:organizationId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield productController.getProducts(req));
}));
app.get('/product/:productId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productController.getProductById(req);
    return res.status(result.status).send(result.body);
}));
app.post('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productController.createProducts(req);
    return res.status(result.status).send(result.message);
}));
app.put('/product', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productController.editProduct(req);
    return res.status(result.status).send(result.message);
}));
app.delete('/product/:productId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield productController.deleteProduct(req);
    return res.status(result.status).send(result.message);
}));
/* END SESSION */
/* CUSTOMERS SESSION */
app.get('/customers/:organizationId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield userController.getUsers(req));
}));
app.post('/customers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.createUser(req);
    return res.status(result.status).send(result.message);
}));
app.put('/customers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.editUser(req);
    return res.status(result.status).send(result.message);
}));
app.delete('/customers/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.deleteUser(req);
    return res.status(result.status).send(result.message);
}));
/* END SESSION */
/* EMPLOYEE SESSION */
app.get('/employee/:organizationId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield employeeController.getEmployeeByOrganizationId(req));
}));
app.delete('/employee/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield employeeController.deleteUser(req));
}));
app.post('/auth', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield employeeController.validateEmailAndPassword(req));
}));
/* END SESSION */
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map