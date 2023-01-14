import React, { useEffect } from 'react';
import { ParkingsPage } from './Parkings.page';
import { useParkings } from '../../hooks/parkings.hooks';
import { IParking } from '../../models/parking.model';
import { useUpgradedState } from '@ermolaev/mind-ui';
import { useNavigate } from 'react-router-dom';

export const ParkingsContainer = () => {
  const parkingsApi = useParkings();
  const parkings = useUpgradedState<IParking[]>([]);
  const navigate = useNavigate();

  const navigateToParking = (id: number) => {
    navigate('./' + id, { state: { id } });
  };

  useEffect(() => {
    parkingsApi().then((p: IParking[]) => {
      parkings.setValue(p);
    });
  }, []);

  return <ParkingsPage onClick={navigateToParking} parkings={parkings.value} />;
};
