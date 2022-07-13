import React, { useState } from 'react'
import {
	Divider,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemText
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

export default function DrawerComponent() {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/">Home</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/about">About</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/contact">Contact</Link>
						</ListItemText>
					</ListItem>
					<Divider />
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/about">Faq</Link>
						</ListItemText>
					</ListItem>
					<Divider />
				</List>
			</Drawer>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
				onClick={() => setOpenDrawer(!openDrawer)}
			>
				<MenuIcon />
			</IconButton>
		</>
	)
}
