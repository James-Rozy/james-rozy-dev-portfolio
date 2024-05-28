import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

const ErrorPage = () => {
	return (
		<div id='page-container'>
			<Header />
			<div id='main-content'>
				<h1>Error!</h1>
				<p>Oopsies, something went wrong...</p>
			</div>
			<Footer />
		</div>
	);
};

export default ErrorPage;
