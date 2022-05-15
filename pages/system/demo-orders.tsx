import { HeaderTabs } from '../../components/Navbar'
import {
  Container,
  Textarea,
  TextInput,
  ActionIcon,
  Table,
  Badge,
} from '@mantine/core'
import { SquarePlus, Pencil, Search } from 'tabler-icons-react'
import { SectionCard } from '../../components/SectionCard'
import BulgogiImage from '../../public/beef-bulgogi-featured-pic.webp'
import Jajangmyeon from '../../public/jajangmyeon.jpg'
import Gimbap from '../../public/Vegetable_gimbap.jpg'
import Bibimbap from '../../public/bibimbap.jpg'
import { CardItem } from '../../components/SectionCard'
import { useModals } from '@mantine/modals'

const SystemOrder = () => {
  return (
    <>
      <HeaderTabs
        user={{
          name: 'Han-sik-tang',
          image: 'https://media.timeout.com/images/102523828/image.jpg',
        }}
        tabs={['Menu', 'All Orders', 'Paid Orders', 'Pending Orders', 'Others']}
        routes={[
          '/system/demo',
          '/system/demo-orders',
          '/system/demo-orders',
          '/system/demo-orders',
          '/system/demo',
        ]}
        currentTab={1}
      />
      <Container className='space-y-2'>
        <div className='border-zinc-300 space-y-2 pb-4 border-b'>
          <div className='flex items-center space-x-4'>
            <div className='w-32'>
              <TextInput placeholder='Filter' icon={<Search size={14} />} />
            </div>
            <a className='text-sm px-2 py-2 bg-zinc-200 text-stone-600 border border-stone-900/30 rounded-md drop-shadow-sm'>
              More Filters
            </a>
          </div>
          <p className='text-sm text-stone-600'>
            Filter by name and order number
          </p>
        </div>
        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Calvin</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Ziyi</h1>
            <Badge className='bg-blue-300 text-zinc-800 font-medium'>
              paid
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67785</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 12</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Adam</h1>
            <Badge className='bg-green-300 text-zinc-800 font-medium'>
              fulfilled
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67782</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>October 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Ray</h1>
            <Badge className='bg-blue-300 text-zinc-800 font-medium'>
              paid
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67796</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Rashid</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Calvin</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Calvin</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Calvin</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>

        <div className='space-y-2 py-2 px-2 border-b border-stone-900/30'>
          <div className='flex items-center space-x-1'>
            <h1 className='text-sm font-medium'>Calvin</h1>
            <Badge className='bg-zinc-200 text-zinc-800 font-medium'>
              pending
            </Badge>
          </div>
          <div className='flex text-sm space-x-1'>
            <p>#67781</p>
            <p>•</p>
            <p>other</p>
            <p>•</p>
            <p>RM29.99</p>
            <p>•</p>
            <p>September 01</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SystemOrder
