import React, { useEffect, useState } from 'react'

const Num = (props) => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/'+props.cat+'/'+props.id)
        .then(response => response.json())
        .then(response => setInfo(response))
    })

    return (
        <>
            {Object.keys(info).map((item, i) => {
                return <p><b>{item}</b> : {info[item]}</p>
            })}
        </>
    )
}

export default Num;