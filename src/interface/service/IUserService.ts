import { userDto } from "../../types/userTypes/userDto";

export default abstract class IUserService {
    abstract getUsers(organizationId: number) : Promise<string[] | undefined>
    abstract createUser(body: userDto) : Promise<number | undefined>
}