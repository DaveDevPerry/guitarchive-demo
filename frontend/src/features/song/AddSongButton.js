import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';
import { useViewport } from '../../hooks/useViewport';

const AddSongButton = () => {
	const { isFormOpen, setIsFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledAddSongButton
			onClick={() => {
				isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
			}}
		>
			<CgPlayListAdd
				className='add-song-btn'
				// onClick={() => {
				// 	isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
				// }}
			/>
			{width > breakpoint && <p>add song</p>}
		</StyledAddSongButton>
	);
};
const StyledAddSongButton = styled.div`
	/* border: 1px solid #1aac83; */
	/* padding: 0 1em; */
	padding: 0 1rem;
	/* flex: 1; */
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.lightBrown};
	box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
	/* background-color: #9a9a9a; */
	height: 100%;
	/* width: 9em; */
	/* height: 2em; */
	cursor: pointer;
	.add-song-btn {
		font-size: 2.5rem;
		color: white;
	}
	p {
		/* font-family: 'New Tegomin', serif; */
		color: white;
		text-transform: uppercase;
		font-size: 1.6rem;
		/* font-size: 1.2rem; */
	}
`;

export default AddSongButton;
