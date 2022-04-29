import { push } from 'connected-react-router'
import React from 'react'
import { useDispatch } from 'react-redux'

export const Header = () => {
const dispatch = useDispatch()

	return (
		<div onClick={()=>{dispatch(push('/'))}}>Header</div>
	)
}
