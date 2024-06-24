import { ProductDto } from "./productDto"

export type ProductStatusDto = {
    status: number,
    message: string,
    body?: ProductDto
}