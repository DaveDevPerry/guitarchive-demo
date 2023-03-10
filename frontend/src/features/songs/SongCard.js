import React from 'react';
import styled from 'styled-components';
import {
	// FaCloudDownloadAlt,
	FaRegStar,
	FaStar,
	FaRegHeart,
	FaHeart,
} from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import { format, parseISO } from 'date-fns';
import { log } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
import Tooltip from '../../components/Tooltip';

const SongCard = ({ song }) => {
	const { setSongToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledSongCard className='song-card-wrapper'>
			{width < breakpoint ? (
				<>
					<div
						className='song-wrapper'
						onClick={(e) => {
							e.preventDefault();
							log(song._id, 'song id on click');
							setSongToView(song._id);
							navigate('/song');
						}}
					>
						<h3 className='primary-text'>{song.title}</h3>
						<h4 className='secondary-text'>{song.artist.name}</h4>
					</div>
					<div className='mobile-deadline-wrapper'>
						{song.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}
					</div>
				</>
			) : (
				<>
					<div className='fav-wrapper'>
						{song.isFavourite === true ? (
							<FaHeart className='card-icon heart-on' />
						) : (
							<FaRegHeart className='card-icon heart-off' />
						)}
					</div>
					<div
						className='song-wrapper'
						onClick={(e) => {
							e.preventDefault();
							log(song._id, 'song id on click');
							setSongToView(song._id);
							navigate('/song');
						}}
					>
						<h3 className='primary-text'>{song.title}</h3>
						<h4 className='secondary-text'>{song.artist.name}</h4>
					</div>
					<div className='artist-wrapper'>
						<h3 className='primary-text'>{song.arranger.name}</h3>
						<div className='rating-wrapper'>
							{[...Array(song.difficulty)].map((elementInArray, index) => (
								<FaStar key={index} className='star-on' />
							))}
							{[...Array(5 - song.difficulty)].map((elementInArray, index) => (
								<FaRegStar key={index} className='star-off' />
							))}
						</div>
					</div>
					<div className='deadline-wrapper'>
						{song.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}
					</div>
					<div className='file-wrapper'>
						{song.isTab ? (
							<Tooltip content='tablature' direction='left'>
								<TbNumbers className='music-type-icon' />
							</Tooltip>
						) : (
							<Tooltip content='music score' direction='left'>
								<IoMusicalNotes className='music-type-icon' />
							</Tooltip>
						)}
						{song.fileType === 'pdf' ? (
							<Tooltip content='pdf file' direction='left'>
								<img
									src='/images/pdf_icon.png'
									alt='pdf'
									className='img-icon'
								/>
							</Tooltip>
						) : (
							<Tooltip content='guitar pro file' direction='left'>
								<img
									src='/images/gp_icon.png'
									alt='guitar pro'
									className='img-icon'
								/>
							</Tooltip>
						)}
					</div>
					<div className='status-wrapper'>
						{song.status.name === 'Recorded' && (
							<Tooltip content='Recorded' direction='left'>
								<ImYoutube2 className='card-icon status-icon yt-icon' />
							</Tooltip>
						)}
						{song.status.name === 'Practicing' && (
							<Tooltip content='Practicing' direction='left'>
								<GiMetronome className='card-icon status-icon' />
							</Tooltip>
						)}
						{song.status.name === 'Ready' && (
							<Tooltip content='Ready' direction='left'>
								<CgCamera className='card-icon status-icon' />
							</Tooltip>
						)}
						{song.status.name === 'Backlog' && (
							<Tooltip content='Backlog' direction='left'>
								<BiArchiveOut className='card-icon status-icon' />
							</Tooltip>
						)}
						{song.status.name === 'Archived' && (
							<Tooltip content='Archived' direction='left'>
								<BiArchive className='card-icon status-icon' />
							</Tooltip>
						)}
					</div>
				</>
			)}
		</StyledSongCard>
	);
};
const StyledSongCard = styled.div`
	cursor: pointer;
	&.song-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.darkBrown};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 0.5rem;
		padding: 0.5rem;
		.primary-text {
			color: ${({ theme }) => theme.darkBrown};
			text-transform: capitalize;
		}
		.secondary-text {
			color: ${({ theme }) => theme.lightBrown};
			text-transform: uppercase;
		}
		.fav-wrapper,
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 50px;
		}
		.file-wrapper {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
			.img-icon {
				height: 30px;
				width: 30px;
			}
		}
		.deadline-wrapper {
			width: 100px;
			display: grid;
			place-content: center;
			.primary-text {
				color: ${({ theme }) => theme.white};
				text-transform: capitalize;
				font-weight: lighter;
				background-color: ${({ theme }) => theme.red};
				padding: 0.5rem 1rem;
				border-radius: 0.6rem;
				line-height: 1.4rem;
			}
		}
		.mobile-deadline-wrapper {
			display: grid;
			place-content: center;
			.primary-text {
				font-size: 1.4rem;
			}
		}
		.song-wrapper {
			flex: 1;
		}
		.artist-wrapper {
			width: 17rem;
		}
		.fav-wrapper {
			width: auto;
			padding: 0.5rem;
		}
		.card-icon {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.lightBrown};
		}
		.status-icon {
			font-size: 3rem;
			color: ${({ theme }) => theme.darkBrown};
		}
		.yt-icon {
			font-size: 4.5rem;
		}
		.star-on {
			color: ${({ theme }) => theme.lightBrown};
		}
		.star-off {
			color: ${({ theme }) => theme.darkBrown};
		}
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 2rem;
		}
		.heart-off {
			color: ${({ theme }) => theme.darkBrown};
			font-size: 2rem;
		}
		.file-download-icon {
			cursor: pointer;
			font-size: 3rem;
		}
		.music-type-icon {
			font-size: 3rem;
		}
	}
`;

export default SongCard;
