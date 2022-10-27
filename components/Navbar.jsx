import React, { Component } from 'react'
import Image from 'next/image'
import PokeballImg from '../public/assets/pokeball.png'

export class Navbar extends Component {
  render() {
    return (
        <nav className=' bg-red-400 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a href="#" className="flex items-center">
                    <Image src={PokeballImg} alt="Pokeball" width={50} height={50} className='mr-3'/>
                    <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>Pokedex</span>
                </a>
            </div>
        </nav>
    )
  }
}

export default Navbar