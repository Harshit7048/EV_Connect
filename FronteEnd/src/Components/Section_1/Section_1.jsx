import { useState } from 'react'
import './section1.css'

export default function Section_1({ points = [] }) {

    const [bookOpen , setBookOpen] = useState(true);

    const bookCheck = (i)=>{
      

        if(bookOpen== true) setBookOpen(false)
        
        console.log(i);
        
    }





    return <div className="section1">
        <h1>Top Results</h1>
        <div className='sec1-inside'>

       
        <div className="results">
            {points.map((ele, i) => <div className='result_final'>
                <div className="res-img">
                    <img src="https://imgmediagumlet.lbb.in/media/2024/08/66c5bb71ddd68e741be35541_1724234609317.jpg" alt="" />
                </div>
                <div className="res-info">

                <h3>{ele.pointName}</h3>
                <p>{ele.pointPrice} | wait Expected 5Min</p>
                <div className="res-btns">
                    <button className='res-btn'>Directions</button>
                    <button style={{marginLeft:"10px"}} className='res-btn' onClick={()=> bookCheck(i)}>Book SLot</button>
                </div>
                </div>
            </div>)}

        </div>
        <div className="book">
            {bookOpen==true? <div>hello this is true</div> : <div>this is false as hell</div>}
        </div>
        </div>

    </div>
}