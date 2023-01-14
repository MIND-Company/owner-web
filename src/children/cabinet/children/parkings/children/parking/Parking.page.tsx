import React, { FC } from 'react';
import { Button, Loader } from '@ermolaev/mind-ui';
import {
  DayOfWeek,
  IParkingDetailed,
} from '../../../../models/parking-detailed.model';
import { MiniMap } from '../../../../../../components/Maps/MiniMap/MiniMap.component';
import classes from './Parking.page.styles.module.css';

export interface IParkingPageProps {
  parking: IParkingDetailed | null;
  navigateToTransportView: () => void;
}

export const ParkingPage: FC<IParkingPageProps> = ({
  parking,
  navigateToTransportView,
}) => {
  if (!parking) {
    return <Loader />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h4>Общая информация</h4>
        <div>Название: {parking.name}</div>
        <div>Адрес: {parking.address}</div>
        <div>Количество мест: {parking.placeCount}</div>
        <div>Количество занятых мест: {parking.takenCount}</div>

        <h4>Правила паркинга</h4>
        {parking.priceList.map((price, index) => {
          if (price.dayOfWeek === DayOfWeek.ALL) {
            return (
              <>
                <div>Каждый день</div>
                <div>Бесплатный период: {price.freeTimeInMinutes} минут</div>
                <div>Тариф: {price.pricePerHour} за час</div>
              </>
            );
          }
        })}

        <Button title={'Просмотр ТС'} onClick={navigateToTransportView} />
      </div>
      <MiniMap
        lat={parking.coords.lat}
        long={parking.coords.long}
        width={'800px'}
        height={'500px'}
      />
    </div>
  );
};
