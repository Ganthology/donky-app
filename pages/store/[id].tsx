import { HeaderResponsive } from '../../components/header'
import { Container } from '@mantine/core'

const Store = () => {
  return (
    <div>
      <HeaderResponsive
        links={[
          { link: 'test', label: 'search' },
          { link: 'another', label: 'cart' },
        ]}
      />
      <Container className='bg-white' size='sm' px='xs'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold text-left'>Store Name</h1>
          <h1></h1>
        </div>
      </Container>
    </div>
  )
}

export default Store
