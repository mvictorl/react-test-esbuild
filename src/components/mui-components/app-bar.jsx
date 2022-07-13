import { Adb as AdbIcon, Menu as MenuIcon } from '@mui/icons-material'
import {
	AppBar,
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
	useMediaQuery
} from '@mui/material'
import React, { useState } from 'react'

import AuthIcon from '../auth-icon'

export default function MenuAppBar({ auth }) {
	const [anchorEl, setAnchorEl] = useState(null)

	const isMobile = !useMediaQuery('(min-width: 600px)')
	// console.log('isMobile (min-width: 600px):', isMobile) // ToDo: for testing purposes only

	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const pages = ['Products', 'Documentation', 'Contacts', 'FAQ']

	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const handleOpenDrawer = event => {
		setIsDrawerOpen(event.currentTarget)
	}

	const handleCloseDrawer = () => {
		setIsDrawerOpen(null)
	}

	const handleDrawerClick = el => {
		console.log(el.target.parentElement.outerText.toLowerCase())
	}

	const handleMenuClick = el => {
		console.log(el.target.outerText.toLowerCase())
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenDrawer}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>

						<Drawer
							open={Boolean(isDrawerOpen)}
							onClose={handleCloseDrawer}
							sx={{
								display: { xs: 'block', md: 'none' }
							}}
						>
							<Box
								onClick={handleCloseDrawer}
								onKeyDown={handleCloseDrawer}
								sx={{ minWidth: 150 }}
							>
								<List>
									{pages.map((text, index) => (
										<ListItem key={text} disablePadding>
											<ListItemButton onClick={handleDrawerClick}>
												{/* <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
												<ListItemText primary={text} />
											</ListItemButton>
										</ListItem>
									))}
								</List>
							</Box>
						</Drawer>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => (
							<Button
								key={page}
								onClick={handleMenuClick}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<AuthIcon auth={auth} />
				</Toolbar>
			</AppBar>
		</Box>
	)
}
