import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
import AppDetails from '../components/AppDetails';
import { useViewport } from '../hooks/useViewport';
import { useEffect } from 'react';
import { useRef } from 'react';
import { log } from '../utils/helper';
// import { RiLogoutBoxLine } from 'react-icons/ri';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('demo@dpga.com');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();
	const { width } = useViewport();
	const breakpoint = 620;

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	const loginForm = useRef();

	useEffect(() => {
		log('login page');
		setTimeout(() => {
			loginForm.current.reset();
		}, 400);
	}, []);

	return (
		<StyledLogin
			className={`login-page page ${width < breakpoint ? 'mobile' : ''}`}
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='form-page-container'>
				<form
					onSubmit={handleSubmit}
					className={`login ${width < breakpoint ? 'mobile' : ''}`}
					id={`${theme === 'dark' ? 'dark' : 'light'}`}
					ref={loginForm}
				>
					<h3>Log in</h3>
					<div className='login-input-wrapper'>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							autoComplete='current-email'
						/>
					</div>
					<div className='login-input-wrapper'>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							autoComplete='current-password'
							id='input-password'
						/>
					</div>
					<div className='login-btn-container'>
						{error ? (
							<div className='error'>
								<p>{error}</p>
							</div>
						) : (
							<div className='error'>
								<p>&nbsp;</p>
							</div>
						)}
						<button className='btn-6 custom-btn' disabled={isLoading}>
							{/* <RiLogoutBoxLine className='login-icon' /> */}
							<p>Log in</p>
						</button>
					</div>
					{/* <div className='login-btn-container'>
						{error && (
							<div className='error'>
								<p>{error}</p>
							</div>
						)}
						<button className='btn-6 custom-btn' disabled={isLoading}>
							<p>Log in</p>
						</button>
					</div> */}
				</form>
				<div className='app-details-container'>
					<AppDetails theme={theme} />
				</div>
			</div>
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 2rem;
	flex: 1;
	max-width: 100rem;
	padding: 1rem 2rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	border-radius: 4px;
	&.mobile {
		padding: 0;
	}
	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: flex-start;
		.login {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			padding: 2rem;
			border-radius: 1rem;
			z-index: 601;
			box-shadow: 3px 3px 4px rgb(0 0 0);
			&#dark {
				background-image: url('/images/black wood.webp');
			}
			&#light {
				background-image: url('/images/white wood.webp');
			}
			&.mobile {
				box-shadow: none;

				&#dark {
					background-image: none;
				}
				&#light {
					background-image: none;
				}

				input {
					padding: 0.8rem 1rem;
					font-size: 1.8rem;

					width: 100%;
					background-color: transparent !important;
				}
				/* input[type='email'],
				input[type='password'] {
					padding: 0.8rem 1rem;
					font-size: 1.8rem;

					width: 100%;
					background-color: transparent !important;
				} */
			}
			.login-btn-container {
				flex: 1;
				display: flex;
				column-gap: 2rem;
				justify-content: flex-end;
				/* margin-top: 2rem; */
				.custom-btn {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					column-gap: 0.5rem;
					flex: 1 1 48%;
					max-width: 48%;
				}
				div.error {
					/* padding: 1rem;
    background: ${({ theme }) => theme.bgError};
    border: 1px solid ${({ theme }) => theme.error};
    color: ${({ theme }) => theme.error};
    border-radius: 4px; */
					border: none;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 2rem;
					flex: 1 1 48%;
					padding: 7px 0px;
					font-size: 1.8rem;
					font-weight: 900;
					text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
					p {
						text-transform: uppercase;
						text-align: center;
					}
				}
				.login-icon {
					color: ${({ theme }) => theme.btnIcon};
					font-size: 2rem;
					margin-right: 1rem;
				}
			}
			h3 {
				text-align: center;
				margin: 0;
				font-weight: bolder;
				color: ${({ theme }) => theme.primaryColor};
				text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
					0px -1px 0px rgba(0, 0, 0, 0.7);
				font-size: 2.5rem;
				line-height: 2.5rem;
			}
			.login-input-wrapper {
				label {
					font-size: 1.6rem;
					text-transform: uppercase;
					margin: 10px 0 2px;
					color: ${({ theme }) => theme.primaryColor};
					text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
						0px -1px 0px rgba(0, 0, 0, 0.7);
				}
				input {
					padding: 0.8rem 1rem;
					margin: 0;
					font-size: 1.8rem;
					flex: 1;
					width: 100%;
					/* background-color: transparent; */
				}
				input[type='email'],
				input[type='password'] {
					/* padding: 0.8rem 1rem;
						font-size: 1.8rem;

						width: 100%; */
					background-color: transparent !important;
				}
				/* input[type='email'],
				input[type='password'] {
					padding: 0.8rem 1rem;
					margin: 0;
					font-size: 1.8rem;
					flex: 1;
					width: 100%;
					background-color: transparent;
				} */
			}
			.custom-btn {
				margin-top: 2rem;
			}
			.login-icon {
				color: ${({ theme }) => theme.btnIcon};
				font-size: 2rem;
			}
		}
		.app-details-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			flex: 1;
		}
	}
	&.mobile {
		.form-page-container {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			flex: 1;
			justify-content: flex-start;

			.login {
				row-gap: 1rem;
				padding: 1rem;
				border-radius: 0.4rem;
				.login-btn-container {
					flex: 1;
					display: flex;
					flex-direction: column;
					/* row-gap: 2rem; */
					/* justify-content: flex-end; */
					/* margin-top: 2rem; */
					.custom-btn {
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						column-gap: 0.5rem;
						flex: 1;

						max-width: unset;
						margin-top: 1rem;
					}
					div.error {
						border: none;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 0rem;
						flex: 1;
						padding: 7px 0px;
						font-size: 1.8rem;
						font-weight: 900;
						text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
						p {
							text-transform: uppercase;
							text-align: center;
							/* background-color: ${({ theme }) => theme.primaryColor}; */
							/* padding: 0 0.5rem; */
						}
					}
					.login-icon {
						color: ${({ theme }) => theme.btnIcon};
						font-size: 2rem;
						margin-right: 1rem;
					}
				}
				h3 {
					font-size: 2.5rem;
					line-height: 2.5rem;
				}

				.login-input-wrapper {
					label {
						font-size: 1.6rem;
						margin: 10px 0 2px;
					}

					input[type='email'],
					input[type='password'] {
						padding: 0.8rem 1rem;
						font-size: 1.8rem;

						width: 100%;
						background-color: transparent !important;
					}
				}
				.app-details-container {
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					flex: 1;
				}
			}
		}
	}
`;

export default Login;
