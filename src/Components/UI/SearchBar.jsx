
const SearchBar = ({ type, placeholder, className, onChange }) => {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
