import { userDto } from "../../types/userTypes/userDto";

export default abstract class IUserService {
    abstract getUsers(organizationId: number) : Promise<string[] | []>
    abstract createUser(body: userDto) : Promise<number | undefined>
}