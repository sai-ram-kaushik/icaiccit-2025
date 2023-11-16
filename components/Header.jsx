import Image from 'next/image'
import React from 'react'
import mr_logo from '../public/mrlogo1.png'
import icaiccit_logo from '../public/icaiccit-2023 logo_updated.png'
const Header = () => {
  return (
    <div className='hidden md:block w-full h-20 bg-white'>
        <div className='flex items-center justify-center gap-10 w-full h-full'>
            <Image src={icaiccit_logo} alt='mr_logo' width={210} height={210} />
            <Image src={mr_logo} alt='mr_logo' width={250} height={250} />
        </div>
    </div>
  )
}

export default Header