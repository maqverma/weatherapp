export const weatherUrl = (cityName: string) => {
  return encodeURI(
    `https://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${cityName}`,
  );
};
