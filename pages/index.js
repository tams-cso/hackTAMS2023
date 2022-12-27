import NavbarPage from '../components/navbar'
import TrackInfo from '../components/tracks'
import ChallengeInfo from '../components/challenges'
import FaqDropdown from '../components/faq'
import AboutItem from '../components/about'
import InKindSponsor from '../components/inKindSponsors'
import BronzeSponsor from '../components/bronzeSponsor'
import GoldSponsor from '../components/goldSponsor'

import {DISCORD_LINK, REGISTRATION_LINK, INSTAGRAM_LINK, MLH_CODE_OF_CONDUCT_LINK, DONATION_LINK} from "../utils/constants";

import {useState, useEffect} from 'react'
import Image from 'next/image'
import cabinDuck from '../public/images/cabinDuck.PNG'
import introDuck from '../public/images/introDuck.PNG'
import hacktams from '../public/images/hacktams.jpg'
import penguinDuck from '../public/images/penguinDuck.PNG'
import penguinDuckM from '../public/images/penguinDuckM.png'
import navDuckBtwn from '../public/images/navDuckBtwn.png'
import workshops from '../public/images/workshops.PNG'
import guest_speaker1 from '../public/images/GuestSpeaker1.PNG'
import college from '../public/images/CollegePanels.PNG'
import fun_activities from '../public/images/FunActivities.PNG'

import hackplus from '../public/sponsors/hackplus.svg'
import mlh from '../public/sponsors/mlh.svg'
import taskade from '../public/sponsors/taskade.png'
import scrimba from '../public/sponsors/scrimba.png'
import standoutStickers from '../public/sponsors/standoutStickers.png'
import wolframAlpha from '../public/sponsors/wolframAlpha.png'
import github from '../public/sponsors/github.png'
import centered from '../public/sponsors/centered.png'
import overleaf from '../public/sponsors/overleaf.png'
import voiceflow from '../public/sponsors/voiceflow.png'
import stoke from '../public/sponsors/stoke.png'
import leangap from '../public/sponsors/leangap.png'
import techacks from '../public/sponsors/techacks.PNG'


