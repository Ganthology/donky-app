import React from 'react'
import Link from 'next/link'
import { HeaderResponsive } from '../components/header'
import {
  Container,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  NativeSelect,
} from '@mantine/core'
import { At, Key } from 'tabler-icons-react'

const Signup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div>
      <HeaderResponsive
        links={[
          { link: '/login', label: 'Login' },
          { link: '/signup', label: 'Sign Up' },
        ]}
      />
      <Container className='bg-white' size='sm' px='xs'>
        <div className='space-y-4 px-4'>
          <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
          <TextInput
            placeholder='Enter your email'
            label='Email'
            value={email}
            icon={<At size={14} />}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <TextInput
            placeholder='WhatsApp number'
            label='Business Phone'
            value={email}
            icon={<At size={14} />}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <p className='text-stone-400 text-sm'>
            Customers send messages to this number
          </p>
          <TextInput
            placeholder='Business Name'
            label='Business Info'
            value={email}
            icon={<At size={14} />}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <TextInput
            placeholder='Business Link'
            value={email}
            icon={<At size={14} />}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <p className='text-stone-400 text-sm'>
            It&apos;s your website link. Enter unique ID like your shop name.
          </p>
          <NativeSelect
            data={['FnB', 'Fashion', 'Healthcare', 'Other']}
            placeholder='Pick one'
            label='Category'
            description='How do you position your business'
            required
          />
          <PasswordInput
            placeholder='Enter your password'
            label='Password'
            value={password}
            icon={<Key size={14} />}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Checkbox
            label='I agree to with the terms and conditions of Donky Limited'
            color='violet'
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
            <Link href='/login'>
              <a className='inline text-xs font-medium text-indigo-400'>
                Log In
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Signup
