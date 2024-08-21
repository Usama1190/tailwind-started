import Link from 'next/link';
import React from 'react';

const BlogGrid = () => {
  return (
    <div className='grid grid-cols-3 gap-x-8 gap-y-8 p-8'>
        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>

        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>

        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>

        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>

        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>

        <div className='card'>
            <img src="https://picsum.photos/400/300" alt="landscape image" />

            <div>
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloribus?</p>
                <Link href={'#'} className='link'>Read more</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogGrid
