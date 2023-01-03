function TrackInfo(props) {
    return (
        <div className='flex flex-col items-center justify-evenly space-y-6 pt-24 w-full px-8 lg:pt-0'>
            <h3 className='text-white text-center font-bold text-4xl lg:text-6xl'>{props.trackName}</h3>
            <p className='text-white max-w-xl text-2xl lg:text-3xl text-center lg:text-justify'>{props.trackPar}</p>
        </div>
    )
}

export default TrackInfo;