export const weatherUrl = (cityName: string) => {
  return encodeURI(
    `https://api.weatherstack.com/current?access_key=075c2ef56d2612cc99d24ba73bf4d6fa&query=${cityName}`,
  );
};
