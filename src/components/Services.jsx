import React from 'react'
import assets from '../assets/assets'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerfull digital solutions that connect, engage...',
            icon: assets.ads_icon,
        },
        {
            title: 'Content marketing',
            description: 'we help you execute your plan and deliver results.',
            icon: assets.marketing_icon,
        },
        {
            title: 'Content marketing',
            description: 'we help you execute your plan and deliver results.',
            icon: assets.content_icon,
        },
        {
            title: 'Social media',
            description: 'we help you build a strong media presence and engage with your audience',
            icon: assets.social_icon,
        },
    ]

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

      
    </div>
  )
}

export default Services
