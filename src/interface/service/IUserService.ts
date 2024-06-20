import { userDto } from "../../types/userTypes/userDto";

export default abstract class IUserService {
    abstract getUsers(organizationId: number) : Promise<userDto[] | []>
    abstract createUser(body: userDto) : Promise<number | undefined>
}