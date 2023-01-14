import {
  ICar,
  IParkingDetailed,
  IPrice,
} from '../../../../../../models/parking-detailed.model';
import React, { useEffect } from 'react';
import { FC } from 'react';
import { useParking } from '../../hooks/parking.hook';
import { useParams } from 'react-router-dom';
import { useUpgradedState } from '@ermolaev/mind-ui';
import classes from './Transport.styles.module.css';

export const TransportContainer = () => {
  const parkingApi = useParking();
  const param = useParams();
  const parking = useUpgradedState<IParkingDetailed | null>(null);

  useEffect(() => {
    if (param.id) {
      parkingApi(parseInt(param.id)).then((parkingModel: IParkingDetailed) => {
        parking.setValue(parkingModel);
      });
    }
  }, []);

  if (parking) {
    return (
      <div className={classes.container}>
        {parking.value?.cars.map((el, index) => {
          return (
            <div className={classes.item} key={index}>
              <div>Номер ТС: {el.plate}</div>
              <div>Время въезда: {new Date(el.entryTime).toLocaleString()}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return <div></div>;
};
