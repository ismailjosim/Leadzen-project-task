import { createBrowserRouter } from 'react-router-dom'
import Details from '../components/Details'
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
			{
				path: '/details/:id',
				element: <Details />,
				loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${ params.id }`)
			}
		],
	},
])

export default routes
