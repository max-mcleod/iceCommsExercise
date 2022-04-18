import React from 'react'

export default function SectionOne() {
    return (
        <div className="flex justify-end md:flex-row flex-col-reverse bg-black text-white">
            <div className="m-auto md:w-[35rem]">
                <section className='m-10 text-left text-5xl font-semibold tracking-widest'>CREATE AND SHARE YOUR PHOTO STORIES.</section>
                <section className='mx-10 text-left text-gray-400'>Photosnap is a platform for photgraphers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</section>
                <button className='m-10 text-left font-semibold tracking-widest'>GET AN INVITE &#8594;</button>
            </div>
            <div className="md:w-3/5">
                <img className='h-full w-full overflow-hidden object-cover' src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner1.jpg" alt="" />
            </div>
        </div>
    )
}


