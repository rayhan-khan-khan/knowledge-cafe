/* eslint-disable react/prop-types */

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>

            <h2 className="text-xl mb-4 drop-shadow-2xl font-bold bg-slate-300 rounded p-4 ">{title}</h2>
        </div>
    );
};

export default Bookmark;