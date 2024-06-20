export default abstract class IUserControler {
    abstract getUsers(params: any) : Promise<string[] | undefined>
    abstract createUser(req: any, res: any) : Promise<string | undefined>
}