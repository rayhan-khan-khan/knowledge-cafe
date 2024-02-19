import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAdd }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div className='mb-20'>
            <img className='w-full h-[300px] mb-4 rounded-md' src={cover} alt={`Cover picter of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex mb-2 items-center'>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="font-serif text-xl font-bold">{author}</h3>
                        <p className='text-[#0b0b0b99] text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-gray-600'>{reading_time} min read</span>
                    <button onClick={() => handleAdd (blog)} className='ml-2 text-purple-700'>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-xl mb-2 text-orange-600">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAdd: PropTypes.func
}

export default Blog;