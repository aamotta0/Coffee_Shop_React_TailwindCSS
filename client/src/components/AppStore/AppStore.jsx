import React from 'react';

// AppStoreImg and PlayStoreImg are images
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';
import BgPng from '../../assets/website/coffee-beans-bg.png';

// background image
const bgStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
}


const AppStore = () => {
    return (
        <>
            <span id='about'></span>
            <div style={bgStyle} className='py-14'>
                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='space-y-6 max-w-xl mx-auto'>
                            {/* Text-content */}
                            <h1 className='text-2xl font-center sm:text-left sm:text-4xl font-semibold pl-3 text-white/90'>Coffee Cafe is available for Android and IOS</h1>
                            {/* logo-section */}
                            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                                <a href='#'>
                                    <img src={AppStoreImg} alt='App Store' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                </a>
                                <a href='#'>
                                    <img src={PlayStoreImg} alt='App Store' className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                                </a>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppStore