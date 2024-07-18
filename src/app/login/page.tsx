'use client';
import Link from 'next/link';
import './index.css'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useMemo, useRef, useState } from 'react';
import { userLogin } from '../api/api';
import { useRouter } from 'next/navigation'

export default function Login() {
  const email:any = useRef();
  const pwd:any = useRef()
  const [type, setType] = useState<string>('login')
  const router = useRouter()
  const buttonText = useMemo(() => {
    return getText(type)
  }, [type])

  const routeButtonText = useMemo(() => {
    if(type == 'login') {
      return getText('register')
    }else {
      return getText('login')
    }
  }, [type])
  
  function handleLogin(e:any) {
    console.log(e)
    e.preventDefault();

    let payload = {
      email: email.current?.value,
      pwd: pwd.current?.value
    }
    console.log(payload)
    // return
    userLogin(payload).then((data: any) => {
      localStorage.setItem('login_data', data)
      router.push('/')
    })
  }
  function changeType(e:any) {
    e.preventDefault();
    if(type == 'login') {
      setType('register')
    }else {
      setType('login')
    }
  }

  function getText(type:string) {
    if(type == 'login') {
      return 'Sign In'
    }else if(type == 'register') {
      return 'Sign Up'
    }
  }

  return (
    <div className='pt-40'>
      <div className='m-auto w-1200 flex justify-between align-middle login-bg  bg-site-f'>
        <div className='text-right w-half'>
          <div className='login-cover'></div>
        </div>
        <div className='w-10'>

        </div>
        <div className='w-half flex flex-col justify-center'>
          <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                required
                ref={email}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required ref={pwd}/>
            </div>
            <div className="flex items-center gap-2">
              {/* <Checkbox id="remember" /> */}
              <Link href="" onClick={changeType}>{routeButtonText}</Link>
              <Label htmlFor="remember"></Label>
            </div>
            <Button className='bg-site-4 hover:bg-site-1' type="submit">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
