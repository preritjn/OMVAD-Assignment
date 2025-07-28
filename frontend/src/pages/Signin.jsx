import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className='flex justify-center bg-gray-200'>
      <div className='flex flex-col justify-center h-screen'>
        <div className='rounded-lg bg-white w-80 text-center p-2 px-4 shadow'>
          <Heading title={'Signin'}/>
          <SubHeading title={'Enter your credentials to access your account'}/>
          <InputBox label={'Email'} placeholder={"Enter Your Email"} onChange={e => setEmail(e.target.value)}/>
          <InputBox label={'Password'} placeholder={"Enter Your Password"} onChange={e => setPassword(e.target.value)}/>
          <div className='pt-4'>
            <Button text={'Submit'} onClick={async () => {
              try {
                const response = await axios.post('https://omvad-assignment-backend.onrender.com/auth/signin',{
                  email,
                  password
                },{
                  withCredentials: true,
                })
                localStorage.setItem('token', response.data['cookie'])                
                if(response.status >= 200) {
                  navigate('/dashboard')
                }
              }
              catch(err) {
                alert(err.request.response)
              }              
            }}/>
          </div>
          <BottomWarning label={`Don't have an account?`} link={'/signup'} buttonText={'signup'}/>
        </div>      
      </div>
    </div>
  )
}