import { statusDto } from "../../types/statusDto";
import { userDto } from "../../types/userTypes/userDto";
import { userUpdateStatusDto } from "../../types/userTypes/userUpdateStatusDto";

export default abstract class IUserControler {
    abstract getUsers(params) : Promise<userDto[]>
    abstract createUser(req) : Promise<statusDto>
    abstract editUser(req) : Promise<userUpdateStatusDto>
    abstract deleteUser(req): Promise<statusDto>
}