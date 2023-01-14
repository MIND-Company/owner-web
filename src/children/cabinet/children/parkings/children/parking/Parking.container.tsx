import { useParking } from './hooks/parking.hook';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUpgradedState } from '@ermolaev/mind-ui';
import { ParkingPage } from './Parking.page';
import { IParkingDetailed } from '../../../../models/parking-detailed.model';

export const ParkingContainer = () => {
  const parkingApi = useParking();
  const location = useLocation();
  const parking = useUpgradedState<IParkingDetailed | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.id) {
      parkingApi(location.state.id).then((parkingModel: IParkingDetailed) => {
        parking.setValue(parkingModel);
      });
    }
  }, []);

  return (
    <ParkingPage
      parking={parking.value}
      navigateToTransportView={() =>
        navigate(`/cabinet/parkings/${parking.value?.id}/transport`)
      }
    />
  );
};
