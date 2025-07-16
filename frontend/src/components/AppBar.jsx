import { Heading } from './Heading'
import { Button } from './Button'

export const AppBar = () => {
  return (
    <div className='flex justify-between items-center px-10 shadow mb-5'>
      <Heading title={'Bookmark App'}/>
      <div className='flex items-center'>
        <Button text={'Signout'} onClick={() => {
          localStorage.removeItem('token')
          window.location.href = '/signin'
        }}/>
      </div>
    </div>
  )
}