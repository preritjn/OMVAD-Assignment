import { Link } from "react-router-dom"

export function BottomWarning({ label, buttonText, link }) {
  return (
    <div className="flex justify-center items-center py-2 text-sm">
      <div>
        {label}
      </div>
      <Link className="text-blue-500 underline cursor-pointer pl-1 text-sm" to={link}>
        {buttonText}
      </Link>
    </div>    
  )
}