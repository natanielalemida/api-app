import IUserControler from "../../interface/controllers/IUserControler";
import validator from "../../middleware/validator";
import UserService from "../../service/userService/userService";

export default class UserController implements IUserControler {
  private userService = new UserService();

  public async getUsers(req): Promise<string[] | undefined> {
    const { verifyOrganizationNumber } = validator();

    const { organizationId } = req.params;
    verifyOrganizationNumber(organizationId);
    return await this.userService.getUsers(organizationId);
  }

  public async createUser(req, res): Promise<string | undefined> {

    const { verifyBodyUser } = validator();
    const { body } = req.params;

    const data = verifyBodyUser(body);

    if(!data) return res.status(404)

    return res.status(200)
  }
}
