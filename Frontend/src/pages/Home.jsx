import React from 'react'
import HomeProfile from './homePageComponents/HomeProfile'
import HomeProduct from './homePageComponents/HomeProduct'
import HomeBlackBanner from './homePageComponents/HomeBlackBanner'
import HomeSlider from './homePageComponents/HomeSlider'
import Button from '../components/Button'

function Home() {
    return (
        <div className='overflow-x-hidden'>
            <div className=''>
                <HomeProfile />
                {/* <HomeProduct /> */}
                <HomeProduct ButtonComponent={Button} />
                <HomeSlider />
                <HomeBlackBanner />
            </div>
        </div>
    )
}

export default Home
