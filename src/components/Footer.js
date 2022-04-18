import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black'>
            {/* <img className='m-auto pt-10' src="../assets/svg/logo-white.svg" alt="" />
            <div className='text-white text-center grid md:grid-cols-4 grid-rows-4 grid-flow-col'>
                <p className=''>social media icons</p>
                <div className='font-semibold tracking-widest'>
                    <p className='md:inline md:ml-5 pb-3'>HOME</p>
                    <p className='md:inline md:ml-5 pb-3'>STORIES</p>
                    <p className='md:inline md:ml-5 pb-3'>FEATURES</p>
                    <p className='md:inline md:ml-5'>PRICING</p>
                </div>
                <p className='font-semibold tracking-widest mt-20'>GET AN INVITE</p>
                <p>CopyRight 2019. All Rights Reserved</p>
            </div> */}

            <img className='m-auto pt-10' src="../assets/svg/logo-white.svg" alt="" />
            <div className='flex flex-col md:flex-col-reverse justify-start text-white text-center'>
                <p className=''>social media icons</p>
                <div className='font-semibold tracking-widest'>
                    <p className='md:inline md:ml-5 pb-3'>HOME</p>
                    <p className='md:inline md:ml-5 pb-3'>STORIES</p>
                    <p className='md:inline md:ml-5 pb-3'>FEATURES</p>
                    <p className='md:inline md:ml-5'>PRICING</p>
                </div>
            </div>
            <p className='font-semibold tracking-widest mt-20'>GET AN INVITE</p>
            <p>CopyRight 2019. All Rights Reserved</p>
        </div >
    )
}
