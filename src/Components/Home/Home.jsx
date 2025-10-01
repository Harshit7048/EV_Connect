import { useState } from "react";
import BookSlot from "../BookSlot/BookSlot";
import Filter from "../Filter/Filter";
import Map from "../Map/Map";
import Section_1 from "../Section_1/Section_1";
import Section_2 from "../Section_2/Section_2";


const results = [
    {
        pointName: " point 1",
        pointPrice: "15/unit"
    },
    {
        pointName: " point 2",
        pointPrice: "15/unit"
    },
    {
        pointName: " point 3",
        pointPrice: "15/unit"
    }
    ,
    {
        pointName: " point 4",
        pointPrice: "15/unit"
    },
    {
        pointName: " point 5",
        pointPrice: "15/unit"
    }
    , {
        pointName: " point 6",
        pointPrice: "15/unit"
    }
];


export default function Home() {
  const [slot , setSlot] = useState(false);

  //// setting states for point info
  const [pointName , setPointName] = useState("");
  const [pointPrice , setPointPrice] = useState(0);
  const [pointImg , setPointImg] = useState("")


    return <div className="home">
        <Filter />
        <Map />
        <Section_1 points={results} slot={slot} setSlot={setSlot}
        setPointName={setPointName}
        setPointPrice={setPointPrice}
        setPointImg={setPointImg}
        >
        

        </Section_1>
        {slot==true?<BookSlot
         pointName={pointName}
         pointPrice={pointPrice}
         pointImg={pointImg}
         setSlot={setSlot}
         />:<></>}

         <Section_2/>
    </div>
}