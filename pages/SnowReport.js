import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import styles from '../components/styles';
import Webcams from '../components/Webcams';



const SnowReport = () => {

  const [isLoading, setLoading] = useState(true);
  const [soliResponse, setSoliResponse] = useState([]);
  const [forecastIcon, setForecastIcon] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');
  
  useEffect(() => {
    async function getInfo() {
      let response = await fetch("https://alerts.quicktrax.com/feed?resortId=65&format=json");
      let json = await response.json();
      setSoliResponse(json);
      let forecast = selectIcon(json.Forecast.OneDay.conditions)
      let current = selectIcon(json.CurrentConditions.MidMountain.Conditions)
      setForecastIcon(forecast);
      setCurrentIcon(current);
      setLoading(false);
    }

    getInfo()
  }, []);

  const selectIcon = (forecastTime) => {
    switch(forecastTime) {
      case 'sunny':
        return '☀️'
        break
      case 'cloudy':
        return '☁️'
        break
      case 'partlycloudy':
        return '⛅️'
        break
      case 'mostly_sunny':
        return '🌤'
        break
      case 'mostly_cloudy':
        return '🌥'
        break
      case 'mostlycloudy':
        return '🌥'
        break
      case 'snow':
        return '🌨'
        break
      case 'clear':
        return '🌙'
        break
      case 'rain':
        return '🌧'
        break
      default:
        return forecastTime
    }
  }


  return (
    <View style={styles.snowPage}>
      {isLoading ? <ActivityIndicator /> : (
        <>
          <View style={styles.weatherWrapper}>
          <View style={styles.weatherDiv}>
            <Text style={styles.weatherTitle}>Today</Text>
            {/* <Text>{soliResponse.Forecast.OneDay.conditions}</Text> */}
            <Text style={{fontSize: 50, textAlign: 'center'}}>{forecastIcon ? forecastIcon : '⛄️'}</Text>
            <Text style={styles.temps}>{Math.round(soliResponse.Forecast.TempHighF)} / {Math.round(soliResponse.Forecast.TempLowF)} °F</Text>
          </View>
          <View style={styles.weatherDiv}>
            <Text style={styles.weatherTitle}>Current</Text>
            {/* <Text>{soliResponse.CurrentConditions.MidMountain.Conditions}</Text> */}
            <Text style={{fontSize: 50, textAlign: 'center'}}>{currentIcon ? currentIcon : '⛄️'}</Text>
            <Text style={styles.temps}>{Math.round(soliResponse.CurrentConditions.MidMountain.TemperatureF)} °F</Text>
          </View>
        </View>
        <View style={styles.snowBaseRow}>
          <View styles={styles.cell}>
              <Text style={styles.areaTitle}>Base: {Math.round(soliResponse.SnowReport.MidMountainArea.BaseIn)}"</Text>
          </View>
          <View>
              <Text style={styles.areaTitle}>Season: {Math.round(soliResponse.SnowReport.SeasonTotalIn)}"</Text>
          </View>
        </View>
        <View style={styles.snowTotalsWrapper}>
          <Text style={styles.recentSnowTitle}>Recent Snow</Text>
          <View style={styles.snowTotalsHeader}>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeaderItem}>
                After close
              </Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeaderItem}>
                24hr
              </Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeaderItem}>
                48hr
              </Text>
            </View>
            <View style={styles.headerCell}>
              <Text style={styles.tableHeaderItem}>
                72hr
              </Text>
            </View>
          </View>
            <View style={styles.snowTableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableItem}>
                  {soliResponse.SnowReport.MidMountainArea.SinceLiftsClosedIn}"
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableItem}>
                  {soliResponse.SnowReport.MidMountainArea.Last24HoursIn}"
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableItem}>
                  {soliResponse.SnowReport.MidMountainArea.Last48HoursIn}"
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableItem}>
                  {soliResponse.SnowReport.MidMountainArea.Last72HoursIn}"
                </Text>
              </View>
            </View>
          </View>
          <Webcams />
        </>
      )}
    </View> 
  )
}


export default SnowReport;