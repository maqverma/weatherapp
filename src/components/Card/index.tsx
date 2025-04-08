import React from 'react';
import {Image, Text, View} from 'react-native';
import {ICardProps} from './types';
import {styles} from './style';

const Card = ({
  cityName,
  currentTemp,
  condition,
  weatherIconUrl,
  observedTime,
}: ICardProps) => (
  <View style={styles.container}>
    <View style={styles.cityTitleBox}>
      <Text style={styles.titleFont}>City: </Text>
      <Text style={[styles.titleFont, styles.fontWeightBold]}>{cityName}</Text>
    </View>
    <View style={styles.rowBox}>
      <View>
        <Text style={[styles.subTitleFont, styles.fontWeightBold]}>
          Current Temprature:{' '}
        </Text>
        <Text>{currentTemp}</Text>
      </View>
      <View>
        <Text style={[styles.subTitleFont, styles.fontWeightBold]}>
          Weather Condition:{' '}
        </Text>
        <Text>{condition}</Text>
      </View>
    </View>

    <View style={styles.weatherIconRow}>
      <Image source={{uri: weatherIconUrl}} style={styles.weatherIconStyle} />
    </View>
    <View style={styles.observeBox}>
      <Text style={[styles.titleFont, styles.fontWeightBold]}>
        Observeved Time:{' '}
      </Text>
      <Text style={styles.observeBoxTime}>{observedTime}</Text>
    </View>
  </View>
);
export default Card;
