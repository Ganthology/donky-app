import React from 'react'
import { Drawer } from '@mantine/core'
import { SetStateAction } from 'react'
import { Burger } from '@mantine/core'

interface MenuDrawerProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>
}

export function MenuDrawer({ opened, setOpened }: MenuDrawerProps) {
  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title='Menu'
        padding='xl'
        size='xl'
      >
        {/* Drawer content */}
      </Drawer>
      <Burger opened={opened} onClick={() => setOpened(true)} />
    </>
  )
}
