import React, {useState} from 'react'
import {motion} from 'framer-motion'



const Pokemon = ({pokeName, pokeID, pokeImg, pokeType}) => {

  return (
    <div>
    <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className='bg-white rounded-lg shadow-lg p-4' key={pokeID}>
    <motion.div className='flex flex-col items-center'>
                <img src={pokeImg} alt={pokeName} className='w-32 h-32'/>
                <p className='capitalize mt-3'>{pokeName}</p>
                <div className='flex space-x-3 pt-2'>
                  {pokeType.map((type) => (
                    <p className = {type.type.name}>{type.type.name}</p>
                  ))}
                </div>
                </motion.div>
        </motion.div>
      </div>
  )
}

export default Pokemon