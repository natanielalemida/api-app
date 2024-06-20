import IUserRepository from "../interface/repository/IUserRepository";
import connection from "../database/connetion";
import { userDto } from "../types/userTypes/userDto";

export default class UserRepository implements IUserRepository {
  public async getUsers(organizationId: number): Promise<string[] | undefined> {
    const users = await connection('customers').select('*').where('organization_id', organizationId);

    if(!users.length) return undefined

    return users
  }

  public async getUserByCPF(CPF: string): Promise<string | undefined> {
    const users = await connection('customers').select('*').where('cpf', CPF).first();

    if(!users) return undefined

    return users
  }

  public async getUserById(id: number): Promise<number | undefined> {
    const users = await connection('customers').select('*').where('id_customers', id).first();

    if(!users) return undefined

    return users
  }


  public async createUser(body: userDto): Promise<number | undefined> {
    const [user] = await connection('customers').insert({
        organization_id: body.organizationId,
        customers_name: body.custurmesName,
        cpf: body.cpf,
    })

    const newUser = await this.getUserById(user)

    if(!newUser) throw new Error('Falha ao criar usuario!')

    return user
  }

}