import React, { FC } from 'react';
import { IParking } from '../../models/parking.model';
import { Button } from '@ermolaev/mind-ui';
import { YMaps, Map } from 'react-yandex-maps';
import classes from './Parkings.page.styles.module.css';
import { MiniMap } from '../../../../components/Maps/MiniMap/MiniMap.component';

export interface IParkingPageProps {
  parkings: IParking[];
  onClick: (id: number) => void;
}

export const ParkingsPage: FC<IParkingPageProps> = ({ parkings, onClick }) => {
  return (
    <div className={classes.parkingsContainer}>
      {parkings.map((el, index) => {
        return (
          <div
            className={classes.parkingContainer}
            key={index}
            onClick={() => onClick(el.id)}
          >
            <div>
              <div>
                <b>{el.name}</b>
              </div>
              <div>{el.address}</div>
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <MiniMap lat={el.coords.lat} long={el.coords.long} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
