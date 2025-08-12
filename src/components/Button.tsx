
type ButtonProps = {
  backgroundColor: 'red' | 'blue' | 'green';
  textColor: 'black' | 'white';
  fontSize: 'small' | 'medium' | 'large';
  content: string;
}

function Button({backgroundColor, textColor, fontSize, content}: ButtonProps) {
  return (
    <button className={`mt-4 bg-${backgroundColor}-300 text-${textColor} p-3 rounded-md cursor-pointer text-${fontSize} `}>
      {content}
    </button>
  )
}

export default Button