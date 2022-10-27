import { motion } from 'framer-motion';
import React, {useState} from 'react'

const PokeDetails = ({isVisible, onClose, pokeImg, pokeName, pokeHeight, pokeWeight, pokeType,pokeMoves, pokeAbilities, pokeID}) => {
    if (!isVisible) return null;

    const [loaded, setLoaded] = useState(false);

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const flip = {
        hidden: {
            transform: "scale(0) rotate(720deg)",
            opacity: 0,
            transition: {
              delay: 0.3,
            },
          },
          visible: {
            transform: " scale(1) rotate(0deg)",
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
          exit: {
            transform: "scale(0) rotate(-720deg)",
            opacity: 0,
            transition: {
              duration: 0.3,
            },
          },
      };

  return (
    
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
    <motion.div 
    onClick={(e) => e.stopPropagation()}   
    // style={loaded ? {} : { display: 'none' }}
    variants={flip}
    initial="hidden"
    animate="visible"
    exit="exit"
    className='bg-white p-4 rounded w-65 h-50 object-scale-down sm:w-1/2'>
    <div className='flex justify-between'>
    <p className='text-xl'>{pokeID}</p>
    <button 
    onClick={()=> onClose()}
    type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
    </div>
    <div className='flex items-center flex-col'>
    <img src={pokeImg} alt={pokeName} className='w-64 h-64 p-5 shadow rounded border-none' onLoad={() => setLoaded(true)}/>
    <div className='flex space-x-3 pt-2 mt-3'>
                {pokeType.map((type) => (
                    <p className = {type.type.name}>{type.type.name}</p>
                ))}
    </div>
    <div className='flex flex-col justify-start'>
    <p className='text-xl capitalize mt-5 text-left'>Name: {pokeName}</p>
    <div className='flex'>
    <p className='text-xl capitalize text-left'>Height: {Number(pokeHeight)*10} </p><p className='text-xl'>&nbsp;cm</p>
    </div>
    <p className='text-xl capitalize text-left'>Weight: {pokeWeight} Ib</p>
    </div>
        <div className='flex gap-x-10 text-xl justify-center m-5'>
            <div>
            <p className='underline'>Abilities</p>
            <ul className='list-disc'>
            {pokeAbilities.slice(0,5).map((ability) => (
                <li className='capitalize'>{ability.ability.name}</li>
            ))}
            </ul>
            </div>
            <div>
            <p className='underline'>Moves</p>
            <ul className='list-disc'>
            {pokeMoves.slice(0,5).map((move) => (
                <li className='capitalize'>{move.move.name}</li>
            ))}
            </ul>
            </div>
        </div>
        
    </div>
    </motion.div>
    </div>
  )
}

export default PokeDetails