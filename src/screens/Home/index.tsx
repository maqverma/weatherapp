import React, {useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {Card, Button, TextInput} from '@components/index';
import {styles} from './styles';
import {handleWeatherServiceCall} from '../../services/ServiceCall';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '@constants/colors';

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
      if (currentWeatherData?.data?.current) {
        setWeatherData(currentWeatherData?.data);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const handleDisableCase = () => {
    return searchedCity === '';
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <LinearGradient
      colors={[
        Colors.gredients.top,
        Colors.gredients.center,
        Colors.gredients.bottom,
      ]}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <TextInput placeholder="Enter City" onChangeText={handleCitySearch} />
        <Button
          title="Get Weather"
          disabled={handleDisableCase()}
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
    </LinearGradient>
  );
};

export default Home;
