
import {
    Home, About, Contact, Sign_up, Userinfo, Login, TermsAndCondition, PrivacyPolicy, Disclaimer, OurBlog, Card,
    Categorypage, Product, Shiping, Conformation, Billing, RefundReturnPolicy, ShippingPolicy
} from './pagges/Index'


export const RRoute = [
    { path: '', elem: Home },
    { path: 'about', elem: About },
    { path: 'contact', elem: Contact },
    { path: 'signUp', elem: Sign_up },
    { path: 'userinfo', elem: Userinfo },
    { path: 'login', elem: Login },
    { path: 'terms', elem: TermsAndCondition },
    { path: 'refundpolicy', elem: RefundReturnPolicy },
    { path: 'shippingpolicy', elem: ShippingPolicy },
    { path: 'policy', elem: PrivacyPolicy },
    { path: 'disclaimer', elem: Disclaimer },
    { path: 'blogs', elem: OurBlog },
    { path: 'cart', elem: Card },
    { path: 'category/:id', elem: Categorypage },
    { path: 'product/:c_id/:p_id', elem: Product },
    { path: 'shiping', elem: Shiping },
    { path: 'conformation', elem: Conformation },
    { path: 'biling', elem: Billing },
]
