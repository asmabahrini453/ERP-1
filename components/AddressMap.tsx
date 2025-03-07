"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface AddressMapProps {
  address: string
  codePostal?: string
  gouvernorat?: string
  pays?: string
  height?: string
  className?: string
  // Add a fullAddress prop that can be used directly
  fullAddress?: string
}

const AddressMap = ({
  address,
  codePostal = "",
  gouvernorat = "",
  pays = "Tunisie",
  height = "16rem",
  className = "",
  fullAddress,
}: AddressMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)

  // Create a formatted address from the individual components or use the provided fullAddress
  const getFormattedAddress = () => {
    if (fullAddress) return fullAddress

    // Combine all address parts, filtering out empty ones
    const addressParts = [address, gouvernorat, codePostal, pays].filter(Boolean)
    return addressParts.join(", ")
  }

  // Initialize map when component mounts
  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map if not already done
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([36.8065, 10.1815], 6)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "",
      }).addTo(mapInstanceRef.current)
    }

    // Get the formatted address
    const searchAddress = getFormattedAddress()
    if (!searchAddress) return

    // Create a custom icon for the marker
    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
      shadowSize: [41, 41],
    })

    // Function to geocode the address and update the map
    const geocodeAddress = async () => {
      try {
        // Ensure we're searching in Tunisia by adding the country code
        const searchQuery = `${searchAddress}${searchAddress.includes("Tunisie") ? "" : ", Tunisie"}`
        const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&countrycodes=tn&limit=1&_=${Date.now()}`

        console.log("Searching for address:", searchQuery)

        const response = await fetch(apiUrl)
        const data = await response.json()

        console.log("Geocoding response:", data)

        if (data.length > 0 && mapInstanceRef.current) {
          const { lat, lon } = data[0]
          const latNum = Number.parseFloat(lat)
          const lonNum = Number.parseFloat(lon)

          console.log("Found coordinates:", latNum, lonNum)

          // Set view to new coordinates with appropriate zoom level
          mapInstanceRef.current.setView([latNum, lonNum], 16)

          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.remove()
          }

          // Add new marker with popup
          markerRef.current = L.marker([latNum, lonNum], { icon: customIcon })
            .addTo(mapInstanceRef.current)
            .bindPopup(searchAddress)
            .openPopup()
        } else {
          console.warn("No location found for address:", searchAddress)
        }
      } catch (error) {
        console.error("Error geocoding address:", error)
      }
    }

    // Add a delay to avoid too many requests while typing
    const timeoutId = setTimeout(() => {
      geocodeAddress()
    }, 800)

    return () => clearTimeout(timeoutId)
  }, [address, codePostal, gouvernorat, pays, fullAddress])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

export default AddressMap

