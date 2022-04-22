import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black py-10'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-2 xl:px-20 md:grid-cols-2 md:grid-rows-2 md:text-left grid-cols-1 text-center text-white'>
                <img className='xl:order-1 md:order-1 md:ml-10 m-auto' src="../assets/svg/logo-white.svg" alt="" />
                <div className='xl:order-4 xl:m-10 md:order-4 md:mx-10 md:m-5 mt-10'>
                    <img className='mr-3 inline' src="../assets/mediaIcons/facebook.png" alt="" />
                    <img className='inline' src="../assets/mediaIcons/linkedin.png" alt="" />
                    <img className='mx-3 inline' src="../assets/mediaIcons/twitter.png" alt="" />
                    <img className='inline' src="../assets/mediaIcons/pinterest.png" alt="" />
                    <img className='ml-3 inline' src="../assets/mediaIcons/instagram.png" alt="" />
                </div>
                <div className='xl:order-2 xl:row-span-2 xl:m-10 md:col-span-2 md:order-3 md:mx-10 mt-10 tracking-widest'>
                    <button className='xl:block md:inline xl:ml-5 md:ml-0 pb-5'>HOME</button>
                    <button className='xl:block md:inline md:ml-5 pb-5'>STORIES</button>
                    <button className='xl:block md:inline md:ml-5 pb-5'>FEATURES</button>
                    <button className='md:inline md:ml-5 pb-5'>PRICING</button>
                </div>
                <button className='xl:order-3 xl:col-start-4 md:order-2 md:m-10 md:text-right mt-28 tracking-widest'>GET AN INVITE &#8594;</button>
                <div className='md:m-10 md:text-right order-last opacity-40'>Copyright 2019. All Rights Reserved</div>
            </div>
        </div >
    )
}
