import React from 'react'

export default function Stories() {

    const storiesData = [
        {
            title: 'The Mountains',
            author: 'John Appleseed',
            img: '../assets/mountains.jpg'
        },
        {
            title: 'Sunset Cityscapes',
            author: 'Benjamin Cruz',
            img: '../assets/cityscape.jpg'
        },
        {
            title: '18 Days Voyage',
            author: 'Alexie Borodin',
            img: '../assets/hiker.jpg'
        },
        {
            title: 'Architecturals',
            author: 'Samantha Brooke',
            img: '../assets/building.jpg'
        }
    ]

    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {storiesData.map((story, i) => {
                return (
                    <div className='relative h-[550px] overflow-hidden'>
                        <img className='w-full h-full object-cover hover:opacity-80 ease-in-out' src={story.img} alt="" />
                        <div className='absolute bottom-10 left-12 right-12'>
                            <p className='text-white text-xl font-bold'>{story.title}</p>
                            <p className='text-white mt-1'>by {story.author}</p>
                            <hr className='opacity-25 border mt-4' />
                            <button className='text-white font-semibold tracking-widest mt-5'>READ STORY &#8594;</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
