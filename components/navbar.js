import {useState, useEffect} from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import navDuckBtwn from '../images/navDuckBtwn.png'
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
                    <Image src={navDuckBtwn} alt='duck in nav bar for large screens'/>
                </div>
                <div className='block sm:hidden max-w-xs pt-2'>
                    <Image src={navDuckSmall} alt='duck in nav bar for small screens'/>
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
                <a href='https://forms.gle/W6cdWQk2nqrQfZzN8' target='_blank' rel='noreferrer' className='hidden px-6 py-3.5 text-white bg-c3 rounded-full baseline hover:bg-c5 md:block'>pre-register</a>

                {/*hamburger icon*/}
                <div className="inline-block md:hidden" onClick={toggleNav}>
                    <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
            </div>

            {toggleMenu && (
            <div className="md:hidden">
                <div id="menu" className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md sm:w-auto sm:self-center">
                    <a href="#about" className='hover:text-c18'>about</a>
                    <a href="#tracks" className='hover:text-c18'>tracks</a>
                    <a href="#challenges" className='hover:text-c18'>challenges</a>
                    <a href="#faq" className='hover:text-c18'>faq</a>
                    <a href="#sponsors" className='hover:text-c18'>sponsors</a>
                    <a href='https://forms.gle/W6cdWQk2nqrQfZzN8' target='_blank' rel='noreferrer' className='hover:text-c18'>pre-register</a>
                </div>
            </div>)}
            
        </nav>
    )
}

export default NavBarPage;