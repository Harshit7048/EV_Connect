import './result.css'


export default function Results({points =[], slot='' , setSlot , setPointName,setPointPrice , setPointImg,setPointBaseAddress}) {



    return <div className="results">
        {points.map((ele, i) => <div className='result_final'>
            <div className="res-upr-info">
<div className="res-img">
                <img src="https://imgmediagumlet.lbb.in/media/2024/08/66c5bb71ddd68e741be35541_1724234609317.jpg" alt="" />
            </div>
            <div className="res-info">

                <h3>{ele.pointName}</h3>
                <p>{ele.pointPrice || "wait till update"}  </p>
                <p>{ele.pointBaseAddress}</p>
                
            </div>
            </div>
             
             <div className="res-btns">
                    <button className='res-btn'>Directions</button>
                    <button style={{ marginLeft: "10px" }} className='res-btn'

                        onClick={() => {setSlot(true)
                            console.log(slot);
                            setPointName(ele.pointName)
                            setPointPrice(ele.pointPrice)
                            setPointImg("https://imgmediagumlet.lbb.in/media/2024/08/66c5bb71ddd68e741be35541_1724234609317.jpg")
                            setPointBaseAddress(ele.pointBaseAddress)
                        }
                    }

                    >Book SLot</button>
                </div>
        </div>)}

    </div>
}