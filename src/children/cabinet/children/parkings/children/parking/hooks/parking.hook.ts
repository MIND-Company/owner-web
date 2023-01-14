import { ContentType, isCorrectResponse } from '@ermolaev/mind-ui';
import { useAuthHttp } from '../../../../../../../hooks/auth-http.hook';
import { IParking, parkingModel } from '../../../../../models/parking.model';
import { IGetParkingsResponseDto } from '../../../../../dto/get-parkings-response.dto';
import { toParkingDetailedMapper } from '../../../../../mappers/toParkingDetailed.mapper';
import { IGetParkingResponseDto } from '../../../../../dto/get-parking-response.dto';
import { IParkingDetailed } from '../../../../../models/parking-detailed.model';

export const useParking = () => {
  const http = useAuthHttp();

  return async (id: number): Promise<IParkingDetailed> => {
    return http<never, IGetParkingResponseDto>({
      method: 'GET',
      url: `/api/owner-parks/${id}`,
      headers: {
        contentType: ContentType.JSON,
      },
    }).then((response: IGetParkingResponseDto) => {
      if (!isCorrectResponse(response)) {
        return null;
      }

      return toParkingDetailedMapper(response);
    });
  };
};
