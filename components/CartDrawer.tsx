import React from 'react'
import { Drawer, Button, Group, ActionIcon } from '@mantine/core'
import { SetStateAction } from 'react'
import { ShoppingCart } from 'tabler-icons-react'

interface CartDrawerProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>
}

export function CartDrawer({ opened, setOpened }: CartDrawerProps) {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Checkout'
        padding='xl'
        size='xl'
        position='right'
      >
        {/* Drawer content */}
      </Drawer>

      <Group position='center'>
        <ActionIcon onClick={() => setOpened(true)}>
          <ShoppingCart />
        </ActionIcon>
      </Group>
    </>
  )
}
