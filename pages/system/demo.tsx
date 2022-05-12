import { HeaderTabs } from '../../components/Navbar'
import {
  Container,
  Textarea,
  TextInput,
  ActionIcon,
  Table,
} from '@mantine/core'
import { SquarePlus, Pencil } from 'tabler-icons-react'
import { SectionCard } from '../../components/SectionCard'
import BulgogiImage from '../../public/beef-bulgogi-featured-pic.webp'
import Jajangmyeon from '../../public/jajangmyeon.jpg'
import Gimbap from '../../public/Vegetable_gimbap.jpg'
import Bibimbap from '../../public/bibimbap.jpg'
import { CardItem } from '../../components/SectionCard'
import { useModals } from '@mantine/modals'

const System = () => {
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

  let deliveryDetails = [
    { title: 'Minimum Order', fee: 10 },
    { title: 'Delivery Fee', fee: 10 },
  ]

  const rows = deliveryDetails.map((detail, i) => (
    <tr key={i}>
      <td>{detail.title}</td>
      <td>{detail.fee}</td>
    </tr>
  ))

  const modals = useModals()

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Add new section',
      centered: true,
      children: (
        <>
          <TextInput label='Section Name' />
          <p className='text-sm'>
            Are you sure you want to delete your profile? This action is
            destructive and you will have to contact support to restore your
            data.
          </p>
        </>
      ),
      labels: { confirm: 'Add section', cancel: 'Cancel action' },
      confirmProps: { color: 'indigo' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          // closeOnConfirm: false,
          children: (
            <p className='text-sm'>
              When this modal is closed modals state will revert to first modal
            </p>
          ),
          onConfirm: () => modals.closeAll(),
        }),
    })

  return (
    <>
      <HeaderTabs
        user={{
          name: 'Han-sik-tang',
          image: 'https://media.timeout.com/images/102523828/image.jpg',
        }}
        tabs={['Menu', 'All Orders', 'Paid Orders', 'Pending Orders', 'Others']}
      />
      <Container className='space-y-2 pb-16'>
        <div className='bg-stone-100 px-4 py-4 rounded-md text-sm font-light'>
          Edit your store&apos;s information so your customer can access it
        </div>
        <TextInput label='Store Name' placeholder="The store's name" />
        <Textarea
          placeholder="The store's description"
          label='Description'
          required
        />
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-medium pt-2'>Delivery</h1>
          <ActionIcon>
            <Pencil />
          </ActionIcon>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Details</th>
              <th>Pricing</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <div className='flex justify-between items-center pt-4'>
          <h1 className='text-lg font-medium'>Add Sections</h1>
          <ActionIcon onClick={openDeleteModal}>
            <SquarePlus />
          </ActionIcon>
        </div>
        <SectionCard title='Main Dish' items={firstSectionItem} />
        <SectionCard title='Side Dish' items={firstSectionItem} />
      </Container>
    </>
  )
}

export default System
