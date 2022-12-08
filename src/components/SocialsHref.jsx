import React from 'react'
import { arrowUp, social } from '../assets'
import styles from '../style'

const SocialsHref = () => {
  return (
<div className={`${styles.flexCenter} relative sm:w-[140px] sm:h-[140px] w-[400px] h-[400px] rounded-full bg-blue-gradient p-[2px] cursor-pointer overflow-hidden`}>
      <img className="absolute opacity-20 right-10 top-10" src={social}/>
      <div className={`${styles.flexCenter} flex-col bg-primary sm:w-[98%] sm:h-[99%] w-[95%] h-[96%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium sm:text-[18px] text-[58px] sm:leading-[23px] leading-[53px] mr-0">
            <span className="text-gradient ">
              Go to
            </span>
          </p>
          <img src={arrowUp} className="sm:w-[23px] sm:h-[23px] w-[53px] h-[53px] object-contain animate-bounce" />
        </div>
        <p className="font-poppins font-medium sm:text-[18px] text-[58px] sm:leading-[23px] leading-[53px]">
          <span className="text-gradient">
            Socials
          </span>
        </p>
      </div>
    </div>
  )
}

export default SocialsHref