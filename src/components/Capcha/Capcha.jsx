import React, { useState } from 'react'
import { load } from 'recaptcha-v3'
import { kluczWitryny } from '../keys'


const Capcha = ({ style }) => {


    async function asyncFunction() {
        const recaptcha = await load(`${kluczWitryny}`)
        const token = await recaptcha.execute('<action>')

        console.log(token) // Will also print the token
    }

    return (

        <div className="capcha"></div>

    )
}

export default Capcha