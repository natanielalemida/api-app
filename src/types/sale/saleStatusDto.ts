import { SaleDto } from "./saleDto"

export type SaleStatusDto = {
    status: number,
    message: string,
    body?: SaleDto
}