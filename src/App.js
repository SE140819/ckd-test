 



import {Fragment} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {publicRoutes} from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import ScrollOnTop from './layouts/DefaultLayout/ScrollOnTop';
import Media from './layouts/DefaultLayout/Media';

function App() {
	return (
		<Router>
			
			<Routes>
				{
					publicRoutes.map((route, index) => {
						const Page = route.component;
						//const Layout = route.layout  === null ? Fragment : DefaultLayout;
						let Layout = DefaultLayout;
						if (route.layout) {
							Layout = route.layout;
						} else if (route.layout === null) {
							Layout = Fragment;
						}
						return <Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page/>
								</Layout>
							}/>
					})
				}
			</Routes>
            <ScrollOnTop />
            <Media />
		</Router>
	);
}


export default App;
