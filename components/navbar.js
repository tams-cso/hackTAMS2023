import {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import navDuck from '../public/images/navDuck.PNG'
import mlhTrustBadgeGrey from '../public/images/mlh-trust-badge-2023-gray.svg'
import {REGISTRATION_LINK} from "../utils/constants";

function NavBarPage(props) {
    //for mobile menu
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    //for hamburger menu
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className="relative">
            <div className='flex items-center px-16 justify-end space-x-12 fixed top-0 bg-c21 bg-opacity-20 backdrop-blur-sm z-10 w-full'>
                <a href="#home" className='block max-w-xs pt-2'>
                    <Image src={navDuck} alt='duck in nav bar'/>
                </a>
                <div className='hidden space-x-8 text-white font-[550] text-lg lg:flex flex-row'>
                    <a href="#about" className='hover:text-c5'>about</a>
                    <a href="#tracks" className='hover:text-c5'>tracks</a>
                    <a href="#challenges" className='hover:text-c5'>challenges</a>
                    <a href="#faq" className='hover:text-c5'>faq</a>
                    <a href="#sponsors" className='hover:text-c5'>sponsors</a>
                    <a href={REGISTRATION_LINK} target='_blank' rel='noreferrer' className='hover:text-c5'>registration</a>
                </div>
                <div className="inline-block z-30 lg:hidden" onClick={toggleNav}>
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>

            {toggleMenu && (
            <div className="lg:hidden">
                <div id="menu" className="absolute flex flex-col items-center self-end py-10 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center mt-20 z-40">
                    <a href="#about" className='hover:text-c18'>about</a>
                    <a href="#tracks" className='hover:text-c18'>tracks</a>
                    <a href="#challenges" className='hover:text-c18'>challenges</a>
                    <a href="#faq" className='hover:text-c18'>faq</a>
                    <a href="#sponsors" className='hover:text-c18'>sponsors</a>
                    <a href={REGISTRATION_LINK} target='_blank' rel='noreferrer' className='hover:text-c18'>registration</a>
                </div>
            </div>)}

            <div className="max-w-[80px] min-w-[60px] fixed z-20 left-12 lg:max-w-[120px] lg:left-32">
                <Image src={mlhTrustBadgeGrey} alt="Major League Hacking 2023 Hackathon Season Banner"/>
            </div>
        </nav>
    )
}

export default NavBarPage;