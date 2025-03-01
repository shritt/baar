import { useState } from 'react'
import { House, Grip, ArrowRight, Squircle } from 'lucide-react'

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
        className="absolute w-1 h-1 bg-black rounded-full border border-gray-700 p-2 no-drag z-10 top-4 left-4 hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault()
          setIsExpanded(!isExpanded)
        }}
      ></div>
      {!isExpanded && (
        <div className='absolute w-1/3 top-10 left-4  border border-gray-700 p-2  border-bottom-dark  rounded-md  bg-black text-white'>
          <div className="flex items-center pb-2 pt-1">
            <div className="drag hover:cursor-grab active:cursor-grabbing mr-2">
              <Grip size={12} />
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setValue('')
                setUrl('')
              }}
            >
              <House size={12} />
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
                className="placeholder:text-gray-500 text-sm form-control border border-gray-700 rounded-sm grow mr-2 no-drag"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="btn p-1 px-2 border border-gray-700 rounded-sm hover:cursor-pointer no-drag"
                type="submit"
              >
                <ArrowRight size={12} />
              </button>
            </form>
          </nav>
          <div>
            <div className="mt-2">
              {console.log(document.querySelector('webview'))}
              <div className="text-xs text-gray-400">Current Page Title:</div>
              <div className="text-sm">{document.title}</div>
              <div className="text-xs text-gray-400 mt-1">Current Page URL:</div>
              <div className="text-sm">{url}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddressBar
