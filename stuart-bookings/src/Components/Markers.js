import { useState, useEffect } from "react";
/* global google */

const Markers = props => {
  const [pickUpMarker, setPickUpMarker] = useState(null);
  const [dropOffMarker, setDropOffMarker] = useState(null);
  useEffect(() => {
    const createPickUpMarker = () => {
      if (props.pos.pickUpObject) {
        const pickUpMark = new google.maps.Marker({
          position: {
            lat: parseFloat(props.pos.pickUpObject.latitude),
            lng: parseFloat(props.pos.pickUpObject.longitude)
          },
          map: props.pos.map
        });
        setPickUpMarker(pickUpMark);
      }
    };
    const createDropOffMarker = () => {
      if (props.pos.dropOffObject) {
        const dropOffMark = new google.maps.Marker({
          position: {
            lat: parseFloat(props.pos.dropOffObject.latitude),
            lng: parseFloat(props.pos.dropOffObject.longitude)
          },
          map: props.pos.map
        });
        setDropOffMarker(dropOffMark);
      }
    };
    createPickUpMarker();
    createDropOffMarker();
    if (pickUpMarker || dropOffMarker) {
      pickUpMarker.setMap(null);
      dropOffMarker.setMap(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return null;
};
export default Markers;
