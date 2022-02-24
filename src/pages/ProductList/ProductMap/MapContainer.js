import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Overlay.css';

const { kakao } = window;

const MapContainer = ({ productInfos }) => {
  const location = useLocation();
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 10,
    };

    mapRef.current = new kakao.maps.Map(container, options);
  }, [location]);

  const mapRef = useRef();

  useEffect(() => {
    const overlayInfos = productInfos?.map(info => {
      return {
        title: info.name,
        lat: info.latitude,
        lng: info.longtitude,
        img: info.image_url[0],
        price: info.price,
        region: info.region,
        desc: info.description,
      };
    });

    overlayInfos.forEach(el => {
      let marker = new kakao.maps.Marker({
        map: mapRef.current,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });

      let content =
        '<div class="overlayWrap">' +
        `    <img class="overlayImg" src=${el.img}/>` +
        '    <div class="accommInfoWrap">' +
        `        <h1 class="accommName">${el.title}</h1>` +
        `        <p class="accommRegion">${el.region}</p>` +
        `        <p class="accommDesc">${el.desc}</p>` +
        `        <p class="accommPrice">${Number(
          el.price
        ).toLocaleString()}</p>` +
        '    </div>' +
        '    <div class="overlayArrow">' +
        '</div>';

      let position = new kakao.maps.LatLng(el.lat, el.lng);

      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        customOverlay.setMap(mapRef.current);
      });

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        setTimeout(function () {
          customOverlay.setMap();
        });
      });
    });
  }, [productInfos]);

  return (
    <div
      id="myMap"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default MapContainer;
