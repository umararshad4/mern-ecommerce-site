import { getAllProducts, getAllBlogs } from './../controller/products.controller';
import express from 'express'
const router = express.Router()

//todo: CRUD operations on products 
router.get('/products', getAllProducts)
router.get('/blogs', getAllBlogs)

export default router