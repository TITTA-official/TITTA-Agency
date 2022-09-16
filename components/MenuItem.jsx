import React from 'react'
import {motion} from 'framer-motion'

const menuItemVariants = {
    open: {
        y:0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    }
}

function MenuItem({item}) {
  return (
    <motion.li className='poppins text-base font-medium text-[#333] hover:text-[#013ca3]' variants={menuItemVariants}>{item}</motion.li>
    
  )
}

export default MenuItem