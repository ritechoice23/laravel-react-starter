import SearchIcon from "@/components/icons/SearchIcon";

const SearchBar = () => {
    return (
        <div className="items-center hidden w-full px-4 py-2 text-gray-400 rounded-lg bg-slate-100 lg:flex lg:w-1/3">
            <SearchIcon className="w-5 h-5 mr-2" />
            <input
                type="text"
                placeholder="Search"
                className="w-full text-gray-400 bg-slate-100 focus:outline-none"
            />
            {/* <div className="flex items-center ml-2 space-x-1 text-sm">
                <kbd className="px-1 text-gray-300 rounded bg-slate-100">Ctrl</kbd>
                <span>+</span>
                <kbd className="px-1 text-gray-300 rounded bg-slate-100">K</kbd>
            </div> */}
        </div>
    );
}

export default SearchBar;
