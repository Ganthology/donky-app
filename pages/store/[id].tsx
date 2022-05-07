import { MenuHeader } from '../../components/MenuHeader'
import { Container, Avatar, Image, Card, Text } from '@mantine/core'
import { default as NextImage } from 'next/image'
import DonkyLogo from '../../public/donkyLogo.png'

const Store = () => {
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
            src='https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
            alt='Random unsplash image'
            fit='cover'
            height={250}
          />
        </div>
        <Avatar
          className='mx-auto border-4 border-stone-100 h-32 w-32 -mt-24 rounded-full'
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80'
        />

        <h1 className='text-3xl font-bold text-center'>Store Name</h1>

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
            <h1>Delivery Info</h1>
            <p>Minimum Order</p>
            <p>Delivery Fee</p>
          </div>
          <h1 className='text-2xl font-semibold'>Special Deals</h1>
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
                    src='https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
                    height={160}
                    alt='No way!'
                  />
                </Card.Section>

                <Text weight={500} size='lg'>
                  You've won a million dollars in cash!
                </Text>

                <Text size='sm'>
                  Please click anywhere on this card to claim your reward, this
                  is not a fraud, trust us
                </Text>
              </Card>
            ))}
          </div>
          {[1, 2, 3].map((item) => (
            <div
              className='bg-zinc-50 px-4 py-4 rounded-md drop-shadow-sm space-y-4'
              key={item}
            >
              <h1>Section Name</h1>
              <p>Item Card</p>
              <p>Item Card 2</p>
              <p>Item Card 3</p>
            </div>
          ))}
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
