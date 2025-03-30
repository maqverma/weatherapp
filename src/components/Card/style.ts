import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  cityTitleBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  titleFont: {
    fontSize: 20,
  },
  subTitleFont: {
    fontSize: 15,
  },
  fontWeightBold: {
    fontWeight: '600',
  },
  rowBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  weatherIconRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  observeBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 15,
  },
  weatherIconStyle: {
    width: 64,
    height: 64,
  },
});
