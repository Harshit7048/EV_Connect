import { useCallback, useEffect, useRef } from 'react'
import './map.css'
import leaflet, { circle, map } from 'leaflet'
import 'leaflet/dist/leaflet.css';


export default function Map() {

    const mapRef = useRef()



    useEffect(() => {
        /// asking current location
        navigator.geolocation.watchPosition(success);
        function success(pros) {
            const long = pros.coords.longitude;
            const lat = pros.coords.latitude;
            const accuracy = pros.coords.accuracy;

            leaflet.marker([lat, long]).addTo(map);
            let circel = leaflet.circle([lat, long], { radius: accuracy }).addTo(map)
            map.fitBounds(circel.getBounds())



        }




        // mapRef.current = leaflet.map('map').setView([51.505, -0.09], 13);
        const map = leaflet.map(mapRef.current).setView([51.505, -0.09], 13);

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);


        return () => map.remove();

    }, [])






    return <div className='map-cont'>
        <div ref={mapRef} id="map"></div>

    </div>



}