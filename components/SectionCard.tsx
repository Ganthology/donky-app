import { showNotification } from '@mantine/notifications'
import Image, { StaticImageData } from 'next/image'

export type CardItem = {
  title: string
  description?: string
  imageSrc: string | StaticImageData
  price: number
}

interface SectionCardProps {
  title: string
  items: CardItem[]
}

function CardItem({ title, description, imageSrc, price }: CardItem) {
  return (
    <div
      className='flex cursor-pointer'
      onClick={() =>
        showNotification({
          title: 'Item added successfully',
          message: `${title} added to cart`,
          autoClose: 1000,
          color: 'indigo',
        })
      }
    >
      <div className='w-24 h-16 relative'>
        <Image
          src={imageSrc}
          alt='food image'
          className='rounded-lg'
          objectFit='cover'
          layout='fill'
        />
      </div>
      <div className='ml-4'>
        <p className='font-medium'>{title}</p>
        <p className='text-zinc-400 text-sm sm:block hidden'>{description}</p>
      </div>
      <p className='font-semibold text-base ml-auto'>${price.toFixed(2)}</p>
    </div>
  )
}

export function SectionCard({ title, items }: SectionCardProps) {
  return (
    <div className='bg-zinc-50 px-4 py-4 rounded-md drop-shadow-sm space-y-4'>
      <h1 className='font-semibold text-lg'>{title}</h1>
      {items.map(({ title, description, imageSrc, price }) => (
        <CardItem
          title={title}
          description={description}
          imageSrc={imageSrc}
          price={price}
          key={title}
        />
      ))}
    </div>
  )
}
