import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { apis_naver } from '../../../axios/apis';

const Mapping = () => {


    const target = useQuery(["getDetails"]).data.location.address;
    
    const [scaleControl, setScaleControl] = useState(true);
    const navermaps = useNavermaps();

    let defaultLng = '';
    let defaultLat = '';
    const [locate, setLocate] = useState({ x: defaultLat, y: defaultLng });

    useEffect(() => {
        navermaps.Service.geocode({
            address: target
        }, (status, response) => {
            if (status !== navermaps.Service.Status.OK) {
                return alert('Something wrong!');
            }

            var result = response.result, // 검색 결과의 컨테이너
                items = result.items; // 검색 결과의 배열
            defaultLat = items[0].point.x;
            defaultLng = items[0].point.y;
            setLocate({
                x : defaultLat,
                y : defaultLng,
            })
        });
    }, []);


    return (
        <MapDiv style={{ width: '100%', height: '400px' }}>
            {locate.y
                ? <NaverMap
                    defaultCenter={new navermaps.LatLng(locate.y, locate.x)}
                    defaultZoom={15}
                    zoomControl={scaleControl}
                    mapTypeControl={true}
                >
                    <Marker
                        defaultPosition={new navermaps.LatLng(locate.y, locate.x)}
                    />
                </NaverMap>
                : null}
        </MapDiv>
    );
}

export default Mapping