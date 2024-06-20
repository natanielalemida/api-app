import IUserControler from "../../interface/controllers/IUserController";
import validator from "../../middleware/validator";
import UserService from "../../service/userService/userService";
import { statusDto } from "../../types/statusDto";
import { userDto } from "../../types/userTypes/userDto";

export default class UserController implements IUserControler {
  private userService = new UserService();

  public async getUsers(req): Promise<userDto[] | undefined> {
    const { verifyOrganizationNumber } = validator();

    const { organizationId } = req.params;
    verifyOrganizationNumber(organizationId);
    return await this.userService.getUsers(organizationId);
  }

  public async createUser(req): Promise<statusDto> {

    const { verifyBodyUser } = validator();
    const { body } = req;
    const data = verifyBodyUser(body);

    const creanteduser = await this.userService.createUser(data)

    if(!creanteduser) return { status: 500, message: 'Cannot create user' }

    return { status: 200, message: 'User created successfully' };
  }
}