export default function Home() {

  const [faqs, setfaqs] = useState([
    {
      question: 'what is a hackathon?', 
      answer: 'A hackathon is a coding marathon where students can turn their creative ideas into real projects. During the event, we will have several fun events and informative workshops. Additionally, we will provide free food, merch, and hardware.',
      open: false
    },
    {
        question: 'who is eligible to participate?', 
        answer: 'hackTAMS is exclusively targeted towards high school students.',
        open: false
    },
    {
        question: 'are there any costs?', 
        answer: 'No, everything is free! This includes participation, food, merch, and swag!',
        open: false
    },
    {
        question: 'what should i bring?', 
        answer: 'If you\'re participating from online, all you\'ll need is a laptop. If you\'re participating in-person, you\'ll need to bring a laptop and a charger. Additionally, feel free to bring blankets, pillows, and anything else you\'ll need over the weekend. Hardware and food will be provided by us.',
        open: false
    },
    {
        question: 'how many people can be on a team?', 
        answer: 'Teams can include anywhere from 2-4 people. You can participate individually as well.',
        open: false
    },
    {
        question: 'what if i don\'t have a team?', 
        answer: 'You can still sign up if you don\'t have a team! We\'ll host a team formation session during the event where you can find teammates.',
        open: false
    },
    {
      question: 'what if i don\'t know how to code?', 
      answer: 'hackTAMS is targeted towards both beginner and advanced coders, so you can participate even if you have limited coding experience! We will have a beginner\'s track and various resources (workshops, mentors) to help beginners during the event.',
      open: false
    },
    {
      question: 'when is registration?', 
      answer: 'Registration will be open from December 1 to January 27!',
      open: false
    },
    {
      question: 'have more questions?', 
      answer: 'Email us at team@hacktams.org!',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } 
      return faq;
    }))
  }

  return (
    <div className='overflow-hidden'>

      <div id="home" className="h-screen bg-[url('../backgrounds/intro_crop.PNG')] bg-no-repeat bg-center bg-cover">
        <NavbarPage/>
        <div className='flex flex-col justify-around max-h-fit'> {/*pt-36*/}
          {/*text div*/}
          <div className='mt-16 sm:mt-10 md:mt-0 space-y-12'> 
            <div>
              <h1 className='font-bold text-center text-white text-6xl sm:text-7xl md:text-8xl lg:text-[120px] md:pt-32'>hackTAMS</h1>
              <h1 className='font-bold text-center text-white text-6xl sm:text-7xl md:text-8xl lg:text-[120px]'>2023</h1>
            </div>
            <div className='space-y-2'>
              <h2 className='text-4xl text-center text-c3 md:text-5xl font-black'>01.28 - 01.29</h2>
              <h2 className='text-3xl text-center text-c3 md:text-[40px] font-black'>@Willis Library (UNT)</h2>
            </div>
          </div>
          {/*duck image*/}
          <div className='w-full h-full relative mt-16 lg:mt-8 lg:mb-[6rem] lg:ml-[25rem]'>
            <Image src={introDuck} alt='duck on home screen'/>
          </div>
        </div>
      </div>

      <div id='about' className="py-12 bg-cover bg-[url('../backgrounds/aboutBg.PNG')] bg-[length:100%_100%]">
        <h1 className='text-c3 text-[80px] text-center font-bold'>about</h1>
        {/*about info*/}
        <div className='flex flex-col-reverse m-auto justify-around my-6 lg:flex-row lg:my-12 lg:w-2/3'> 
          {/*image*/} 
          <div className='max-w-sm mt-12 mx-auto px-6 lg:px-0 lg:my-auto'>
            <Image src={hacktams} className='rounded-xl' alt='picture from hacktams 2021'/>
          </div>
          {/*words*/}
          <div className='max-w-xl px-4 my-auto mx-auto'>
            <h4 className='text-xl text-center lg:text-justify'>hackTAMS is an annual hackathon organized by students at the Texas Academy of Mathematics and Science. A hackathon is a coding marathon where students design, build, and present a project - typically software and sometimes hardware - within a short period of time. Our event lets high school students from across Texas showcase their talent and creativity through coding projects and presentations. Students will have access to workshops, guest speakers, networking opportunities, and other fun and informative events while working on their projects.</h4>
          </div>
        </div> 
        {/*event boxes*/}
        <h1 className='text-c3 text-[80px] text-center font-bold'>events</h1>
        <h2 className='text-c3 text-[30px] text-center'>join us for community, networking opportunities, and fun!</h2>
        <div className='flex flex-col justify-center -mt-6 py-12 px-8 items-stretch lg:flex-row lg:space-x-10 lg:px-28'>
          <AboutItem title={'workshops'} img={workshops} description={'We will be offering workshops for both beginner and advanced hackers who want to expand their toolkit for project building. The workshops that we will be offering are Intro to App Development, Intro to React, and Intro to Machine Learning.'}/>
          <AboutItem title={'guest speakers'} img={guest_speaker1} description={'We will be inviting multiple distinguished figures from the tech industry to come and speak at hackTAMS. This event is meant to help hackers gain insight into what it\'s like working in the tech industry and how to get there. More information coming soon...'}/>
          <AboutItem title={'cs college panel'} img={college} description={'We will be inviting undergraduate computer science students from major universities to come and speak at hackTAMS. This event is meant to help hackers learn more about the college application process and what studying computer science is like in college. More information coming soon...'}/>
          <AboutItem title={'fun activities'} img={fun_activities} description={'In addition to the informative events, we will also be hosting various fun activities throughout the hackathon. For example, a Mario Kart and Super Smash Bros tournament! More information coming soon...'}/>
        </div>
      </div>

      <div id='tracks_challenges' className="bg-[url('../backgrounds/ZZ_NEW_Cabin.PNG')] sm:bg-[url('../backgrounds/Z_Shorter_TC.PNG')] lg:bg-[url('../backgrounds/Z_Short_traincabin_cropped.PNG')] xl:bg-[length:100%_100%] bg-no-repeat bg-center bg-cover">
        <div id="tracks" className='py-36 xl:h-screen'>
          {/*title*/}
          <div className="">
            <h2 className='text-white text-7xl text-center font-bold lg:text-8xl lg:pt-16'>tracks</h2>
          </div>
          {/*tracks*/}
          <div className='flex flex-col items-start justify-evenly mx-auto space-y-8 px-4 lg:w-5/6 lg:h-1/2 lg:pt-44 lg:flex-row lg:space-y-0'>
            {/*track 1*/}
            <TrackInfo trackName={'hack track'} trackPar={'The hack track is geared towards students who have experience in computer science and engineering. Students will design and prototype a project using their technical skills and the latest technologies.'}/>
            {/*track 2*/}
            <TrackInfo trackName={'prototype track'} trackPar={'The prototype track is for participants who have little to no coding experience. Students will come up with a creative idea for a project and create a presentation for it.'}/>
          </div>
        </div>
        <div id="challenges" className="pb-20 pt-[35rem] lg:pt-[0rem] lg:py-16 xl:h-screen xl:py-0">
          <div className="lg:pt-[17rem]">
            <h2 className='text-6xl text-white font-bold text-center lg:mt-[2.75rem] md:text-8xl'>challenges</h2>
            {/*pic + challenges*/}
            <div className='flex flex-col justify-evenly pt-12 space-y-10 relative lg:flex-row'>
              {/*gif*/}
              <div className='md:w-1/2 mx-auto px-16 md:px-0 lg:ml-10 lg:my-auto xl:pt-24 xl:px-20'>
                <Image src={cabinDuck} alt='duck in challenges'/>
              </div>
              {/*challenges*/}
              <div className='px-8 sm:px-20 md:px-24 grid grid-flow-col grid-cols-1 grid-rows-4 gap-6 lg:w-2/3 lg:grid-cols-2 lg:grid-rows-2 xl:mx-0 xl:w-2/3'>
                <ChallengeInfo chName={'challenge 1'} chPar={'coming soon...'}/>
                <ChallengeInfo chName={'challenge 2'} chPar={'coming soon...'}/>
                <ChallengeInfo chName={'challenge 3'} chPar={'coming soon...'}/>
                <ChallengeInfo chName={'challenge 4'} chPar={'coming soon...'}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className='bg-c15 sm:px-8 md:px-24'>
        {/*title*/}
        <div className='pt-14 xl:pt-20'>
          <h2 className='text-white font-bold text-6xl tracking-widest text-center'>faq</h2>
        </div>
        {/*faq cards + image*/}
        <div className='flex flex-col md:flex-row px-0 mx-auto justify-around pb-4'>
          {/*images*/}
          <div className='h-1/4 w-96 flex flex-row px-6 mx-auto mt-12 md:hidden'>
            <Image src={penguinDuck} alt='penguin duck 1 in faq small screen'/>
            <Image src={penguinDuckM} alt='penguin duck 2 in faq small screen'/>
          </div>
          <div className='h-1/4 w-48 mt-[32rem] mr-8 hidden md:block'>
            <Image src={penguinDuck} alt='penguin duck 1 in faq large screen'/>
          </div>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FaqDropdown key={1} faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            ))}
          </div>
          <div className='h-1/4 w-48 ml-8 mt-[10rem] hidden md:block'>
            <Image src={penguinDuckM} alt='penguin duck 2 in faq large screen'/>
          </div>
        </div>
      </div>
      <div className='-ml-6'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="105%" height="100%" viewBox="0 0 5000 550"><path d="M0 142c0 78.1.3 142 .6 142s8.5-1.3 18.2-3C183 253.4 373 226.7 491 214.6c124-12.8 220.1-14.5 323-6 69.1 5.7 148.5 18.5 210.8 33.9 79.4 19.6 124.5 38.1 220.2 90 31.7 17.2 107.8 55.6 127 64 49.9 21.9 100.7 34.9 150.2 38.4 21.1 1.6 73.1 1.3 93.8-.4 83.8-6.8 156.2-23.1 269.7-60.6 78.5-25.9 109.5-35 149.8-44.3 56.2-12.8 97.1-17.8 148-17.8 66.1-.1 132.3 10.7 221 36.2 55.9 16 93.7 30.1 215 79.8 89.6 36.7 126.9 48.9 181 59.1 110.5 20.9 238.5 13.8 388-21.5 82.1-19.4 170.1-48.4 243.5-80.2 69.4-30.1 115.6-55.2 224-121.8 50.4-31 84.8-50.1 119.5-66.3 107.2-49.9 202.5-71.9 291.9-67.2 79 4.1 142.7 19.3 196.8 46.7 18.5 9.5 32.2 17.9 70.8 43.9 47.1 31.7 66.2 42.6 94.4 54.2 39.1 16.1 73.3 23.8 131.1 29.5 17.7 1.8 98.3 1.8 116 0 68.6-6.8 128.2-20 183-40.7 48.9-18.4 97-43.8 132.3-69.8l8.2-6.1V0H0v142z" fill="#6a463d"/></svg>
      </div>

      <div id="sponsors" className='mb-6 px-8 sm:px-18 md:px-24'>
        <div className='w-full m-auto pt-12 pb-6'>
          {/*partners*/}
          <div className='grid justify-center lg:pt-4'>
            <h2 className='text-c2 font-bold text-6xl text-center pt-8 pb-4'>partners</h2>
            <div className='flex flex-wrap justify-between items-center lg:flex-row'>
              <a href="https://hackplus.io" target='_blank' rel='noreferrer' className='hover:scale-105 m-auto w-[21rem] p-6'>
                <Image src={hackplus} alt="hackplus logo in partners section"/>
              </a>
              <a href="https://mlh.io" target="_blank" rel='noreferrer' className='hover:scale-105 m-auto w-72 p-6'>
                <Image src={mlh} alt="mlh logo in partners section"/>
              </a>
            </div>
          </div>
          {/*sponsors*/}
          <div>
            <h2 className='text-c2 font-bold text-6xl text-center'>sponsors</h2>
            {/*gold sponsors*/}
            <div className='grid justify-center'>
              <div className='flex flex-wrap justify-evenly items-center lg:flex-row'>
                <GoldSponsor image={github} link='https://github.com'/>
              </div>
            </div>
            {/*bronze sponsors*/}
            <div className='grid justify-center -mt-20'>
              <div className='flex flex-wrap justify-evenly items-center lg:flex-row'>
                <BronzeSponsor image={overleaf} link='https://www.overleaf.com'/>
                <BronzeSponsor image={stoke} link='https://stokedenton.com'/>
                <BronzeSponsor image={leangap} link='https://www.leangap.org'/>
                <BronzeSponsor image={techacks} link='https://techacks.ml'/>
              </div>
            </div>
            {/*in-kind sponsors*/}
            <div className='grid justify-center'>
              <div className='flex flex-wrap justify-evenly items-center lg:flex-row'>
                <InKindSponsor image={taskade} link='https://www.taskade.com'/>
                <InKindSponsor image={scrimba} link='https://scrimba.com'/>
                <InKindSponsor image={standoutStickers} link='https://www.standoutstickers.com/?utm_campaign=events-league-organizers-spring2022&utm_medium=email&utm_source=customerio-zoho_creator_-_standout_sticker_intro'/>
                <InKindSponsor image={wolframAlpha} link='https://www.wolframalpha.com'/>
                <InKindSponsor image={centered} link='https://www.centered.app'/>
                <InKindSponsor image={voiceflow} link='https://www.voiceflow.com'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='-ml-6'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="105%" height="100%" viewBox="0 0 5000 550"><path d="M1299.5 81c43.7 2.2 65.4 9.6 76.8 26.2 11.3 16.3 9.4 33-13.2 116-13.9 51.1-15.3 64.5-8.6 81 9.7 23.7 40.7 45.6 88.5 62.3 62.5 21.9 124 27.9 227.5 22.5 101.4-5.4 212.5-21.4 385-55.6 68.8-13.7 114.7-23.5 239-51.4 154.3-34.6 248.6-49 332.6-50.7 63.5-1.3 119.4 6.9 147.8 21.7 9.9 5.2 19.1 12.2 40.1 30.5 31.3 27.4 50.3 38.8 77 46.4 57.6 16.4 191.8 24.5 287 17.2 63.5-4.9 107.5-10.5 226.5-29 102.6-15.9 194-34 291.5-57.6 14.6-3.5 33.9-8.1 43-10.1 9.1-1.9 20.5-4.9 25.5-6.4 4.9-1.6 20.5-5.8 34.6-9.4 42-10.7 124.6-33.4 134.9-37.1 2.5-.9 7-2.2 10-2.9 3-.8 9.5-2.6 14.5-4 32-9.5 85.1-18.7 134.5-23.3 26.7-2.5 104.4-2.5 132 0 51 4.6 76.8 11.8 94.6 26.3 20.4 16.7 26.6 35.7 23 70.5-2 19.3-2 33.3-.1 42.3 3.9 18.2 14.9 31.2 35.4 41.6 25.5 12.8 77.3 25.8 138.1 34.6 51.4 7.4 85.7 5.6 173-9.2 50.4-8.5 127.2-24.1 221.3-45 33.7-7.4 86.3-18.4 88.4-18.4.2 0 .3 54 .3 120v120H0V374.5l36.8-6.4c120.3-21 220.4-45.4 449.7-109.7 22.5-6.4 53.6-15.1 69-19.4 101.1-28.3 240.2-65.7 313-84 162.1-40.8 273-63.1 355-71.5 14.5-1.5 51.7-3.6 58-3.3 1.6 0 9.7.4 18 .8z" fill="#414247"/></svg>
      </div>

      <footer id="footer" className='bg-c5 relative pt-12 pb-16 lg:pt-8'> 
            {/*flex container*/}
            <div className='container flex flex-col justify-between px-8 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className=''>
                  <div>
                    <h2 className='text-white font-bold text-xl md:hidden'>hackTAMS</h2>
                  </div>
                  {/*logo*/}
                  <div className='hidden md:block -mt-4'>
                    <a href='#home'><Image src={navDuckBtwn} alt='duck logo in footer' placeholder='blur'/></a>
                  </div>
                </div>
                {/*list container*/}
                <div className='flex flex-col justify-around space-y-6 md:space-y-0 md:flex-row md:space-x-32'>
                  {/*mlh code of conduct*/}
                  <div className='flex flex-col space-y-6 text-white'>
                    {/*donate*/}
                    <div>
                      <h3 className='text-c9 font-bold'>mlh</h3> 
                      <a href={MLH_CODE_OF_CONDUCT_LINK} target='_blank' rel='noreferrer' className='text-c4 hover:text-white'>code of conduct</a>
                    </div>
                  </div>

                  {/*register + donate*/}
                  <div className='flex flex-col space-y-6 text-white'>
                    {/*register*/}
                    <div>
                      <h3 className='text-c9 font-bold'>registration</h3> 
                      <a href={REGISTRATION_LINK} target='_blank' rel='noreferrer' className='text-c4 hover:text-white'>registration link</a>
                    </div>
                    {/*donate*/}
                    <div>
                      <h3 className='text-c9 font-bold'>donate</h3> 
                      {/*<a href={DONATION_LINK} className='text-c4 hover:text-white' target='_blank' rel='noreferrer'>donation page</a>*/}
                      <a className='text-c4'>donation page</a>
                    </div>
                  </div>

                  {/*instagram + discord + email*/}
                  <div className='flex flex-col space-y-6 text-white'>
                    {/*email*/}
                    <div>
                      <h3 className='text-c9 font-bold'>contact us</h3> 
                      <a href='mailto:team@hacktams.org' className='text-c4 hover:text-white'>team@hacktams.org</a>
                    </div>
                    {/*instagram*/}
                    <div>
                      <h3 className='text-c9 font-bold'>instagram</h3> 
                      <a href={INSTAGRAM_LINK} className='text-c4 hover:text-white' target='_blank' rel='noreferrer'>https://www.instagram.com/hacktams/</a>
                    </div>
                    {/*discord*/}
                    <div>
                      <h3 className='text-c9 font-bold'>discord server</h3> 
                      <a href={DISCORD_LINK} className='text-c4 hover:text-white' target='_blank' rel='noreferrer'>https://discord.gg/fVKDT6Ra5s</a>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
