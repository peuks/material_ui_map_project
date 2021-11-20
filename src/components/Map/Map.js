// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab/Rating';

// import mapStyles from '../../mapStyles';
// import useStyles from './styles.js';

// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//   const matches = useMediaQuery('(min-width:600px)');
//   const classes = useStyles();

//   return (
//     <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
//         defaultCenter={coords}
//         center={coords}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
//         onChange={(e) => {
//           setCoords({ lat: e.center.lat, lng: e.center.lng });
//           setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
//         }}
//         onChildClick={(child) => setChildClicked(child)}
//       >
//         {places.length && places.map((place, i) => (
//           <div
//             className={classes.markerContainer}
//             lat={Number(place.latitude)}
//             lng={Number(place.longitude)}
//             key={i}
//           >
//             {!matches
//               ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
//               : (
//                 <Paper elevation={3} className={classes.paper}>
//                   <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
//                   <img
//                     className={classes.pointer}
//                     src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
//                   />
//                   <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
//                 </Paper>
//               )}
//           </div>
//         ))}
//         {weatherData?.list?.length && weatherData.list.map((data, i) => (
//           <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
//             <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
//           </div>
//         ))}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;

import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles.js";
import mapStyles from "@/mapStyles.js";
import { usePosition } from "use-position";

const Map = ({ setCoords, setBounds, coords }) => {
  const isMobile = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // personal api key
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        }}
        // Default position
        defaultCenter={{
          lat: 48.856614,
          lng: 2.3522219,
        }}
        // CurrentPosition
        center={coords}
        defaultZoom={14}
        // Top Right Left Bottom
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        // When We Change the Map
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // When I calick on a restaurant on the map
        onChildClick={(child) => {
          // import mapStyles from "."
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
