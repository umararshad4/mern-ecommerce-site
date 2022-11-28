import Axios from 'axios'
import { useEffect, useState } from 'react'

export interface BlogsType {
    id: string
    image: string
    title: string
    description: string
    date: string
}
const Blogs = () => {

    const [blogs, setBlogs] = useState<BlogsType[]>()
    const fetchAllBlogs = async () => {
        const response = await Axios.get("http://localhost:5000/api/blogs")
        setBlogs(response.data)
        // console.log(response);

    }
    useEffect(() => {
        fetchAllBlogs()
    }, [blogs])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center py-8 text-3xl uppercase font-black">Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-20">

                {
                    blogs?.map((blog) => (
                        <div key={blog.id} className="">
                            <h1 className="text-xl z-100">{blog.title}</h1>
                            <img className="rounded-lg hover:overflow-y hover:scale-105 transition-all z-10" src={blog.image} alt={blog.title} />
                            <p>{blog.description}</p>
                            <h3 className="font-bold">{blog.date}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs;