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
// get a single product
export const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const product = await prisma.products.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(product)
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
// get a single blogs
export const getSingleBlog = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {
        const blog = await prisma.blogs.findUnique({
            where: {
                id
            }
        })
        res.status(200).json(blog)
    } catch (error) {
        next(error)
    }
}