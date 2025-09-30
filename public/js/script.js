const refreshBtn = document.querySelector('#loc_btn')
const map = document.querySelector('#map_gps')

refreshBtn.addEventListener('click', async () => {
    try {
        const res = await fetch('/raw_loc')
        const loc = await res.json()
        let { lat,lon } = loc

        minLon = lon - 0.0005
        minLat = lat - 0.0005
        maxLon = lon + 0.0005
        maxLat = lat + 0.0005

        console.log(lat, lon, minLon, minLat, maxLon, maxLat)

        map.setAttribute('src', `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${lat},${lon}`)
    } catch (error) {
        console.log('Error fetching location:', error)
    }
})