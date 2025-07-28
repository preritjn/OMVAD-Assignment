import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { AppBar } from "../components/AppBar"
import { BookmarkCard } from "../components/BookmarkCard"
import { AddBookmark } from "../components/AddBookmark"

export const DashBoard = () => {
  const navigate = useNavigate()
  const [bookmarks, setBookmarks] = useState([])

  async function fetch() {
    try {
      const response = await axios.post('https://omvad-assignment-backend.onrender.com/auth/verify',{
        withCredentials: true,
      })
      return await response.data
    }
    catch (error) {
      console.error("Error fetching user data:", error)
      window.location.href = '/'
    }
  }

  useEffect(() => {    
    setInterval(() => {
      fetch().then(data => {
        if(!data)
          navigate('/signin')
      })
    },300000)
    const response = axios.get("https://omvad-assignment-backend.onrender.com/functions/get-bookmarks", {
      withCredentials:true
    })
    response.then(data => {
      setBookmarks(data.data)
    }).catch(err => {
      console.error("Error fetching bookmarks:", err)
      alert("Error fetching bookmarks")
    })
  },[])  

  return (
    <>
      <AppBar />
      <AddBookmark />
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-10">
        {bookmarks.map((bookmark, index) => (
          <BookmarkCard
            key={index}
            id={bookmark._id}
            title={bookmark.title}
            url={bookmark.url}
            favicon={bookmark.favicon}
            summary={bookmark.summary}
          />
        ))}
      </div>
    </>
  )
}