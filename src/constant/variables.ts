import { NavbarObj } from "../interface/interface";
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBill, FaUserAlt, FaRegListAlt } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { MdSettings, MdOutlineProductionQuantityLimits, MdAddCircleOutline, MdOutlineManageSearch, MdOutlineManageAccounts, MdOutlinePreview } from 'react-icons/md'
import { GiHelp } from 'react-icons/gi'
import { RiRefund2Line } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { CgPlayListCheck } from 'react-icons/cg'
import { AllProductsRoute, CartRoute, DashboardRoute, HelpAndSupportRoute, HomeRoute, ManageOrdersRoute, ManageProductsRoute, ManageUsersRoute, OrderRoute, ProfileRoute, RefundRoute, ReviewProductsRoute, SettingsRoute, TransactionsRoute } from '../routes/routes';
import Home from '../components/pages/common/Home';
import Dashboard from '../components/pages/admin/Dashboard';
import ManageProducts from '../components/pages/admin/ManageProducts';

import ManageUsers from '../components/pages/admin/ManageUsers';
import ReviewProducts from '../components/pages/admin/ReviewProducts';
import ManageOrders from '../components/pages/admin/ManageOrders';
import AllProducts from '../components/pages/common/AllProducts';
import Profile from '../components/pages/common/Profile';
import Cart from '../components/pages/common/Cart';
import Orders from '../components/pages/common/Orders';
import Refunds from '../components/pages/common/Refunds';
import Transactions from '../components/pages/common/Transactions';
import Settings from '../components/pages/common/Settings';
import HelpSupport from '../components/pages/common/HelpSupport';


export const navArray: NavbarObj[] = [{
    icon: AiFillHome,
    name: 'Home',
    route: '/'
},
{
    icon: RiDashboardFill,
    name: 'Dashboard',
    route: '/dashboard'
},
{
    icon: MdOutlineManageSearch,
    name: 'Manager Products',
    route: '/manage-products'
},
{
    icon: MdOutlineManageAccounts,
    name: 'Manage Users',
    route: '/manage-users'
},
{
    icon: MdOutlinePreview,
    name: 'Review Products',
    route: '/review-products'
},
{
    icon: FaRegListAlt,
    name: 'Manage Orders',
    route: '/manage-orders'
},
{
    icon: MdOutlineProductionQuantityLimits,
    name: 'All Products',
    route: '/all-products'
},
{
    icon: MdAddCircleOutline,
    name: 'Add Product',
    route: '/add-product'
},
{
    icon: FaUserAlt,
    name: 'Profile',
    route: '/profile'
},
{
    icon: FiShoppingCart,
    name: 'Cart',
    route: '/cart'
},
{
    icon: CgPlayListCheck,
    name: 'Orders',
    route: '/Orders'
},
{
    icon: RiRefund2Line,
    name: 'Refunds',
    route: '/refunds'
},
{
    icon: FaMoneyBill,
    name: 'Transactions',
    route: '/transactions'
},
{
    icon: MdSettings,
    name: 'Settings',
    route: '/settings'
},
{
    icon: GiHelp,
    name: 'Help And Support',
    route: '/help'
}]
// export const routeArray: RouteObj[] = [
//     { elements: Home, path: HomeRoute },
//     { elements: Dashboard, path: DashboardRoute },
//     { elements: ManageProducts, path: ManageProductsRoute },
//     { elements: ManageUsers, path: ManageUsersRoute },
//     { elements: ReviewProducts, path: ReviewProductsRoute },
//     { elements: ManageOrders, path: ManageOrdersRoute },
//     { elements: AllProducts, path: AllProductsRoute },
//     { elements: Profile, path: ProfileRoute },
//     { elements: Cart, path: CartRoute },
//     { elements: Orders, path: OrderRoute },
//     { elements: Refunds, path: RefundRoute },
//     { elements: Transactions, path: TransactionsRoute },
//     { elements: Settings, path: SettingsRoute },
//     { elements: HelpSupport, path: HelpAndSupportRoute },
// ]
export const catefories: string[] = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat']
export const colors: string[] = ['#EAD7D7', '#B49FCC', '#6D466B', '#412234', '#C97064', '#BCA371', '#A6B07E', '#68A357', '#32965D', '#BFC0C0', '#EF8354', '#F7AEF8', '#B388EB', '#8093F1', '#72DDF7']