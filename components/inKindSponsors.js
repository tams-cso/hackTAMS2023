import Image from "next/image";
function InKindSponsor({image, link}) {
    return (
        <a href={link} target='_blank' rel='noreferrer' className='hover:scale-110 m-auto w-44 p-2 lg:p-4'>
                <Image src={image} alt="in-kind logo in sponsors section"/>
        </a>
    )
}

export default InKindSponsor;