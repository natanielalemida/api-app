import { userDto } from "../../types/userTypes/userDto";
import { UserUpdateDto } from "../../types/userTypes/userUpdateDto";

export default abstract class IUserService {
    abstract getUsers(organizationId: number) : Promise<userDto[] | []>
    abstract createUser(body: userDto) : Promise<number | undefined>
    abstract editUser(body: UserUpdateDto) : Promise<userDto | undefined>
}