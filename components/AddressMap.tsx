import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface AddressMapProps {
  address: string;
  codePostal?: string;
  gouvernorat?: string;
  pays?: string;
  height?: string;
  className?: string;
}

const AddressMap = ({
  address,
  codePostal = "",
  gouvernorat = "Tunisie",
  pays = "Tunisie",
  height = "16rem",
  className = "",
}: AddressMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const [mapKey, setMapKey] = useState(0); 

  // Force re-render when address inputs change
  useEffect(() => {
    setMapKey(prev => prev + 1);
  }, [address, codePostal, gouvernorat, pays]);

  // Initialize and update map
  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map if not already done
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([36.8065, 10.1815], 6);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "",
      }).addTo(mapInstanceRef.current);
    }

    // Don't proceed if there's no meaningful address data
    if (!address && !gouvernorat) return;

    const fullAddress = `${address || ""}, ${codePostal ? codePostal + ", " : ""}${gouvernorat || ""}, ${pays}`;
    console.log("Updating map with address:", fullAddress);

    const fetchCoordinates = async () => {
      try {
        // Add a timestamp to prevent caching
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress)}&_=${Date.now()}`
        );
        
        const data = await response.json();
        console.log("Geocoding response:", data);

        if (data && data.length > 0 && mapInstanceRef.current) {
          const { lat, lon } = data[0];
          const latNum = parseFloat(lat);
          const lonNum = parseFloat(lon);

          console.log("Found coordinates:", latNum, lonNum);

          // Set view to new coordinates
          mapInstanceRef.current.setView([latNum, lonNum], 15);

          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.remove();
          }

          // Add new marker
          markerRef.current = L.marker([latNum, lonNum], {
            icon: L.icon({
              iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
            }),
          })
            .addTo(mapInstanceRef.current)
            .bindPopup(fullAddress)
            .openPopup();
        } else {
          console.log("No coordinates found for address:", fullAddress);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    // Add a delay to avoid too many requests while typing
    const timeoutId = setTimeout(() => {
      fetchCoordinates();
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [address, codePostal, gouvernorat, pays, mapKey]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);


    return (
        <div className={`relative ${className}`} style={{ height }}>
          <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
        </div>
    
      
  );
};

export default AddressMap;