import Navigation from '../navigation'
import Footer from '../footer';

const BlogLayout = ({ children }) => {

	return (
		<div className="layout-wrapper">
			<Navigation />
			<main className="layout-main-wrapper">{children}</main>
			<Footer />
		</div>
	);
};

export default BlogLayout;