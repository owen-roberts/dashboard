import React from 'react'

interface IProps {
    iconCode: String
}

export default function weatherIcon(props: IProps) {
    let url = `http://openweathermap.org/img/wn/${props.iconCode}@2x.png`;
    return (
        <img className='icon greyscale' src={url} alt="" />
    )
}
