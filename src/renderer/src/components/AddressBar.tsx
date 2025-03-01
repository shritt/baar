import { useState } from 'react'
import { House, Grip, ArrowRight } from 'lucide-react'

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
      <div
        className="p-2 w-1 h-1 rounded-full bg-black absolute no-drag z-10 top-4 left-4 hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          console.log(e)
          setIsExpanded(!isExpanded)
        }}
      ></div>
      {!isExpanded && (
        <div className='absolute w-1/3 top-10 left-4   p-2  border-bottom-dark  rounded-md  bg-black text-white'>
          <div className="flex items-center pb-2 pt-1">
            <div className="drag hover:cursor-grab active:cursor-grabbing mr-2">
              <Grip size={16} />
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setValue('')
                setUrl('')
              }}
            >
              <House size={16} />
            </div>
          </div>
          <nav className="navbar">
            <form
              className={`flex transition-all duration-300`}
              onSubmit={(e) => {
                e.preventDefault()
                setUrl(value)
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
                <ArrowRight size={16} />
              </button>
            </form>
          </nav>
        </div>
      )}
    </>
  )
}

export default AddressBar
