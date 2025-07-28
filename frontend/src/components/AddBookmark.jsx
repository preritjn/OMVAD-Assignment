import { useState } from 'react'
import axios from 'axios'

import { Button } from './Button'
import { InputBox } from './InputBox'

export const AddBookmark = () => {
  const [url,setUrl] = useState('')
  return (
    <div className="w-1/2 mx-auto p-5 mb-5 bg-white rounded shadow">
      <h1 className="text-xl font-bold">Add Bookmark</h1>
      <div className='flex'>
        <InputBox  placeholder={"Bookmark URL"} onChange={e => setUrl(e.target.value)}/>
        <div className='flex flex-col justify-center pl-5 w-1/2'>
          <Button text={ 'Add Bookmark' } onClick={async () => {
            try {
                await axios.get(`http://localhost:3000/functions/save-bookmark?url=${url}`,{
                  withCredentials: true
                })
                alert('Bookmark added successfully')
                window.location.reload()
            }
            catch(err) {
                alert(err.request.response)
            }
          }}/>
        </div>
      </div>
    </div>
  )
}