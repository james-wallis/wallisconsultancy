export default function Container({ children }) {
  return (
    <div className="w-screen flex justify-center">
      <div className="px-4 md:w-11/12 xl:w-9/12 flex">
        {children}
      </div>
    </div>
  )
}
