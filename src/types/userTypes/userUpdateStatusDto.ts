export type userUpdateStatusDto = {
    status: number,
    message: string,
    body?: {
        organizationId: number,
        custurmesName: string,
        cpf: string;
    }
}