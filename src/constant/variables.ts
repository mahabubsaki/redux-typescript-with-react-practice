import { NavbarObj } from "../interface/interface";
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBill, FaUserAlt, FaRegListAlt } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { MdSettings, MdOutlineProductionQuantityLimits, MdAddCircleOutline, MdOutlineManageSearch, MdOutlineManageAccounts, MdOutlinePreview } from 'react-icons/md'
import { GiHelp } from 'react-icons/gi'
import { RiRefund2Line } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
import { CgPlayListCheck } from 'react-icons/cg'



export const navArray: NavbarObj[] = [{
    icon: AiFillHome,
    name: 'Home',
    route: '/home'
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
