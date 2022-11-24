import { NextFunction, Request, Response } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// get all the products
export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await prisma.products.findMany()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
}
// get all the blogs
export const getAllBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const blogs = await prisma.blogs.findMany()
        res.status(200).json(blogs)
    } catch (error) {
        next(error)
    }
}