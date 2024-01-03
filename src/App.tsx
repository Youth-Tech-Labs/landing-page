import '@fontsource-variable/inter';
import './App.css'
import logo from './assets/logo.png'
import ac from './assets/Sponsors/ac.png'
import swril from './assets/Sponsors/swril.jpg'

import { GraduationCapIcon, LightbulbIcon, ZapIcon } from 'lucide-react'
import { Link } from 'react-scroll'

function App() {
  return <>
    <nav className="fixed w-full h-20 flex items-center backdrop-blur-lg">
      <img
        src={logo}
        className='absolute h-[100px] translate-x-5 translate-y-3 cursor-pointer'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        alt="Youth Tech Labs Logo"
      />
      <span
        className='ml-28 text-[#DDD] text-2xl font-[600] whitespace-nowrap cursor-pointer'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
          Youth Tech Labs
      </span>
      <div className="hidden items-center ml-12 mr-8 lg:flex w-full">
        <button
          onClick={() => window.scrollTo({ top: document.body.clientHeight })}
          className='text-gray-100/70 hover:text-gray-100/90 transition-all'>
            About
        </button>
        <button
          className="bg-amber-400/85 hover:bg-amber-400/90 px-4 py-2 rounded-2xl ml-auto"
          onClick={() => { window.open('https://forms.gle/osGK1wPM3sM6qAP8A'); return false }}>
        Apply Now!
        </button>
      </div>
      <div className="bg-gradient-to-r from-white/5 via-white/15 to-white/5 w-full h-[1px] absolute top-20"></div>
    </nav>
    
    <section className="w-full h-screen flex items-center">
      <div className='w-full lg:w-[60%] px-24 pt-16'>
        <h1 className='font-[600] text-[70px] align-center bg-gradient-to-b from-[#FFF6AC] to-[#a44801] text-transparent bg-clip-text leading-none mt-0'>Empowering the future of tech.</h1>
        <p className='mt-8 text-gray-100/70 text-[1.25rem]'>
          Youth Tech Labs is committed to cultivating AI literacy for youth, recognizing the pivotal role youth play in shaping society's technological future.<br />Our mission is to equip young minds with the knowledge and skills necessary to navigate, innovate, and lead in a world influenced <span className='whitespace-nowrap'>by AI.</span>
        </p>
        <button className='bg-amber-400/85 hover:bg-amber-400/90 mt-8 px-8 py-3 rounded-2xl font-semibold text-xl transition-all'>Shape future leaders</button>
      </div>
    </section>

    <section className="w-full h-screen">
      <h2 className="text-[2.5rem] text-center">About us</h2>
      <div className="w-full h-128 flex gap-8 px-8 mt-4 items-stretch">

        <div className="w-1/3 h-full p-[1px] bg-gradient-to-br from-white/5 to-white/15 rounded-[50px]">
          <div className="w-full bg-piano-black rounded-[50px] p-8">
            <GraduationCapIcon className="w-12 h-12 stroke-cyan-300/85 mx-auto" />
            <h4 className="text-center font-extralight text-xl text-cyan-300/90 mb-4">EDUCATE</h4>
            <h3 className="text-center font-bold text-xl mb-4">Engage with Local AI Experts</h3>
            <p className="text-gray-300">At Youth Tech Labs, education is at the forefront of our mission. We provide a unique platform for students to engage directly with leading AI experts from Kitchener-Waterloo. Through these interactions, participants gain invaluable insights into the AI landscape, learn about current trends, and understand the practical applications of AI in various industries.</p>
          </div>
        </div>

        <div className="w-1/3 h-full p-[1px] bg-gradient-to-br from-white/5 to-white/15 rounded-[50px]">
          <div className="w-full bg-piano-black rounded-[50px] p-8">
            <LightbulbIcon className="w-12 h-12 stroke-yellow-300/85 mx-auto" />
            <h4 className="text-center font-extralight text-xl text-yellow-300/90 mb-4">INNOVATE</h4>
            <h3 className="text-center font-bold text-xl mb-4">Interactive AI Learning Experiences</h3>
            <p className="text-gray-300">Innovation is the key to unlocking the potential of AI. Youth Tech Labs encourages this through hands-on experiences with advanced AI platforms. Participants work in collaborative teams, applying their newfound knowledge to real-world AI applications. This not only enhances their technical skills but also fosters a spirit of creativity and teamwork. By turning ideas into tangible projects, students experience the thrill of innovation and the impact of AI in solving real-world problems.</p>
          </div>
        </div>

        <div className="w-1/3 h-full p-[1px] bg-gradient-to-br from-white/5 to-white/15 rounded-[50px]">
          <div className="w-full bg-piano-black rounded-[50px] p-8">
            <ZapIcon className="w-12 h-12 stroke-indigo-300/90 mx-auto" />
            <h4 className="text-center font-extralight text-xl text-indigo-300/95 mb-4">EMPOWER</h4>
            <h3 className="text-center font-bold text-xl mb-4">Shaping AI Education Policy</h3>
            <p className="text-gray-300">Students will participate in dynamic discussions aimed at shaping an AI education policy. These discussions provide a platform for students to voice their ideas, concerns, and visions for the future of AI in education. This empowers them to become not just informed users of technology but also active contributors to the broader conversation around AI and its role in shaping our world.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full h-screen px-16">
      <h2 className="text-[2.5rem] text-center mb-4">Sponsors</h2>
      <div className="max-w-[36rem] bg-white px-12 py-8 rounded-[1rem] mx-auto transition-all">
        <a href="https://www.acceleratorcentre.com" target='_blank' rel="noopener noreferrer">
          <img src={ac} alt="Accelerator Centre Logo"/>
        </a>
      </div>
      <div className="max-w-[36rem] bg-white px-12 py-8 rounded-[1rem] mx-auto transition-all cursor-pointer mt-8">
      <a href="https://www.swril.ca" target='_blank' rel="noopener noreferrer">
          <img src={swril} alt="Smart Waterloo Region Innovation Lab Logo" />
        </a>
      </div>
    </section>
  </>
}

export default App
