import logo from './assets/react.svg';
import ReactLogo from './assets/react.svg?react';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<p>
					Hello react
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</p>
				<ReactLogo />
			</header>
		</div>
	);
};
