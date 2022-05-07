import React from 'react'
import { Drawer, Button, Group, ActionIcon } from '@mantine/core'
import { SetStateAction } from 'react'
import { Menu2 } from 'tabler-icons-react'

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

      <Group position='center'>
        <ActionIcon onClick={() => setOpened(true)}>
          <Menu2 />
        </ActionIcon>
      </Group>
    </>
  )
}
