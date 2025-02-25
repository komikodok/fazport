/* eslint-disable react/prop-types */
const Menu = ({menu, currentPage, setCurrentPage}) => {
    return (
        <div
            onClick={() => setCurrentPage(menu)}
            className={`cursor-pointer flex justify-center items-center rounded-xl text-white ${currentPage === menu && "bg-slate-950 hover:text-white"} hover:text-slate-600`}
        >
            <strong className="p-4">{menu}</strong>
        </div>
    )
};

export default Menu;