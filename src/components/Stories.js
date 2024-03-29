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
            {storiesData.map((story) => {
                return (
                    <div className='relative h-[550px] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={story.img} alt="" />
                        <div className='text-white absolute bottom-10 left-12 right-12'>
                            <p className='text-xl font-bold'>{story.title}</p>
                            <p className='mt-1'>by {story.author}</p>
                            <hr className='opacity-25 border mt-4' />
                            <button className='font-semibold tracking-widest mt-5'>READ STORY &#8594;</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
