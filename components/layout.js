import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<div className="layout-wrapper">
			<div className="layout-inner-wrapper">
				<Header />
			</div>
			<main className="layout-main-wrapper">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
