import axios from "axios"

export const BookmarkCard = ({ id,title,favicon,summary }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 h-auto">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <img src={favicon} alt="favicon" />
      </div>
      <p className="text-gray-700 mb-4">{summary}</p>
      <div className="mt-4">
        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
        onClick={async () => {
            try {
              await axios.post(`https://omvad-assignment-backend.onrender.com/functions/delete-bookmark/${id}`,{
                withCredentials: true
              })  
              alert("Bookmark deleted successfully")
              window.location.reload()              
            }
            catch(err) {
              alert(err.request.response)
            }
        }}
        >Delete</button>
      </div>
    </div>
  )
}