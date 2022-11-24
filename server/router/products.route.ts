import { getAllProducts, getAllBlogs, getSingleProduct, getSingleBlog } from './../controller/products.controller';
import express from 'express'
const router = express.Router()

//todo: CRUD operations on products 
router.get('/products', getAllProducts)
router.get('/product/:id', getSingleProduct)
router.get('/blogs', getAllBlogs)
router.get('/blog/:id', getSingleBlog)

export default router