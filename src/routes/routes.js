import Review from '../pages/Review';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import DetailProduct from '../pages/DetailProduct';
import Introduction from '../pages/Introduction';
import Contact from '../pages/Contact'; 
import SignIn from '../pages/SignIn';
import Event from '../pages/Event';
import Product from '../pages/Product';
import History from '../pages/History';
import SalePolicy from '../pages/SalesPolicy';
import ReturnPolicy from '../pages/ReturnPolicy';
import WarrantyPolicy from '../pages/WarrantyPolicy';
import InformationPrivacyPolicy from '../pages/InformationPrivacyPolicy';
import OrderSupport from '../pages/OrderSupport';
import Questions from '../pages/Questions';
import Account from '../pages/Account';
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
    {
        path: '/event',
        component: Event,
    },
    {
        path: '/product',
        component: Product,
    },
    {
        path: '/history',
        component: History,
    },
    {
        path: '/sale-policy',
        component: SalePolicy,
    },
    {
        path: '/return-policy',
        component: ReturnPolicy,
    },
    {
        path: '/warranty-policy',
        component: WarrantyPolicy,
    },
    {
        path: '/information-privacy-policy',
        component: InformationPrivacyPolicy,
    },
    {
        path: '/order-support',
        component: OrderSupport,
    },
    {
        path: '/questions',
        component: Questions,
    },
    {
        path: '/account',
        component: Account,
    },
];

const privateRoutes = [
    

    
];

export { privateRoutes, publicRoutes }