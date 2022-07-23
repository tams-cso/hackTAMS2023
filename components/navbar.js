import {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import navDuckMd from '../images/navDuckMd.PNG'
import navDuckBtwn from '../images/navDuckBtwn.PNG'
import navDuckSmall from '../images/navDuckSmall.PNG'

function NavBarPage(props) {
    //for mobile menu
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    //for hamburger menu
    const [isOpen, setOpen] = useState(false)

    return (
        <nav className='relative container mx-auto p-6 pt-8'>
            {/*flex container*/}
            <div className='flex items-center justify-between lg:justify-around'>
                {/*nav logo*/}
                <div className='hidden sm:block max-w-xs pt-2'>
                    <Image src={navDuckBtwn}/>
                </div>
                <div className='block sm:hidden max-w-xs pt-2'>
                    <Image src={navDuckSmall}/>
                </div>
                {/*menu items*/}
                <div className='hidden space-x-6 text-white text-2xl md:flex'>
                    <a href="#about" className='hover:text-c5'>about</a>
                    <a href="#tracks" className='hover:text-c5'>tracks</a>
                    <a href="#challenges" className='hover:text-c5'>challenges</a>
                    <a href="#faq" className='hover:text-c5'>faq</a>
                    <a href="#sponsors" className='hover:text-c5'>sponsors</a>
                </div>
                {/*button*/}
                <a href="#footer" className='hidden px-6 py-3.5 text-white bg-c3 rounded-full baseline hover:bg-c5 md:block'>contact us</a>

                {/*hamburger icon*/}
                <div className="inline-block md:hidden" onClick={toggleNav}>
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>

            {toggleMenu && (
            <div class="md:hidden">
                <div id="menu" class="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center">
                    <a href="#about" className='hover:text-c18'>about</a>
                    <a href="#tracks" className='hover:text-c18'>tracks</a>
                    <a href="#challenges" className='hover:text-c18'>challenges</a>
                    <a href="#faq" className='hover:text-c18'>faq</a>
                    <a href="#sponsors" className='hover:text-c18'>sponsors</a>
                    <a href="#footer" className='hover:text-c18'>contact us</a>
                </div>
            </div>)}
            
        </nav>
    )
}

export default NavBarPage;