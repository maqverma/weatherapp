import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Card, Button, TextInput} from '@components/index';
import {styles} from './styles';
import {handleWeatherServiceCall} from '../../services/ServiceCall';

const Home = () => {
  const [searchedCity, setSearchedCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCitySearch = (cityName: string) => {
    setSearchedCity(cityName);
  };

  const handleSearchEvent = async () => {
    setWeatherData(null);
    setLoading(true);
    try {
      const currentWeatherData: any = await handleWeatherServiceCall(
        searchedCity,
      );
      console.log('currentWeatherData', currentWeatherData);
      if (currentWeatherData?.data?.current) {
        setWeatherData(currentWeatherData?.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  console.log('searchedCity', weatherData);
  useEffect(() => {}, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter City" onChangeText={handleCitySearch} />
      <Button
        title="Get Weather"
        disabled={searchedCity === ''}
        onPress={handleSearchEvent}
      />
      {weatherData ? (
        <Card
          cityName={weatherData?.location.name}
          currentTemp={weatherData?.current.temperature}
          condition={weatherData?.current?.weather_descriptions[0]}
          weatherIconUrl={weatherData?.current?.weather_icons[0]}
          observedTime={weatherData?.current.observation_time}
        />
      ) : (
        <View style={styles.noRecord}>
          <Text>No Record Found</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
