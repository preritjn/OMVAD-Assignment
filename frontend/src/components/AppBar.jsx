import { Heading } from './Heading'
import { Button } from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AppBar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center px-10 shadow mb-5'>
      <Heading title={'Bookmark App'}/>
      <div className='flex items-center'>
        <Button text={'Signout'} onClick={() => {
          axios.post('https://omvad-assignment-backend.onrender.com/auth/signout', {
            withCredentials: true
          })
          navigate('/signin')
        }}/>
      </div>
    </div>
  )
}