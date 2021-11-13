import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

import styles from '../components/styles';
import Webcams from '../components/Webcams'



const SnowReport = () => {

    const [soliResponse, setSoliResponse] = useState({});
    const [forecastIcon, setForecastIcon] = useState("")
    const [currentWeatherIcon, setcurrentWeatherIcon] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios.get('https://alerts.quicktrax.com/feed?resortId=65&format=json')
      .then(response => response.json())
      .then(json => (
        console.log(json)
        //setSoliResponse(json)
      ))
        .catch(function (error) {
          console.log(error);
        });
    }, []);


  return (
    <View style={styles.snowPage}>
      {loading && <Text>Loading...</Text>}
      {soliResponse && (
        <>
          <View style={styles.weatherWrapper}>
          <View style={styles.weatherDiv}>
            <Text style={styles.weatherTitle}>Today</Text>
            {/* <Text>{forecast.OneDay.skies.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}</Text> */}
            <Text style={{fontSize: 50, textAlign: 'center'}}>{forecastIcon}</Text>
            <Text style={styles.temps}>{Math.round(soliResponse.Forecast.TempHighF)} / {Math.round(soliResponse.Forecast.TempLowF)} °F</Text>
          </View>
          <View style={styles.weatherDiv}>
            <Text style={styles.weatherTitle}>Current</Text>
            {/* <Text>{currentConditions.MidMountain.Skies}</Text> */}
            <Text style={{fontSize: 50, textAlign: 'center'}}>{currentWeatherIcon}</Text>
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