import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

const Form = () => {
    const [cat, setCat] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/'+e.target.cat.value+'/'+e.target.id.value);
    }

    useEffect(() => {
        fetch('https://swapi.dev/api/')
        .then(response => response.json())
        .then(response => setCat(response))
    }, [])

    return (
        <form action="/" onSubmit={(e) => submitHandler(e)}>
            <select name="cat">
                {Object.keys(cat).map((item) => {
                    return <option value={item}>{item}</option>
                })}
            </select>
            <input type="text" name="id"/>
            <input type="submit"/>
        </form>
    )
}

export default Form;