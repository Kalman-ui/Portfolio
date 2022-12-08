import React from 'react'
import { discount, robot, me } from '../assets'
import styles from '../style'
import ContactHref from './ContactHref'
import ProjectsHref from './ProjectsHref'
import ResumeHref from './ResumeHref'
import SocialsHref from './SocialsHref'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-popins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            I'm simply better than<br className="sm:block hidden" /> {" "}
            <span
              className="text-gradient uppercase">everyone
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <div className={`${styles.flexCenter} overflow-hidden w-[300px] h-[300px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} overflow-hidden flex-col bg-primary w-[97%] h-[97%] rounded-full`}>
              <img src={me} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-10 mb-5 w-3/4">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            Currently employed as a <span className="text-white"> Junior Fullstack Developer</span> at <span className="text-white">Blockstars Technology</span>.
            </p>
        </div>
          <p className={`${styles.paragraph} ml-2 mt-5`}>
            I am a <span className="text-white">Fullstack developer</span> and {" "}
            <span className="text-white">Solidity smart contract auditor</span> with the goal to expand my skills and abilties everyday.<br/>
            I have received my <span className="text-white">Bachelors of Digital Enterprise</span> (4 years) with various expirience in { " " }
            <span className="text-white">Blockchain</span>, <span className="text-white">Cybersecurity</span>, <span className="text-white">fullstack development</span>, and more!
        </p>
        <hr class="my-10 w-full border-4 border-cyan-300 bg-cyan-400 rounded" />
        <div className="mb-10 w-full grid grid-cols-2 gap-4 place-content-evenly">
          <div>
          <h2 className="font-popins font-semibold ss:text-[36px] text-[22px] text-center text-cyan-200 mb-2">
            Technical Skills
          </h2>
        <p className={`${styles.paragraph} max-w-1/2 text-justify pr-5`}>
        As a full-stack developer and smart contract auditor, I am <span className="text-white">highly skilled in both front-end and back-end development</span>, with a <span className="text-white">strong understanding of blockchain technology</span> and the ability to <span className="text-white">create and audit smart contracts</span>. With a passion for problem-solving and a commitment to staying up-to-date with the latest developments in the field, <span className="text-white">I am confident in my ability to deliver high-quality, reliable solutions</span> to meet the needs of any project. My experience with a range of <span className="text-white">programming languages and frameworks</span>, combined with my <span className="text-white">strong communication and collaboration skills</span>, make me a valuable asset to any team.
        </p>
        </div>
        <div>
        <h2 className="font-popins font-semibold ss:text-[36px] text-[22px] text-center text-cyan-200 mb-2">
            Personal Skills
          </h2>
        <p className={`${styles.paragraph} max-w-1/2 text-justify pl-5`}>
        As a <span className="text-white">focused and adaptable individual</span>, I am able to effectively prioritize tasks and quickly adapt to changing circumstances. I am driven by a <span className="text-white">commitment to excellence</span> and am always looking for ways to improve both myself and the projects I am working on. I am able to stay calm under pressure and <span className="text-white">maintain a clear focus on achieving my goals</span>, even in fast-paced and dynamic environments. This has allowed me to <span className="text-white">consistently deliver high-quality work and achieve success</span> in a variety of roles. I am confident that my focus and adaptability make me an asset to any team.
        </p>
        </div>
        </div>
        <div className="w-full sm:grid grid-cols-4 place-items-center">
          <div className="ss:flex hidden md:mr-4 mr-0 sm:m-0 m-10 ">
            <ResumeHref />
          </div>
          <div className="ss:flex hidden md:mr-4 mr-0 sm:m-0 m-10">
            <ProjectsHref />
          </div>
          <div className="ss:flex hidden md:mr-4 mr-0 sm:m-0 m-10">
            <ContactHref />
          </div>
          <div className="ss:flex hidden md:mr-4 mr-0 sm:m-0 m-10">
            <SocialsHref />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero