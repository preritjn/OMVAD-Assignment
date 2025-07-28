import { Heading } from './Heading'
import { Button } from './Button'
import axios from 'axios'

export const AppBar = () => {
  return (
    <div className='flex justify-between items-center px-10 shadow mb-5'>
      <Heading title={'Bookmark App'}/>
      <div className='flex items-center'>
        <Button text={'Signout'} onClick={() => {
          axios.post('https://omvad-assignment-backend.onrender.com/auth/signout', {}, {
            withCredentials: true
          })
          window.location.href = '/'
        }}/>
      </div>
    </div>
  )
}