export function InputBox({ label,placeholder,onChange }) {
  return (
    <>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} type="text" placeholder={placeholder} className="w-full py-2 px-2 border rounded" />
    </>
  )
}