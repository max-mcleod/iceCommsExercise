import React from 'react'

export default function SectionTwo() {
  return (
        <div className="flex justify-end md:flex-row flex-col">
          <div className="md:w-3/5 ">
            <img className='h-fit w-fit md:h-full md:w-full md:overflow-hidden md:object-cover' src="https://ice-nas.fra1.digitaloceanspaces.com/development/play/banner2.jpg" alt="" />
          </div>
          <div className="m-auto md:w-[30rem] ">
            <section className='m-10 text-left text-5xl font-semibold tracking-widest'>BEAUTIFUL STORIES EVERY TIME</section>
            <section className='mx-10 text-left text-gray-400'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</section>
            <button className='m-10 text-left font-semibold tracking-widest'>VIEW THE STORIES &#8594;</button>
          </div>
        </div>
  )
}
