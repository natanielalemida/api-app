import { statusDto } from "../../types/userTypes/statusDto";

export default abstract class IUserControler {
    abstract getUsers(params: any) : Promise<string[] | undefined>
    abstract createUser(req: any) : Promise<statusDto>
}