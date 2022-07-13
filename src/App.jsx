import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	CssBaseline,
	Button,
	FormGroup,
	FormControlLabel,
	Switch,
	Container
} from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'

import MenuAppBar from './components/mui-components/app-bar'

function App() {
	const [auth, setAuth] = useState(false)

	const handleChange = event => {
		setAuth(event.target.checked)
	}

	return (
		<div className="App">
			<CssBaseline />
			<MenuAppBar auth={auth} />
			<Container>
				<Button
					variant="contained"
					sx={{ margin: '1rem' }}
					endIcon={<DeleteIcon />}
				>
					Delete
				</Button>
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={auth}
								onChange={handleChange}
								aria-label="login switch"
							/>
						}
						label={auth ? 'Logout' : 'Login'}
					/>
				</FormGroup>
			</Container>
		</div>
	)
}

export default App
