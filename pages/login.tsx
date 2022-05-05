import React from 'react'
import Link from 'next/link'
import { HeaderResponsive } from '../components/header'
import { Container, TextInput, PasswordInput, Button } from '@mantine/core'
import { At, Key } from 'tabler-icons-react'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className=''>
      <HeaderResponsive
        links={[
          { link: '/login', label: 'Login' },
          { link: '/signup', label: 'Sign Up' },
        ]}
      />
      <Container className='bg-white' size='sm' px='xs'>
        <div className='space-y-4 px-4'>
          <h1 className='text-4xl font-bold text-center'>Login</h1>
          <TextInput
            placeholder='Enter your email'
            label='Email'
            value={email}
            icon={<At size={14} />}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <PasswordInput
            placeholder='Enter your password'
            label='Password'
            value={password}
            icon={<Key size={14} />}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <div className='pt-4'>
            <Button
              variant='filled'
              color={'indigo'}
              className='w-full bg-indigo-500'
            >
              Login
            </Button>
          </div>
          <div className='text-center'>
            <Link href='/forget-password'>
              <a className='inline text-xs font-medium text-indigo-400'>
                Forgot Password?
              </a>
            </Link>
            <p className='inline text-xs'> or </p>
            <Link href='/signup'>
              <a className='inline text-xs font-medium text-indigo-400'>
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
