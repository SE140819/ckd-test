import Review from '../pages/Review';
import Home from '../pages/Home';
import Shopping from '../pages/Shopping';
import DetailProduct from '../pages/DetailProduct';
import Introduction from '../pages/Introduction';
import Contact from '../pages/Contact'; 
import SignIn from '../pages/SignIn';
import Event from '../pages/Event';
import News from '../pages/News';
import Product from '../pages/Product';
import Promotion from '../pages/Promotion';
import History from '../pages/History';
import SalePolicy from '../pages/SalesPolicy';
import ReturnPolicy from '../pages/ReturnPolicy';
import WarrantyPolicy from '../pages/WarrantyPolicy';
import InformationPrivacyPolicy from '../pages/InformationPrivacyPolicy';
import OrderSupport from '../pages/OrderSupport';
import Questions from '../pages/Questions';
import Account from '../pages/Account';
import ComingSoon from '../pages/ComingSoon';
import Brand from '../pages/Brand';
import DetailNews from '../pages/DetailNews';
import DetailEvent from '../pages/DetailEvent';
import SignUp from '../pages/SignUp';
import Promise from '../pages/Promise';
import IntroBrand from '../pages/IntroBrand';
import Story from '../pages/Story';
import ForgotPassword from '../pages/ForgotPW';
import InternalNews from '../pages/Internal';
// import FIVEREZOFIVE from '../pages/500';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/review', component: Review },
    { path: '/video', component: Review, layout: null },
    { path: '/shopping', component: Shopping },
    {
        path: '/san-pham/:id',
        component: DetailProduct,
    },
    {
        path: '/intro',
        component: Introduction,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/sign-up',
        component: SignUp,
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
        path: '/news',
        component: News,
    },
    {
        path: '/san-pham',
        component: Product,
    },
    {
        path: '/promotion',
        component: Promotion,
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
    {
        path: '/brand',
        component: Brand,
    },
    {
        path: '/comingsoon',
        component: ComingSoon,
    },
    {
        path: 'news/:id',
        component: DetailNews,
    },
    {
        path: 'event/:id',
        component: DetailEvent,
    },
    {
        path: '/promise',
        component: Promise,
    },
    {
        path: '/introduction-brand',
        component: IntroBrand,
    },
    {
        path: '/story',
        component: Story,
    },
    {
        path: '/internal-news',
        component: InternalNews,
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
    },
    // {
    //     path: '/500',
    //     component: FIVEREZOFIVE,
    // },
];

const privateRoutes = [
    

    
];

export { privateRoutes, publicRoutes }