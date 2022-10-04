import Image from "next/image";
function GoldSponsor({image, link}) {
    return (
        <a href={link} target='_blank' rel='noreferrer' className='hover:scale-110 m-auto w-full p-2 lg:p-4'>
                <Image src={image} alt="gold logo in sponsors section"/>
        </a>
    )
}

export default GoldSponsor;