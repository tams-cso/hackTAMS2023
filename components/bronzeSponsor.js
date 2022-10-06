import Image from "next/image";
function BronzeSponsor({image, link}) {
    return (
        <a href={link} target='_blank' rel='noreferrer' className='hover:scale-110 m-auto w-64 p-2 lg:p-4'>
                <Image src={image} alt="bronze logo in sponsors section"/>
        </a>
    )
}

export default BronzeSponsor;