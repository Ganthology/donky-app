import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Drawer,
  Button,
  Group,
  ActionIcon,
  Divider,
  Stepper,
  TextInput,
  RadioGroup,
  Radio,
} from '@mantine/core'
import { DatePicker, TimeInput } from '@mantine/dates'
import { SetStateAction } from 'react'
import { ShoppingCart } from 'tabler-icons-react'
import BulgogiImage from '../public/beef-bulgogi-featured-pic.webp'
import Jajangmyeon from '../public/jajangmyeon.jpg'
interface CartDrawerProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>
}

function generateLink() {
  let number = '+60184646079'
  let message =
    'Hi+Han-sik-tang%0D%0A%0D%0ACheck+my+order+at+https%3A%2F%2Fdonky-app.vercel.app%2Forder%2F67781%0D%0A%0D%0AOrder+code%3A+%2367781%0D%0ADate%3A+May+11%2C2022%0D%0ATime%3A+2%3A00+p.m.%0D%0APayment+Status%3A+Paid%0D%0A%0D%0AOrder+confirmation%3A%0D%0A---------------%0D%0A1+x+Jajangmyeon+MYR+29.99%0D%0A%0D%0A1+x+Bulgogi++++++++MYR+29.99%0D%0A%0D%0ADelivery+++++++++++++MYR+10.00%0D%0A--------------%0D%0ATotal%3A+MYR+69.98+%28Qty%3A2%29%0D%0A+%0D%0ACustomer+Details%3A%0D%0AZi+Yi+%2B60123456789%0D%0A%0D%0APickup%3A%0D%0ARestaurant+Han-sik-tang'
  let url = 'https://wa.me/'
  return `${url}${number}?text=${message}`
}

export function CartDrawer({ opened, setOpened }: CartDrawerProps) {
  const [active, setActive] = React.useState(0)
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={<h1 className='text-2xl font-bold'>Checkout</h1>}
        padding='xl'
        size='xl'
        position='right'
      >
        <Stepper active={active} onStepClick={setActive} color='indigo'>
          <Stepper.Step label='Cart'>
            <h1 className='text-lg font-medium'>Your Items</h1>
            <div className='pb-2'>
              <div className='flex pt-2 justify-between'>
                <div className='flex'>
                  <div className=' w-20 h-20'>
                    <Image
                      src={BulgogiImage}
                      alt='food image'
                      className='rounded-lg'
                    />
                  </div>
                  <div className='px-2'>
                    <h1 className='text-base font-medium'>Bulgogi</h1>
                    <p className='text-xs text-stone-400'>x1</p>
                    <div className='flex space-x-2 py-2'>
                      <a className='text-sm font-light text-indigo-400 hover:underline hover:cursor-pointer'>
                        Edit
                      </a>
                      <a className='text-sm font-light text-stone-400 hover:underline hover:cursor-pointer'>
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <p>RM 29.99</p>
              </div>
              <div className='flex pt-2 justify-between'>
                <div className='flex'>
                  <div className=' w-20 h-20'>
                    <Image
                      src={Jajangmyeon}
                      alt='food image'
                      className='rounded-lg'
                    />
                  </div>
                  <div className='px-2'>
                    <h1 className='text-base font-medium'>Bulgogi</h1>
                    <p className='text-xs text-stone-400'>x1</p>
                    <div className='flex space-x-2 py-2'>
                      <a className='text-sm font-light text-indigo-400 hover:underline hover:cursor-pointer'>
                        Edit
                      </a>
                      <a className='text-sm font-light text-stone-400 hover:underline hover:cursor-pointer'>
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
                <p>RM 29.99</p>
              </div>
            </div>
            <Divider my={10} variant='dotted' />
            <div className='flex justify-between'>
              <h1>Total</h1>
              <p>RM 59.98</p>
            </div>
            <Divider my={10} variant='dotted' />
            <div className='text-center' onClick={nextStep}>
              <a className='bg-indigo-500 px-28 py-2 rounded-md text-zinc-50 font-semibold drop-shadow-sm cursor-pointer'>
                Next
              </a>
            </div>
          </Stepper.Step>
          <Stepper.Step label='Contact'>
            <div className='space-y-2'>
              <h1 className='text-lg font-medium'>Contact</h1>
              <TextInput label='Name' />
              <TextInput label='Whatsapp Number' />
              <TextInput label='Email' />
              <Divider my={8} variant='dotted' />
              <h1 className='text-lg font-medium'>Delivery</h1>
              <RadioGroup label='Select the delivery option' size='sm' required>
                <Radio value='react' label='Delivery' />
                <Radio value='svelte' label='Pick Up' />
                <Radio value='ng' label='Reservation/Dine In' />
              </RadioGroup>
              <TextInput label='Address' />
              <div className='grid grid-cols-2 gap-2 pb-4'>
                <DatePicker label='Pickup Date' />
                <TimeInput label='Pickup Time' />
              </div>
              <div className='text-center' onClick={nextStep}>
                <a className='bg-indigo-500 px-28 py-2 rounded-md text-zinc-50 font-semibold drop-shadow-sm cursor-pointer'>
                  Next
                </a>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step label='Make Order'>
            <div className='bg-stone-100 pt-6 pb-4 px-4 rounded-md shadow-sm mb-8 space-y-4'>
              <h1 className='text-lg font-medium'>Order Summary</h1>
              <div className='flex justify-between text-sm font-light'>
                <h2>Items Total</h2>
                <p>RM 59.98</p>
              </div>
              <div className='flex justify-between text-sm font-light'>
                <h2>Misc.</h2>
                <p>RM 0.00</p>
              </div>{' '}
              <div className='flex justify-between text-sm font-light pb-4'>
                <h2>Delivery</h2>
                <p>RM 10.00</p>
              </div>
              <a className='text-xs bg-indigo-200 text-indigo-600 px-2 py-1 rounded-full hover:underline hover:cursor-pointer'>
                Enter Discount Code
              </a>
              <Divider my='sm' variant='dotted' />
              <div className='flex justify-between text-sm font-light'>
                <h2>Subtotal</h2>
                <p>RM 69.98</p>
              </div>
              <Divider my='sm' variant='dotted' />
              <div className='flex justify-between text-base'>
                <h2>Total</h2>
                <p>RM 69.98</p>
              </div>
            </div>
            <div className='text-center'>
              <Link href={generateLink()}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full bg-green-600 px-28 py-2 rounded-md text-zinc-50 font-semibold drop-shadow-sm cursor-pointer'
                >
                  Make Order
                </a>
              </Link>
            </div>
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        {/* Drawer content */}
        {/* <div>
          <p>Items</p>
          <p>Items Total</p>
          <p>Divider</p>
        </div>
        <div>
          <p>Your Contact</p>
          <p>Name</p>
          <p>Input for Name</p>
          <p>Phone</p>
          <p>Input for Phone</p>
        </div>
        <div>
          <p>Delivery Option</p>
          <p>Radio Button</p>
          <p>Choose Location</p>
          <p>Radio Button</p>
          <p>Pickup date</p>
          <p>Pickup time</p>
        </div> */}
        <Divider my='sm' variant='dotted' />
      </Drawer>

      <Group position='center'>
        <ActionIcon onClick={() => setOpened(true)}>
          <ShoppingCart />
        </ActionIcon>
      </Group>
    </>
  )
}
