import { userDto } from "../../types/userTypes/userDto";
import { UserUpdateDto } from "../../types/userTypes/userUpdateDto";

export default abstract class IUserRepository {
    abstract getUsers(organizationId: number) : Promise<userDto[] | []>
    abstract getUserByCPF(cpf: string) : Promise<string | undefined>
    abstract getUserById(id: number) : Promise<userDto | undefined>
    abstract createUser(body: userDto): Promise<number | undefined>
    abstract editUser(body: UserUpdateDto): Promise<userDto | undefined>
}