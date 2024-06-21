
import IUserService from "../../interface/service/IUserService";
import UserRepository from "../../repository/userRepository";
import { userDto } from "../../types/userTypes/userDto";
import { UserUpdateDto } from "../../types/userTypes/userUpdateDto";
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

  public async getUserId(id: number): Promise<userDto | undefined> {
    return await this.userRepository.getUserById(id)
  }

  public async createUser(body: userDto): Promise<number | undefined> {

    await this.organizatioService.verifyOrganizationById(body.organizationId)

    const user = await this.getUserCPF(body.cpf)

    if(user) {
        throw new Error('already registered user!')
    }

    return await this.userRepository.createUser(body)
  }

  public async editUser(body: UserUpdateDto): Promise<userDto | undefined> {

    await this.organizatioService.verifyOrganizationById(body.organizationId)

    const user = await this.getUserId(body.customersId)

    if(!user) {
        throw new Error('User not found!')
    }

    return await this.userRepository.editUser(body)
  }
}
