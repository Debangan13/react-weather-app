import { DateTime } from "luxon";

const getWeatherData = async (infoType, searchParms) => {
	const url = new URL(import.meta.env.VITE_BASE_URL + "/" + infoType);
	// console.log(url, { ...searchParms });
	url.search = new URLSearchParams({ ...searchParms, appid: import.meta.env.VITE_API_KEY});
	// console.log(url);
	const response = await fetch(url);
	return response.json();
};

const formatCurrentWeather = (data) => {
	// console.log(data)
	const {
		coord: { lat, lon },
		main: { temp, feels_like, humidity, temp_max, temp_min },
		name,
		dt,
		timezone,
		sys: { country, sunrise, sunset },
		weather,
		wind: { speed },
	} = data;

	const { main: details, icon } = weather[0];

	return {
		lat,
		lon,
		temp,
		humidity,
		temp_max,
		temp_min,
		name,
		dt,
		country,
		sunrise,
		sunset,
		speed,
		details,
		icon,
		timezone,
		feels_like
	};
};

// const formatForecastWeather = (data) => {
// 	let { timezon, daily, hourly } = data;
// };

const getFormattedWeatherData = async (searchParms) => {
	const formattedCurrentWeather = await getWeatherData(
		"weather",
		searchParms
	).then(formatCurrentWeather);

	const { lat, lon } = formattedCurrentWeather;

	// const formattedForecastWeather = await getWeatherData("onecall", {
	// 	lat,
	// 	lon,
	// 	exclude: "current,minutely,alerts",
	// 	units: searchParms.units,
	// });

	return formattedCurrentWeather;
	// this is for testing purposes
};

const formateToLocalTime = (
	secs,
	zone,
	format = "cccc, dd LLLL y' | Local time: 'hh:mm a"
) =>  DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
	


const iconUrlFormCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;

export {formateToLocalTime,iconUrlFormCode}




