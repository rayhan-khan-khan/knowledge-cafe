/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {

    return (
        <div className="md:w-1/3 ml-4 bg-gray-300 p-4 mt-2">
            <h1 className="text-xl font-serif font-bold ">Bookmarks blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;