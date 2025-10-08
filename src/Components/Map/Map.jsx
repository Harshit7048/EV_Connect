import { useEffect, useRef, useState } from 'react'
import leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import './map.css'

export default function Map({ points, slot = '', setSlot, setPointName, setPointPrice, setPointImg, setPointBaseAddress }) {
    const mapRef = useRef(null)
    const markerRef = useRef(null)
    const circleRef = useRef(null)
    const routingRef = useRef(null)
    const [userLocation, setUserLocation] = useState(null)

    useEffect(() => {
        // ✅ Initialize map
        const map = leaflet.map(mapRef.current).setView([29.74812853, 78.14084244], 13)

        leaflet
            .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors',
            })
            .addTo(map)

        mapRef.current = map

        // ✅ Watch current location
        navigator.geolocation.watchPosition(
            (pos) => {
                const { latitude, longitude, accuracy } = pos.coords

                if (markerRef.current) map.removeLayer(markerRef.current)
                if (circleRef.current) map.removeLayer(circleRef.current)

                const marker = leaflet.marker([latitude, longitude])
                const circle = leaflet.circle([latitude, longitude], { radius: accuracy })

                marker.addTo(map)
                circle.addTo(map)

                markerRef.current = marker
                circleRef.current = circle

                setUserLocation([latitude, longitude])
                map.fitBounds(circle.getBounds())
            },
            (err) => console.error(err),
            { enableHighAccuracy: true }
        )

        // ✅ Add all registered point markers
        points.forEach((p) => {
            if (p.lat && p.long) {
                leaflet.marker([p.lat, p.long]).addTo(map).bindPopup(p.pointName || 'Point')
            }
        })

        return () => map.remove()
    }, [points])

    // ✅ Move showRoute outside useEffect
    const showRoute = (destination) => {
        const map = mapRef.current
        if (!map || !userLocation) {
            alert('User location not found yet!')
            return
        }

        // Remove old route if any
        if (routingRef.current) {
            map.removeControl(routingRef.current)
        }

        // ✅ Add routing
        routingRef.current = leaflet.Routing.control({
            waypoints: [
                leaflet.latLng(userLocation[0], userLocation[1]),
                leaflet.latLng(destination.lat, destination.long),
            ],
            routeWhileDragging: false,
            show: false,
            lineOptions: { styles: [{ color: '#007bff', weight: 5 }] },
            createMarker: (i, wp) => {
                if (i === 0) return leaflet.marker(wp.latLng).bindPopup('Start')
                if (i === 1) return leaflet.marker(wp.latLng).bindPopup(destination.pointName || 'Destination')
            },
        }).addTo(map)
    }

    return (
        <div className="map-cont">
            <h1>Points Near You</h1>
            <div ref={mapRef} id="map"></div>

            <div className="results">
                {points.map((ele, i) => (
                    <div className="result_final" key={i}>
                        <div className="res-upr-info">
                            <div className="res-img">
                                <img
                                    src="https://imgmediagumlet.lbb.in/media/2024/08/66c5bb71ddd68e741be35541_1724234609317.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="res-info">
                                <h3>{ele.pointName}</h3>
                                <p>{ele.pointPrice || 'wait till update'}</p>
                                <p>{ele.pointBaseAddress}</p>
                            </div>
                        </div>

                        <div className="res-btns">
                            <button className="res-btn" onClick={() => showRoute(ele)}>
                                Directions
                            </button>
                            <button
                                style={{ marginLeft: '10px' }}
                                className="res-btn"
                                onClick={() => {
                                    setSlot(true)
                                    setPointName(ele.pointName)
                                    setPointPrice(ele.pointPrice)
                                    setPointImg(
                                        'https://imgmediagumlet.lbb.in/media/2024/08/66c5bb71ddd68e741be35541_1724234609317.jpg'
                                    )
                                    setPointBaseAddress(ele.pointBaseAddress)
                                }}
                            >
                                Book Slot
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
