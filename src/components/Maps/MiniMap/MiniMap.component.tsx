import { Map, Placemark, YMaps } from 'react-yandex-maps';
import React, { FC } from 'react';
import classes from './MiniMap.styles.module.css';
import { Loader } from '@ermolaev/mind-ui';

export interface IMiniMapProps {
  lat: number;
  long: number;
  zoom?: number;
  width?: string;
  height?: string;
}

export const MiniMap: FC<IMiniMapProps> = ({
  lat,
  long,
  zoom = 15,
  width = '500px',
  height = '200px',
}) => {
  if (!lat || !long) {
    return <Loader />;
  }

  return (
    <YMaps>
      <div>
        <Map
          style={{
            width,
            height,
          }}
          className={classes.container}
          state={{
            center: [lat, long],
            zoom,
          }}
        >
          <Placemark geometry={[lat, long]} />
        </Map>
      </div>
    </YMaps>
  );
};
