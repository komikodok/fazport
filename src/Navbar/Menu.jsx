/* eslint-disable react/prop-types */
const Menu = ({menu, currentPage, setCurrentPage}) => {
    return (
        <div
            onClick={() => setCurrentPage(menu)}
            className={`cursor-pointer flex justify-center items-center rounded-xl ${currentPage === menu && "bg-slate-950"}`}
        >
            <strong className="p-4 text-white">{menu}</strong>
        </div>
    )
};

export default Menu;