import './style.css'
const TextInput = ({searchValue, handleChange}) => (
        <>
        <input
        className="text-input"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder='Type your search'
        />
        </>
)

export default TextInput;
