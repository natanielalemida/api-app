import { userDto } from "../../types/userTypes/userDto";

export default abstract class IUserRepository {
    abstract getUsers(organizationId: number) : Promise<string[] | undefined>
    abstract getUserByCPF(cpf: string) : Promise<string | undefined>
    abstract getUserById(id: number) : Promise<number | undefined>
    abstract createUser(body: userDto): Promise<number | undefined>
}