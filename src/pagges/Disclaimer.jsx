import React from 'react'
import { FcCollapse } from "react-icons/fc";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Disclaimer() {

    return (
        <div className='w-[100%]'>
            <Navbar />
            <div className='w-[100%] h-auto'>
                <div className='m-4 w-[80%] p-8 mx-auto bg-[rgba(247,245,247,1)]'>
                    <div className='text-center pt-8 md:text-5xl'>
                        <div className='font-bold'>Disclaimer For ÜMLAUT</div>
                    </div>
                    <div className='text-center md:w-[80%] h-auto mx-auto'>
                        <div className='p-4 mb-5 text-left md:text-[15px] text-gray-500'>
                            <div className='py-3'>
                                If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at umlaut@gmail.com.
                            </div>
                            <div className='py-3'>
                                All the information on this website - umlaut.com - is published in good faith and for general information purpose only. ÜMLAUT does not
                                make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you
                                find on this website (ÜMLAUT), is strictly at your own risk. ÜMLAUT will not be liable for any losses and/or damages in connection with
                                the use of our website.
                            </div>
                            <div className='py-3'>
                            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links 
                            to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a
                             recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the
                              opportunity to remove a link which may have gone 'bad'. Please be also aware that when you leave our website, other sites may have different
                               privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms
                                of Service" before engaging in any business or uploading any information.
                            </div>
                            <div className='py-3'>
                                <div className='font-bold text-1xl text-gray-500'>Consent</div>
                                <div>By using our website, you hereby consent to our disclaimer and agree to its terms.</div>
                            </div>
                            <div className='py-3'>
                                <div className='font-bold text-1xl text-gray-500'>Update</div>
                                <div>
                                Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
