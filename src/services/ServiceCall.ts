import {weatherUrl} from '../utils';
import {apiService} from './APIService';
export const handleWeatherServiceCall = async (cityname: string) => {
  return await apiService.get(weatherUrl(cityname));
};
