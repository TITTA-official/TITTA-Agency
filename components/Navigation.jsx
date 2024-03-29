import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import MenuItem from './MenuItem'

const navigationVariants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2},
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1},
    }
}


function Navigation({items}) {
  return (
    <motion.ul className='z-20' variants={navigationVariants} >
        {items.map((item,i) => (
            <MenuItem key={i} itemName={item.name} itemLocation={item.location}/>
        ))}
    </motion.ul>
  )
}


export default Navigation