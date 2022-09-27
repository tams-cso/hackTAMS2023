import Image from "next/image";
function InKindSponsor({image, link}) {
    return (
        <a href={link} target='_blank' rel='noreferrer' className='hover:scale-110 m-auto w-44 p-2 lg:p-4'>
                <Image src={image} alt="in-kind logo in sponsors section"/>
        </a>
    )
}

export default InKindSponsor;

/*import Image from "next/image";
const Sponsor = ({ image, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className={
          "h-full bg-white py-8 px-4 rounded-md shadow-lg flex flex-col justify-evenly items-center"
        }
      >
        <Image src={image} alt={title} placeholder="blur" />
        <h3 className={"text-lg font-medium text-center"}>{title}</h3>
      </div>
    </a>
  );
};
export default Sponsor;*/