import { getPlacesData } from "@/api/travelAdvisorAPI";
import React, { useEffect, useState } from "react";

const useSetup = () => {
  const [places, setPlaces] = useState("");

  const [coords, setCoords] = useState({
    lat: 48.856614,
    lng: 2.3522219,
  });

  /*****************************
   * CORNER POSITION IN ON MAP *
   *****************************/
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        (latitude || latitude) && setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    const data = await getPlacesData();
    setPlaces(data);
  };

  return {
    setCoords,
    setBounds,
    places,
    coords,
    bounds,
  };
};

export default useSetup;
