import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FcCollapse } from "react-icons/fc";
import MyCollaps from '../components/MyCollaps';
import { useDispatch, useSelector } from 'react-redux'
import { fetchNavItems } from '../features/navreducer/navreducer';
import { useEffect } from 'react';


export default function RefundReturnPolicy() {
    const arrr = [1, 2, 3, 4, 5];
    const dispetch = useDispatch()
    useEffect(() => {
        dispetch(fetchNavItems())
    }, [])

    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] h-auto'>
                <div className='md:m-4 w-[100%] md:p-8 mx-auto p-3 bg-[rgba(247,245,247,1)]'>
                    <div className='text-center pt-8 md:text-2xl'>
                        <div className='font-bold'>Refund Policy</div>
                    </div>
                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto line-height: 1.6;'>
                        <p className='pt-8 md:text-2xl font-bold'>Returns</p>
                        <p className='md:text-lg'>Our return policy lasts 7 days. If 7 days have gone by since your order delivery, unfortunately, we can’t offer you a refund or exchange.</p>
                        <p className='md:text-lg'>A handling charge of Rs. 100/- will be applicable for all return orders. Please place an exchange order to avoid the same.</p>
                        <p className='md:text-lg'>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. </p>
                        <p className='md:text-lg'>Wrong product handover in return: Action will be taken on the basis of package opening footage & will be returning the same product we have received. In such cases, the seller will not be liable for any loss & no action will be made if the customer fails to raise the query within 7 days of pickup.</p>
                        <p className='md:text-lg'>Several types of goods are exempt from being returned. Perishable goods such as boxers shorts, sunglasses, leather jackets, and socks cannot be returned.</p>
                        <p className='md:text-lg'>
                            <p className='font-bold'>Additional non-returnable items:</p>
                            <ul>
                                <li> - Gift cards</li>
                                <li> - Downloadable software products</li>
                                <li> - For additional products that are not returnable, it is mentioned in the product description.</li>
                            </ul>
                        </p>
                        <p className='md:text-lg'>
                            <p className='font-bold'>There are certain situations where only partial refunds are granted (if applicable)</p>
                            <ul>
                                <li>- Any item not in its original condition, is damaged or missing parts for reasons not due to our error</li>
                                <li> - Any item that is returned more than 10 days after delivery</li>

                            </ul>
                        </p>
                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Refunds (if applicable)</p>

                        <p className='md:text-lg'>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                            If it is approved, then your refund will be processed and credited to your Umlaut Wallet/ Source of payment / bank account (for COD only) within 7-10 working days.
                        </p>
                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Late or missing refunds (if applicable)</p>

                        <p className='md:text-lg'>
                            If you haven’t received a refund yet, first login in your account again and check.
                        </p>
                        <p className='md:text-lg'>If you’ve done all of this and you still have not received your refund yet, please contact us at <strong>support@a2rcreative.in</strong></p>

                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Sale items (if applicable)</p>

                        <p className='md:text-lg'>
                            Only regular priced items may be refunded, unfortunately on few item on a conveyed sale day cannot be refunded or returned.
                        </p>
                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Exchanges (if applicable) </p>

                        <p className='md:text-lg'>
                            We only replace items if they are defective or damaged or size doesn't fit well. If you need to exchange it for the same item, please login in your account and place an exchange request directly. There is no additional charge for any exchange orders. For new orders of lower price, the balance amount will be refunded as a gift voucher.
                        </p>
                        <p className='md:text-lg'>Exchange of product is subjected to availability of size.</p>
                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Shipping</p>

                        <p className='md:text-lg'>
                            To return your product, you can directly do it through our return center.
                        </p>
                        <p className='md:text-lg'>Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
                        <p className='md:text-lg'>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
                    </div>

                    <div className='mx-auto text-left md:w-[80%] h-auto mx-auto'>
                        <p className='pt-8 md:text-2xl font-bold'>Self-Ship</p>

                        <p className='md:text-lg'>
                            If your Pincode is not in the serviceable area i.e. if our delivery agents are not able to come for pick-up, the customer has to self-ship the product. The shipping charge will be refunded only if the customer provides the Docket Slip.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
