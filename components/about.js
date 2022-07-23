import Image from 'next/image'

function AboutItem(props) {
    return (
        <div className='px-6 space-y-4 p-10 bg-c20 mt-8 rounded-3xl max-w-md flex-1'>
            <h4 className='text-center font-bold text-2xl text-white'>{props.title}</h4>
            <div className='flex flex-col justify-around h-[425px]'>
                <div className='m-auto pb-10 lg:max-w-xs lg:pb-6 lg:px-0'>
                    <Image src={props.img} alt='image in event blocks'/>
                </div>
                <p className='text-sm text-center text-white font-medium'>{props.description}</p>
            </div>
        </div>
    )
}

export default AboutItem;