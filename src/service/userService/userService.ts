
import IUserService from "../../interface/service/IUserService";
import UserRepository from "../../repository/userRepository";
import { userDto } from "../../types/userTypes/userDto";
import OrganizationService from "../organizationService/organizationService";

export default class UserService implements IUserService {
    private userRepository = new UserRepository()
    private organizatioService = new OrganizationService()
    
  public async getUsers(organizationId: number): Promise<userDto[] | []> {

    await this.organizatioService.verifyOrganizationById(organizationId)


    return await this.userRepository.getUsers(organizationId)
  }

  public async getUserCPF(CPF: string): Promise<string | undefined> {
    return await this.userRepository.getUserByCPF(CPF)
  }

  public async createUser(body: userDto): Promise<number | undefined> {

    await this.organizatioService.verifyOrganizationById(body.organizationId)

    const user = await this.getUserCPF(body.cpf)

    if(user) {
        throw new Error('Usuario ja cadastrado!')
    }

    return await this.userRepository.createUser(body)
  }
}
