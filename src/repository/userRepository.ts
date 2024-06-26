import IUserRepository from "../interface/repository/IUserRepository";
import connection from "../database/connetion";
import { userDto } from "../types/userTypes/userDto";
import { UserUpdateDto } from "../types/userTypes/userUpdateDto";

export default class UserRepository implements IUserRepository {
  public async getUsers(organizationId: number): Promise<userDto[] | []> {
    const users = await connection("customers")
      .select("*")
      .where("organization_id", organizationId)
      .andWhere("active", 1)

    if (!users.length) return [];

    return users;
  }

  public async getUserByCPF(CPF: string): Promise<string | undefined> {
    const users = await connection("customers")
      .select("*")
      .where("cpf", CPF)
      .first();

    if (!users) return undefined;

    return users;
  }

  public async getUserById(id: number): Promise<userDto | undefined> {
    const users = await connection("customers")
      .select("id_customers", "cpf", "customers_name")
      .where("id_customers", id)
      .first();

    if (!users) return undefined;

    return users;
  }

  public async createUser(body: userDto): Promise<number | undefined> {
    const [user] = await connection("customers").insert({
      organization_id: body.organizationId,
      customers_name: body.custurmesName,
      cpf: body.cpf,
    });

    const newUser = await this.getUserById(user);

    if (!newUser) throw new Error("Falha ao criar usuario!");

    return user;
  }

  public async editUser(
    body: UserUpdateDto
  ): Promise<userDto | undefined> {
    const user = await connection("customers")
      .update({
        organization_id: body.organizationId,
        customers_name: body.custurmesName,
        cpf: body.cpf,
      })
      .where("id_customers", body.customersId);

    return await this.getUserById(user);;
  }

  public async deleteUser(
    userId: number
  ): Promise<boolean> {
    const user = await connection("customers")
      .update({active: 0})
      .where("id_customers", userId);

    if(!user) return undefined

    return true
  }
}
