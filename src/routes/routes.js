import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Main from '../layouts/Main'


const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},

		],
	},
])

export default routes
