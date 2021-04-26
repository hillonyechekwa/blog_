import Header from '../header';
import Navigation from '../navigation'
import Footer from '../footer';

const Layout = ({ children }) => {

	return (
		<div className="layout-wrapper">
				<Navigation />
				<Header />
			<main className="layout-main-wrapper">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
