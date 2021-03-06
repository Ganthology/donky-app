import React, { useState } from 'react'
import Image from 'next/image'
import {
  createStyles,
  Header,
  Container,
  Paper,
  Transition,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { MenuDrawer } from './MenuDrawer'
import { CartDrawer } from './CartDrawer'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors.violet[8], 0.25)
          : theme.colors.violet[0],
      color: theme.colors.violet[theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}))

interface MenuHeaderProps {
  links: { link: string; label: string }[]
}

// Left should be drawer for menu
// Right should be drawer for cart

export function MenuHeader({ links }: MenuHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const [active, setActive] = useState(links[0].link)
  const [menuOpened, toggleMenuOpened] = useState(false)
  const [cartOpened, toggleCartOpened] = useState(false)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        toggleOpened(false)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={HEADER_HEIGHT} mb={25} className={`${classes.root} sticky`}>
      <Container className={classes.header} size='sm' px='xs'>
        <MenuDrawer opened={menuOpened} setOpened={toggleMenuOpened} />
        <Transition transition='pop-top-right' duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
        <CartDrawer opened={cartOpened} setOpened={toggleCartOpened} />
      </Container>
    </Header>
  )
}
