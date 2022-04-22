import React from 'react'

export default function Features() {

    const featureData = [
        {
            img: '../assets/svg/responsive.svg',
            title: '100% Responsive',
            content: "No matter which device you're on, our site is fully responsive and stories look beautiful on any screen."
        },
        {
            img: '../assets/svg/infinity.svg',
            title: 'No Photo Uplod Limit',
            content: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        },
        {
            img: '../assets/svg/social.svg',
            title: 'Available to Embed',
            content: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
        }
    ]

    return (
        <div className='m-20'>
            <div className='grid xl:grid-cols-3 grid-cols-1'>
                {featureData.map((feature) => {
                    return(
                        <div className='text-center w-80 m-auto my-5'>
                            <img className='m-auto w-70 h-70 my-10' src={feature.img} alt="" />
                            <p className='font-bold mb-5'>{feature.title}</p>
                            <p>{feature.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
