import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-700 text-sm px-4 sm:px-6 py-12 font-[Figtree]">
<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 ">
             
                 {/* Account */}
                <div className=''>
                    <h4 className="mb-3 font-bold">Account</h4>
                    <ul className="space-y-1 font-semibold">
                        <li>Log In</li>
                        <li>Sign Up</li>
                        <li>Redeem a Gift Card</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="mb-3 font-bold">Company</h4>
                    <ul className="space-y-1 font-semibold">
                        <li>About</li>
                        <li>Environmental Initiatives</li>
                        <li>Factories</li>
                        <li>DEI</li>
                        <li>Careers</li>
                        <li>International</li>
                        <li>Accessibility</li>
                    </ul>
                </div>

                {/* Get Help */}
                <div>
                    <h4 className="mb-3 font-bold">Get Help</h4>
                    <ul className="space-y-1 font-semibold">
                        <li>Help Center</li>
                        <li>Return Policy</li>
                        <li>Shipping Info</li>
                        <li>Bulk Orders</li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="mb-3 font-bold">Connect</h4>
                    <ul className="space-y-1 font-semibold">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Affiliates</li>
                        <li>Our Stores</li>
                    </ul>
                </div>

                {/* Email Input */}
                <div>
                    <h4 className="mb-3 font-bold">Subscribe</h4>
                    <div className="flex max-w-xs w-full h-[46px]">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 text-sm tracking-widest border border-gray-300 outline-none"
                        />
                        <button className="w-[46px] bg-[#222] text-white flex items-center justify-center">
                            →
                        </button>
                    </div>
                </div>
               
            </div>

            {/* Bottom Links */}
            <div className="mt-12 border-t pt-6 text-xs text-center space-y-4">
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 px-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Do Not Sell or Share My Personal Information</span>
                    <span>CS Supply Chain Transparency</span>
                    <span>Vendor Code of Conduct</span>
                    <span>Sitemap Pages</span>
                    <span>Sitemap Products</span>
                </div>
                <p className="mt-4">&copy; 2023 All Rights Reserved</p>
            </div>
        </footer>

    );
}

export default Footer;
