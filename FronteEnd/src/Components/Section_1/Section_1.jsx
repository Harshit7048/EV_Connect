import './section1.css'

export default function Section_1({points=[]}){
    return <div className="section1">
        <div className="results">
 {points.map((ele,i)=> <div>
            {ele.pointName}
        </div>)}
        </div>
        
    </div>
}