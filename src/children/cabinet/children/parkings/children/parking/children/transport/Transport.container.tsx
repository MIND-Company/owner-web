import {
  ICar,
  IParkingDetailed,
  IPrice,
} from '../../../../../../models/parking-detailed.model';
import React, { useEffect, useState } from 'react';
import { useParking } from '../../hooks/parking.hook';
import { useParams } from 'react-router-dom';
import { Button, useUpgradedState } from '@ermolaev/mind-ui';
import classes from './Transport.styles.module.css';
import { useTimeFormatter } from '../../../../../../../../hooks/time-formatter.hook';

export const TransportContainer = () => {
  const parkingApi = useParking();
  const param = useParams();
  const parking = useUpgradedState<any | null>(null);
  const [pParkings, setPParkings] = useState([]);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    if (param.id) {
      parkingApi(parseInt(param.id)).then((parkingModel: IParkingDetailed) => {
        const a: any[] = [];
        const b: any[] = [];

        parkingModel.cars.forEach((v) => {
          if (v.checkoutTime) {
            b.push(v);
            return;
          }

          a.push(v);
        });

        parking.setValue(a as any);
        setPParkings(b as any);
      });
    }
  }, []);

  if (parking) {
    return (
      <div className={classes.container}>
        {parking.value?.map((el: any, index: number) => {
          return (
            <div className={classes.item} key={index}>
              <div>Номер ТС: {el.plate}</div>
              <div>Время въезда: {useTimeFormatter(el.entryTime)}</div>
            </div>
          );
        })}
        <Button
          title={`${isShow ? 'Скрыть' : 'Показать'}  прошедшие паркинги`}
          onClick={() => setShow(!isShow)}
        />
        {isShow &&
          pParkings.map((el: any, index) => {
            return (
              <div className={classes.item} key={index}>
                <div>Номер ТС: {el.plate}</div>
                <div>Время въезда: {useTimeFormatter(el.entryTime)}</div>
                <div>Время выезда: {useTimeFormatter(el.entryTime)}</div>
                <div>Сумма: {el.calculatedPrice}₽</div>
              </div>
            );
          })}
      </div>
    );
  }

  return <div></div>;
};
