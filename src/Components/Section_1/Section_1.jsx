import { useState } from 'react'
import './section1.css'
import Results from '../Results/Results'

export default function Section_1( props ) {



    return <div className="section1">
        <h1>Top Results</h1>
        <Results points={props.points} setSlot={props.setSlot} slot={props.slot}
        setPointName={props.setPointName}
        setPointPrice={props.setPointPrice}
        setPointImg={props.setPointImg}
        setPointBaseAddress={props.setPointBaseAddress}
        
        />

    </div>
}