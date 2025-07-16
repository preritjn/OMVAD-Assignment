import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { AppBar } from "../components/AppBar"
import { BookmarkCard } from "../components/BookmarkCard"
import { AddBookmark } from "../components/AddBookmark"

export const DashBoard = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [bookmarks, setBookmarks] = useState([])

  async function fetch() {
    try {
      const response = await axios.post('http://localhost:3000/auth/verify', {
        token
      })
      return await response.data
    }
    catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {    
    setInterval(() => {
      fetch().then(data => {
        if(!data)
          navigate('/signin')
      })
    },300000)
    const response = axios.get("http://localhost:3000/functions/get-bookmarks", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
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