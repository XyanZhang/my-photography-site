'use client';
import './index.css'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Login() {
  return (
    <div className='pt-40'>
      <div className='m-auto w-1200 flex justify-between align-middle login-bg  bg-site-2'>
        <div className='text-right w-half'>
          <div className='login-cover'></div>
        </div>
        <div className='w-10'>

        </div>
        <div className='w-half flex flex-col justify-center'>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button className='bg-site-4 hover:bg-site-1' type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

