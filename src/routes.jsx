import App from './App.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import About from './components/pages/About.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';
import Contact from './components/pages/Contact.jsx';

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'portfolio',
		element: <Portfolio />,
	},
	{
		path: 'resume',
		element: <Resume />,
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'contact',
		element: <Contact />,
	},
];

export default routes;
