export const randomLatLng = (maxLat: number, maxLng: number, minLat: number, minLng: number) => ({
  lat: minLat + (maxLat - minLat) * Math.random(),
  lng: minLng + (maxLng - minLng) * Math.random(),
})
