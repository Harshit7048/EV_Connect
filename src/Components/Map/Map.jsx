import { useCallback, useEffect, useRef } from 'react'
import './map.css'
import leaflet, { circle, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';


export default function Map({ points }) {

    const mapRef = useRef(null);
    const markerRef = useRef(null)
    const circleRef = useRef(null)



    useEffect(() => {


        // mapRef.current = leaflet.map('map').setView([51.505, -0.09], 13);
        const map = leaflet.map(mapRef.current).setView([29.74812853, 78.14084244], 13);

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);



        /// asking current location
        navigator.geolocation.watchPosition((pros) => {
            const long = pros.coords.longitude;
            const lat = pros.coords.latitude;
            const accuracy = pros.coords.accuracy;

            console.log(lat, long);

            if (markerRef.current) map.removeLayer(markerRef.current)
            if (circleRef.current) map.removeLayer(circleRef.current)

            let marker = leaflet.marker([lat, long]);
            let circle = leaflet.circle([lat, long], { radius: accuracy });

            marker.addTo(map);
            circle.addTo(map);


            markerRef.current = marker;
            circleRef.current = circle;

            map.fitBounds(circle.getBounds())


        }, (err) => console.log(err))

        const markers = points.map((p) => {
            if (p.lat && p.long) {
                leaflet.marker([p.lat, p.long]).addTo(map)
            }
        })

        // const group = leaflet.featureGroup(markers)

        // setTimeout(() => {
        //     map.fitBounds(group.getBounds(), { padding: [50, 50] })
        // }, 100)






        return () => map.remove();

    }, [points])









    return <div className='map-cont'>
        <h1>Points Near You</h1>
        <div ref={mapRef} id="map"></div>

    </div>



}