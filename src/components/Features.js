import React from 'react'

export default function Features() {
    return (
        <div className='m-20'>
            <div className='grid xl:grid-cols-3 grid-cols-1'>
                <div className='text-center w-80 m-auto'>
                    <img className='m-auto my-10' src="../assets/svg/responsive.svg" alt="" />
                    <p className='font-bold mb-5'>100% Responsive</p>
                    <p>No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className='text-center w-80 m-auto'>
                    <img className='m-auto my-14' src="../assets/svg/infinity.svg" alt="" />
                    <p className='font-bold mb-5'>No Photo Uplaod Limit</p>
                    <p>Our tool has no limits on uplads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className='text-center w-80 m-auto'>
                    <img className='m-auto my-10' src="../assets/svg/social.svg" alt="" />
                    <p className='font-bold mb-5'>Available to Embed</p>
                    <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
                </div>
            </div>
        </div>
    )
}
