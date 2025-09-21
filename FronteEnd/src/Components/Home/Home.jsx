import Filter from "../Filter/Filter";
import Map from "../Map/Map";
import Section_1 from "../Section_1/Section_1";


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
    return <div className="home">
        <Filter />
        <Map />
        <Section_1 points={results}>

        </Section_1>
    </div>
}