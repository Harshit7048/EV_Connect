import { useState } from "react";
import BookSlot from "../BookSlot/BookSlot";
import Filter from "../Filter/Filter";
import Map from "../Map/Map";
import Section_1 from "../Section_1/Section_1";
import Section_2 from "../Section_2/Section_2";
import Footer from "../Footer/Footer";


const results = [
    {


        "pointName": " point 1",
        "pointPrice": "15/unit",
        "lat": 28.752180, "long": 77.143120,
        "pointOwnerName": "xyz",
        "pointOwnerDP": "https://i.pinimg.com/474x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg",
        "pointBaseAddress": "xyz colony , 23 street , yadav nagar",
        "pointRatings": "4.5/5",
        "cafe": "No",
        "cafeImg": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cafeRatings": "5/5",
        "cafeMenu": "https://img.freepik.com/free-vector/engraving-hand-drawn-rustic-restaurant-menu-template_23-2148953893.jpg?semt=ais_hybrid&w=740&q=80",
        "EstimateWatingTime": "5min"
    },
    {
        "pointName": " point 2",
        "pointPrice": "15/unit",
        "lat": 28.746950, "long": 77.147320,
        "pointOwnerName": "xyz",
        "pointOwnerDP": "https://i.pinimg.com/474x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg",
        "pointBaseAddress": "xyz colony , 23 street , yadav nagar",
        "pointRatings": "4.5/5",
        "cafe": "No",
        "cafeImg": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cafeRatings": "5/5",
        "cafeMenu": "https://img.freepik.com/free-vector/engraving-hand-drawn-rustic-restaurant-menu-template_23-2148953893.jpg?semt=ais_hybrid&w=740&q=80",
        "EstimateWatingTime": "5min"
    },
    {
        "pointName": " point 3",
        "pointPrice": "15/unit",
        "lat": 28.744720, "long": 77.138950,
        "pointOwnerName": "xyz",
        "pointOwnerDP": "https://i.pinimg.com/474x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg",
        "pointBaseAddress": "xyz colony , 23 street , yadav nagar",
        "pointRatings": "4.5/5",
        "cafe": "No",
        "cafeImg": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cafeRatings": "5/5",
        "cafeMenu": "https://img.freepik.com/free-vector/engraving-hand-drawn-rustic-restaurant-menu-template_23-2148953893.jpg?semt=ais_hybrid&w=740&q=80",
        "EstimateWatingTime": "5min"
    }
    ,
    {
        "pointName": " point 4",
        "pointPrice": "15/unit",
        "lat": 28.751110, "long": 77.136870,
        "pointOwnerName": "xyz",
        "pointOwnerDP": "https://i.pinimg.com/474x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg",
        "pointBaseAddress": "xyz colony , 23 street , yadav nagar",
        "pointRatings": "4.5/5",
        "cafe": "No",
        "cafeImg": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cafeRatings": "5/5",
        "cafeMenu": "https://img.freepik.com/free-vector/engraving-hand-drawn-rustic-restaurant-menu-template_23-2148953893.jpg?semt=ais_hybrid&w=740&q=80",
        "EstimateWatingTime": "5min"
    },
    {
        "pointName": " point 5",
        "pointPrice": "15/unit",
        "lat": 28.747520, "long": 77.142420,
        "pointOwnerName": "xyz",
        "pointOwnerDP": "https://i.pinimg.com/474x/cc/46/ed/cc46ed6fb4d49a3e08e1d4f496087607.jpg",
        "pointBaseAddress": "xyz colony , 23 street , yadav nagar",
        "pointRatings": "4.5/5",
        "cafe": "No",
        "cafeImg": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "cafeRatings": "5/5",
        "cafeMenu": "https://img.freepik.com/free-vector/engraving-hand-drawn-rustic-restaurant-menu-template_23-2148953893.jpg?semt=ais_hybrid&w=740&q=80",
        "EstimateWatingTime": "5min"
    }
];


export default function Home() {
    const [slot, setSlot] = useState(false);

    //// setting states for point info
    const [pointName, setPointName] = useState("");
    const [pointPrice, setPointPrice] = useState(0);
    const [pointImg, setPointImg] = useState("")
    const [pointBaseAddress, setPointBaseAddress] = useState("")


    return <div className="home">

        <Map points={results} />
        <Section_1 points={results} slot={slot} setSlot={setSlot}
            setPointName={setPointName}
            setPointPrice={setPointPrice}
            setPointImg={setPointImg}
            setPointBaseAddress={setPointBaseAddress}
        >


        </Section_1>
        {slot == true ? <BookSlot
            pointName={pointName}
            pointPrice={pointPrice}
            pointImg={pointImg}
            setSlot={setSlot}
            pointBaseAddress={pointBaseAddress}
        /> : <></>}

        <Section_2 />
        <Footer />
    </div>
}