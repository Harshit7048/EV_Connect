import './bookslot.css'

export default function BookSlot({setSlot,pointName='',pointPrice , pointImg}){
    return <div className="book-slot">

        <div className="book-box">
            <div className="cut-slot"
            onClick={()=>{
                setSlot(false)
            }}
            >X</div>
            <h2>Book Your Slot</h2>

            <div className="point-info">
                <div className="p-img">
                    <img src={pointImg} alt="" />
                </div>
            </div>
             

        </div>
    </div>
}