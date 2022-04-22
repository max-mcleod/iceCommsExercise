import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black py-10'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-2 xl:px-20 md:grid-cols-2 md:grid-rows-2 md:text-left grid-cols-1 text-center text-white'>
                <img className='xl:order-1 md:order-1 md:ml-10 m-auto' src="../assets/svg/logo-white.svg" alt="" />
                <div className='mediaIcons xl:order-4 xl:m-10 md:order-4 md:mx-10 md:m-5 mt-10'>
                    <img src="../assets/mediaIcons/facebook.png" alt="" />
                    <img src="../assets/mediaIcons/linkedin.png" alt="" />
                    <img src="../assets/mediaIcons/twitter.png" alt="" />
                    <img src="../assets/mediaIcons/pinterest.png" alt="" />
                    <img src="../assets/mediaIcons/instagram.png" alt="" />
                </div>
                <div className='footerButtons xl:order-2 xl:row-span-2 xl:m-10 md:col-span-2 md:order-3 md:mx-10 mt-10 tracking-widest'>
                    <button>HOME</button>
                    <button>STORIES</button>
                    <button>FEATURES</button>
                    <button>PRICING</button>
                </div>
                <button className='xl:order-3 xl:col-start-4 md:order-2 md:m-10 md:text-right mt-24 tracking-widest'>GET AN INVITE &#8594;</button>
                <div className='md:m-10 md:text-right mt-8 order-last opacity-40'>Copyright 2019. All Rights Reserved</div>
            </div>
        </div >
    )
}
