import React from 'react'

export default function Sections() {

    const sectionData = [
        {
            title: 'CREATE AND SHARE YOUR PHOTO STORIES.',
            text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
            img: '../assets/banner1.jpg',
            orientation: 'right',
            style: 'bg-black'
        },
        {
            title: 'BEAUTIFUL STORIES EVERY TIME',
            text: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
            img: '../assets/banner2.jpg',
            orientation: 'left',
        },
        {
            title: 'DESIGNED FOR EVERYONE',
            text: 'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands businesses you name it.',
            img: '../assets/banner3.jpg',
            orientation: 'right'
        }
    ]

    return(
        <div>
            {sectionData.map((section, i) => {
                return(
                    <div className={i === 0 ? `flex md:flex-row flex-col-reverse text-white ${section.style}` : section.orientation === 'right' ? "flex md:flex-row flex-col-reverse" : "flex md:flex-row-reverse flex-col-reverse"}>
                        <div className="py-20 m-auto w-[30rem]">
                            <section className='m-10 text-left text-4xl font-semibold tracking-widest'>{section.title}</section>
                            <section className='mx-10 text-left text-gray-400'>{section.text}</section>
                            <button className='m-10 text-left font-semibold tracking-widest'>GET AN INVITE &#8594;</button>
                        </div>
                        <div className="md:w-3/5">
                            <img className='h-full w-full overflow-hidden object-cover' src={section.img} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}