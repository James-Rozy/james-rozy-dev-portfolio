import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

const App = () => {
	return (
		<div id='page-container'>
			<Header />
			<div id='main-content'>
				<h1>James Rozsypal</h1>
				<p>Welcome to my site!</p>
			</div>
			<Footer />
		</div>
	);
};

export default App;
