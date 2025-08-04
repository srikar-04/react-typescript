

function Button({content}: {content: string}) {
  return (
    <button className="mt-4 bg-red-300 text-black p-3 rounded-md cursor-pointer">
        {content}
    </button>
  )
}

export default Button