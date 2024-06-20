import { statusDto } from "../../types/statusDto";
import { userDto } from "../../types/userTypes/userDto";

export default abstract class IUserControler {
    abstract getUsers(params) : Promise<userDto[] | undefined>
    abstract createUser(req) : Promise<statusDto>
}