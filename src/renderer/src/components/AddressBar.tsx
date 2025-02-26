import { useState } from "react"

const AddressBar = ({
  url,
  setUrl
}: {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}): JSX.Element => {
  const [value, setValue] = useState<string>(url)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <>
    <div className="p-2 w-1 h-1 rounded-full bg-black absolute top-4 left-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}>

</div>
      {!isExpanded &&
        <nav className="navbar p-2 w-1/3 border-bottom-dark absolute rounded-md top-10 left-4 drag bg-black text-white">
          <form
            className={`flex transition-all duration-300`}
            onSubmit={(e) => {
              e.preventDefault();
              setUrl(value);
            }}
          >
            <input
              type="text"
              placeholder="Enter a website name"
              className="placeholder:text-gray-500 form-control border border-gray-700 rounded-sm grow mr-2 no-drag"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="btn p-1 px-2 border border-gray-700 rounded-sm hover:cursor-pointer no-drag"
              type="submit"
            >
              Go
            </button>
          </form>
        </nav>}
        </>

  )
}

export default AddressBar