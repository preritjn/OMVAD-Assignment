import axios from "axios"
import { useEffect, useState } from "react"
import { AppBar } from "../components/AppBar"
import { BookmarkCard } from "../components/BookmarkCard"
import { AddBookmark } from "../components/AddBookmark"

export const DashBoard = () => {
  const [bookmarks, setBookmarks] = useState([])

  const fetchBookmarks = async () => {
    try {
      const response = await axios.get("https://omvad-assignment-backend.onrender.com/functions/get-bookmarks",{}, {
        withCredentials: true
      })
      setBookmarks(response.data)
    }
    catch (error) {
      console.error("Error fetching bookmarks:", error)
      alert("Error fetching bookmarks")
    }
  }

  useEffect(() => {
    fetchBookmarks()
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