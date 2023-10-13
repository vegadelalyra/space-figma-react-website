import React from 'react'
import oval from './assets/explore.svg'
import './Home.sass'

const Home = () => {
    return (
        <div>
            <div className='about'>
                <div className='subtitle'>SO, YOU WANT TO TRAVEL TO</div>
                <div className='title'>SPACE</div>
                <div className='text'>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </div>
            </div>
            <figure className='explore'>
                <img
                    src={oval}
                    alt='Explore!'
                />
                <figcaption>
                    EXPLORE
                </figcaption>
            </figure>
        </div>
    )
}

export default Home
