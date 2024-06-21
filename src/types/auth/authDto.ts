export type AuthDto = {
    status: boolean,
    body?: UserDto

}

type UserDto = {
    idEmployee: number,
    employeeName: string,
    employeeEmail: string,
    employeeCpf: string,
    employeePhone: string,
    employeePhoto: string
}