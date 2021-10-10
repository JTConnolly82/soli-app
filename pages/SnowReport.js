import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../components/styles';



const SnowReport = (props) => {
  //console.log(props.snowReport)
  return (
    <View style={styles.page}>
      <View style={styles.weatherWrapper}>
        <View style={styles.todaysWeather}>
          <Text>Today:</Text>
          <Text>{props.forecast.OneDay.skies}</Text>
          <Text>{props.forecast.TempHighF} degrees / {props.forecast.TempLowF}</Text>
        </View>
        <View style={styles.currentWeather}>
          <Text>Current:</Text>
          <Text>{props.currentConditions.MidMountain.Skies}</Text>
          <Text>{props.currentConditions.MidMountain.TemperatureF} degrees</Text>
        </View>
      </View>
      <View style={styles.snowSectionWrapper}>
        <View>
            <Text>Base: {props.snowReport.MidMountainArea.BaseIn}</Text>
        </View>
        <View>
            <Text>Season: {props.snowReport.SeasonTotalIn}</Text>
        </View>
      </View>
      <View style={styles.snowTotalsWrapper}>
        <View style={styles.snowTotalsHeader}>
          <View style={styles.headerCell}>
            <Text>
              After close
            </Text>
          </View>
          <View style={styles.headerCell}>
            <Text>
              24hr
            </Text>
          </View>
          <View style={styles.headerCell}>
            <Text>
              48hr
            </Text>
          </View>
          <View style={styles.headerCell}>
            <Text>
              72hr
            </Text>
          </View>
        </View>
          <View style={styles.snowTableRow}>
            <View style={styles.tableCell}>
              <Text>
                2"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text>
                0"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text>
                6"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text>
                9"
              </Text>
            </View>
          </View>
      </View>
    </View>
  )
}


export default SnowReport;