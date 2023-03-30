import React from 'react'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaBitcoin } from 'react-icons/fa';
import { IoLogoDiscord } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
export default function Footer() {
  return (
    <div className='flex justify-around content-center'>
        <div>
        <div className=" font-Teko text-white text-2xl h-8 mr-4 flex items-center bg-clip-text">
                SPACE.
        </div>
        &nbsp;
        <div className='flex gap-3'>
        <AiFillTwitterCircle size={25} style={{ fill: 'white' }}/>
        <FaBitcoin size={23} style={{ fill: 'white' }}/>
        <IoLogoDiscord size={25} style={{ fill: 'white' }}/>
        <BsGithub size={25} style={{ fill: 'white' }}/>
        </div>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
      <div>
        <h6 className='text-gray-400'>All Rights reserved c 2023.</h6>
      </div>
      </div>

    <div className='flex gap-24'>
      <div>
        <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text">MARKETPLACE</h3>
        <h4 className='text-gray-400'> About us</h4>
        <h4 className='text-gray-400'>Our team</h4>
        <h4 className='text-gray-400'> Team details</h4>
        <h4 className='text-gray-400'> Error 404</h4>
        <h4 className='text-gray-400'> Cart page</h4>
      </div>


      <div>
        <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text">COMPANY</h3>
        <h4 className='text-gray-400 mr-3'>Wallet</h4>
        <h4 className='text-gray-400 mr-3'>Create page</h4>
        <h4 className='text-gray-400'>Login page</h4>
        <h4 className='text-gray-400'>Registration</h4>
        <h4 className='text-gray-400'>Checkout</h4>
      </div>

      <div>
        <h3 className=" font-Teko text-white text-lg h-8 mr-4 flex items-center bg-clip-text">SERVICES</h3>
        <h4 className='text-gray-400'>Contact us</h4>
        <h4 className='text-gray-400'>Shop page</h4>
        <h4 className='text-gray-400'>Shop details</h4>
        <h4 className='text-gray-400'>Collectors</h4>
      </div>
      </div>
    </div>
  )
}
