import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../../components/breadcrumb';


function DefaultLayout({children}) {
	return (
        <>
            <Header />
            {/* <Breadcrumb /> */}
            {/* <main>{children}</main> */}
            <Footer />
        </>
    );
}

export default DefaultLayout;
