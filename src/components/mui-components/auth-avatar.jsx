import React from 'react'
import { Skeleton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const AuthAvatar = ({ auth }) => {
	return (
		<>
			{auth ? (
				<AccountCircle fontSize="inherit" />
			) : (
				<Skeleton variant="circular" width={30} height={30} />
			)}
		</>
	)
}

export default AuthAvatar
