// import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import { useIdeasContext } from '../../hooks/useIdeaContext';
// import useSWR from 'swr';
import { useViewport } from '../../hooks/useViewport';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
// import { log } from '../../utils/helper';
import SongCard from './SongCard';
// import SongsPaginationNav from './SongsPaginationNav';

// const fetcher = (url) => fetch(url).then((res) => res.json());

function SongsList({
	ideasFilterValue,
	filteredIdeas,
	setFilteredIdeas,
	ideaStatusHandler,
}) {
	// const [page, setPage] = useState(1);
	// const [pageCount, setPageCount] = useState(0);
	// const [songCount, setSongCount] = useState(0);
	// const { songs } = useIdeasContext();

	const { width } = useViewport();
	const breakpoint = 620;
	const { showOptions, setShowOptions } = useStateContext();

	const handleOptions = (e, songTitle, index) => {
		e.preventDefault();
		log('handle options');
		log(e.target, 'handle options song target');
		log(songTitle, 'handle options song title');
		log(index, 'handle options song i');
		// setShowOptions(!showOptions);
		showOptions === false ? setShowOptions(songTitle) : setShowOptions(false);
		// showOptions === false ? setShowOptions(index) : setShowOptions(false);
	};

	// const { data, error } = useSWR(
	// 	`${process.env.REACT_APP_BACKEND_URL}/api/products/${ideasFilterValue}?page=${page}`,
	// 	fetcher
	// );
	// useEffect(() => {
	// 	if (data) {
	// 		setPageCount(data.pagination.pageCount);
	// 		setSongCount(data.pagination.count);
	// 	}
	// }, [data]);

	// function handleChoosePage(e, number) {
	// 	e.preventDefault();
	// 	log(page, 'page');
	// 	log(pageCount, 'page count');
	// 	log(number, 'number');

	// 	setPage(number);
	// }

	// function handlePrevious(e) {
	// 	e.preventDefault();
	// 	setPage((p) => {
	// 		if (p === 1) return p;
	// 		return p - 1;
	// 	});
	// }

	// function handleNext(e) {
	// 	e.preventDefault();

	// 	setPage((p) => {
	// 		if (p === pageCount) return p;
	// 		return p + 1;
	// 	});
	// }

	// if (error) {
	// 	return <div>{JSON.stringify(error)}</div>;
	// }

	// if (!data) {
	// 	return <p>Loading...</p>;
	// }

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			delay: 2,
			transition: {
				staggerChildren: 0.2,
				// delayChildren: 0.5
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<StyledSongsList className={`${width < breakpoint ? 'mobile' : ''}`}>
			<motion.div
				className={`songs-container ${width < breakpoint ? 'mobile' : ''}`}
				variants={container}
				initial='hidden'
				animate='show'
				// exit='hidden'
			>
				{filteredIdeas &&
					filteredIdeas.map((song, index) => {
						return (
							<SongCard
								key={song._id}
								song={song}
								item={item}
								handleOptions={handleOptions}
								index={index}
							/>
						);
					})}
				{/* {songs &&
					songs.map((song) => {
						return <SongCard key={song._id} song={song} item={item} />;
					})} */}
			</motion.div>
			{/* <div
				className={`pagination-header ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p>
					Page:
					<span>
						{page}/{pageCount}
					</span>
				</p>
				<SongsPaginationNav
					page={page}
					setPage={setPage}
					pageCount={pageCount}
					handlePrevious={handlePrevious}
					handleNext={handleNext}
					handleChoosePage={handleChoosePage}
				/>
				<p>
					Songs:<span>{songCount}</span>
				</p>
			</div> */}
		</StyledSongsList>
	);
}
const StyledSongsList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	overflow-y: hidden;
	z-index: 1;
	flex: 1;
	row-gap: 1rem;
	padding-bottom: 0.5rem;
	&.mobile {
		row-gap: 1rem;
		padding-bottom: 0rem;
	}
	.pagination-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
		/* border-radius: 1rem;
		padding: 1rem 2rem;
		border-radius: 0.4rem 0.4rem 1rem 1rem;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
			inset -2px -2px 2px rgba(0, 0, 0, 08);
		background-color: rgba(0, 0, 0, 0.1); */
		&.mobile {
			border-radius: 0.4rem;
			padding: 0;
		}
		p {
			font-weight: bolder;
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
			span {
				color: ${({ theme }) => theme.secondaryColor};
				/* text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%); */
			}
		}
	}
	.songs-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-y: auto;
		border: 1px solid ${({ theme }) => theme.borderColor};
		border-radius: 0.4rem;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
			inset -2px -2px 2px rgba(0, 0, 0, 08);
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		padding-right: 0;
		scroll-behavior: smooth;
		scroll-behavior: smooth;
		scrollbar-width: normal;
		scrollbar-color: ${({ theme }) => theme.lightBrown};
		flex: 1;
		&.mobile {
			border-radius: 0.4rem;
		}
		::-webkit-scrollbar {
			display: none;
			height: 18px !important;
			width: 18px;
			background: ${({ theme }) => theme.lightBrown};
			user-select: none; /* supported by Chrome and Opera */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
		}
		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.darkBrown};
			-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		}
		::-webkit-scrollbar-corner {
			background: rgb(75, 74, 74);
		}
	}
`;

export default SongsList;

// {/* <StyledSongsList className={`${width < breakpoint ? 'mobile' : ''}`}>
// 			<div className={`songs-container ${width < breakpoint ? 'mobile' : ''}`}>
// 				{data.items.map((product) => {
// 					return <SongCard key={product._id} song={product} />;
// 				})}
// 			</div>
// 			<div
// 				className={`pagination-header ${width < breakpoint ? 'mobile' : ''}`}
// 			>
// 				<p>
// 					Page:
// 					<span>
// 						{page}/{pageCount}
// 					</span>
// 				</p>
// 				<SongsPaginationNav
// 					page={page}
// 					setPage={setPage}
// 					pageCount={pageCount}
// 					handlePrevious={handlePrevious}
// 					handleNext={handleNext}
// 					handleChoosePage={handleChoosePage}
// 				/>
// 				<p>
// 					Songs:<span>{songCount}</span>
// 				</p>
// 			</div>
// 		</StyledSongsList> */}
