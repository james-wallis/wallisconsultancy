

export default function MessageForm() {
  return (
    <div>
      <h3 className="text-lato text-2xl font-light text-white">Send me a message</h3>
      <form >
        <div className="flex font-open-sans justify-start flex-col sm:flex-row">
          <div className="sm:mr-4 w-100 sm:w-1/2 md:w-2/5 flex flex-col items-end">
            <label className="block text-gray-500 font-bold my-2 w-full">
              Name:
              <input tabIndex="1" className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green" type="text"  />
            </label>
            <label className="block text-gray-500 font-bold my-2 w-full">
              Email:
              <input tabIndex="2" className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green" type="email"  />
            </label>
          </div>
          <div className="sm:mx-4 w-full sm:w-1/2 md:w-3/5">
            <label className="block text-gray-500 font-bold my-2">
              Message:
              <textarea tabIndex="3" rows="5" className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green" type="email"  />
            </label>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button tabIndex="4" className="bg-theme-green text-white py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/4 lg:w-1/5" type="button">
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
