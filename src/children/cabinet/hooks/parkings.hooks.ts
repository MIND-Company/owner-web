import { ContentType, isCorrectResponse, useHttp } from '@ermolaev/mind-ui';
import { useAuthHttp } from '../../../hooks/auth-http.hook';
import { IParking, parkingModel } from '../models/parking.model';
import { IGetParkingsResponseDto } from '../dto/get-parkings-response.dto';

export const useParkings = () => {
  const http = useAuthHttp();

  return async (): Promise<IParking[]> => {
    return http<never, IGetParkingsResponseDto[]>({
      method: 'GET',
      url: `/api/owner-parks/`,
      headers: {
        contentType: ContentType.JSON,
      },
    }).then((response: IGetParkingsResponseDto[]) => {
      if (!isCorrectResponse(response)) {
        return null;
      }

      return response.map((dto) => {
        return parkingModel(
          dto.id,
          dto.description,
          {
            lat: parseFloat(dto.latitude),
            long: parseFloat(dto.longitude),
          },
          dto.address,
        );
      });
    });
  };
};
