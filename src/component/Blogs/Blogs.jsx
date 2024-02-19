
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({handleAdd}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3 className="text-xl">Blogs</h3>
            {
                blogs.map(blog => <Blog
                     key={blog.id}
                     blog={blog}
                    handleAdd={handleAdd}
                     ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAdd: PropTypes.func
}

export default Blogs;