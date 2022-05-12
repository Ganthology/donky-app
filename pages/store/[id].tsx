import { MenuHeader } from '../../components/MenuHeader'
import { Container, Avatar, Image, Card, Text } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { default as NextImage } from 'next/image'
import DonkyLogo from '../../public/donkyLogo.png'
import BulgogiImage from '../../public/beef-bulgogi-featured-pic.webp'
import Jajangmyeon from '../../public/jajangmyeon.jpg'
import Gimbap from '../../public/Vegetable_gimbap.jpg'
import Bibimbap from '../../public/bibimbap.jpg'

import { CardItem, SectionCard } from '../../components/SectionCard'

const Store = () => {
  const firstSectionItem: CardItem[] = [
    {
      title: 'Bulgogi',
      description:
        'Thinly sliced beef marinated in a sauce that is a mix of soy sauce, sugar or honey, sesame oil, garlic, onion, and pureed Asian pear.',
      price: 29.99,
      imageSrc: BulgogiImage,
    },
    {
      title: 'Jajangmyeon',
      description:
        'thinly sliced beef marinated in a sauce that is a mix of soy sauce, sugar or honey, sesame oil, garlic, onion, and pureed Asian pear.',
      price: 29.99,
      imageSrc: Jajangmyeon,
    },
    {
      title: 'Bibimbap',
      description:
        'thinly sliced beef marinated in a sauce that is a mix of soy sauce, sugar or honey, sesame oil, garlic, onion, and pureed Asian pear.',
      price: 19.99,
      imageSrc: Bibimbap,
    },
    {
      title: 'Gimbap',
      description:
        'thinly sliced beef marinated in a sauce that is a mix of soy sauce, sugar or honey, sesame oil, garlic, onion, and pureed Asian pear.',
      price: 9.99,
      imageSrc: Gimbap,
    },
  ]

  return (
    <div className='bg-stone-100'>
      <MenuHeader
        links={[
          { link: 'test', label: 'search' },
          { link: 'another', label: 'cart' },
        ]}
      />
      <Container className='bg-stone-100' size='sm' px='xs'>
        <div className='mx-auto w-full'>
          <Image
            radius='md'
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/71047d71792663.5bd138a0f089b.jpg'
            alt='Random unsplash image'
            fit='cover'
            height={250}
          />
        </div>
        <Avatar
          className='mx-auto border-4 border-stone-100 h-32 w-32 -mt-24 rounded-full'
          src='https://media.timeout.com/images/102523828/image.jpg'
        />

        <h1 className='text-3xl font-bold text-center pt-4 pb-8'>
          Han-sik-tang
        </h1>

        <div className='space-y-4 font-normal text-sm'>
          <div
            className='bg-zinc-50 px-4 py-4 rounded-md drop-shadow-sm space-y-4'
            dangerouslySetInnerHTML={{
              __html: `<p><em><strong>#1 Premium Korean Food at Affordable price served from the Heartlands</strong></em></p>
              <ul><li><em>Last preorder at <strong>10:00PM</strong>, for delivery on the next day.</em></li><li><em>Self Pick Up: Order at least <strong>3 hours</strong> in advance</em></li></ul><p>Wide variety of food selection: K.Ricebowls, K. Ramyon, K.wings, Japchae, Jjajangmyeon, Tteobkokii, K.Army Stew, K. Street BBQ and more!</p>
              <p>Welcome to Gogiyo's <strong>WhatsApp</strong> ordering platform, where your order will be concise into a WhatsApp text message. It is recommended for you to use this on your phone or have your WhatsApp web ready. See you on WhatsApp soon! ;)</p>`,
            }}
          />
          <div className='bg-zinc-50 px-4 py-4 rounded-md drop-shadow-sm space-y-4'>
            <h1 className='font-semibold'>Delivery Info</h1>
            <div className='flex justify-between items-center'>
              <p>Minimum Order</p>
              <p className='font-semibold text-base'>RM10.00</p>
            </div>
            <div className='flex justify-between items-center'>
              <p>Delivery Fee</p>
              <p className='font-semibold text-base'>RM10.00</p>
            </div>
          </div>
          <h1 className='text-2xl font-semibold pt-4'>Special Deals</h1>
          <div className='flex flex-no-wrap overflow-x-scroll scrolling-touch items-start space-x-4'>
            {[1, 2, 3, 4, 5].map((item) => (
              <Card
                component='a'
                href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                target='_blank'
                className='flex-none w-1/3 drop-shadow-sm px-4 py-4'
                key={item}
              >
                <Card.Section>
                  <Image
                    src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Tangsuyuk_%28Korean_Chinese_sweet_and_sour_pork%29.jpg'
                    height={160}
                    alt='No way!'
                    fit='cover'
                  />
                </Card.Section>

                <Text className='text-xl font-medium pt-2'>Tangsuyuk</Text>

                <Text size='sm' className='pt-2 pb-2'>
                  RM10.00
                </Text>
              </Card>
            ))}
          </div>
          <SectionCard title='Main Dish' items={firstSectionItem} />
          <footer className='text-center'>
            <NextImage
              src={DonkyLogo}
              alt='DonkyLogo'
              height={100}
              width={100}
              objectFit='contain'
            />
          </footer>
        </div>
      </Container>
    </div>
  )
}

export default Store
