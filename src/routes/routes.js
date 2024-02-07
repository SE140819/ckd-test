import Review from '../pages/Review';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import DetailProduct from '../pages/DetailProduct';
import Introduction from '../pages/Introduction';
import Contact from '../pages/Contact'; 
import SignIn from '../pages/SignIn';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/review', component: Review },
    { path: '/video', component: Review, layout: null },
    { path: '/shopping', component: Shopping },
    { path: '/detail-product', component: DetailProduct },
    {
        path: '/intro',
        component: Introduction,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/sign-in',
        component: SignIn,
    },
];

const privateRoutes = [
    

    
];

export { privateRoutes, publicRoutes }