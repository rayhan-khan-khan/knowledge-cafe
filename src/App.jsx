
import { useState } from 'react'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmark] = useState([]); 

  const handleAdd = blog =>{
     const newBookmark = [...bookmarks, blog]
     setBookmark(newBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAdd={handleAdd}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
