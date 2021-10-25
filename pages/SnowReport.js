import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../components/styles';
import Webcams from '../components/Webcams'



const SnowReport = (props) => {
  console.log('snow report ' , props.snowReport)
  return (
    <View style={styles.snowPage}>
      <View style={styles.weatherWrapper}>
        <View style={styles.weatherDiv}>
          <Text style={styles.weatherTitle}>Today</Text>
          {/* <Text>{props.forecast.OneDay.skies.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}</Text> */}
          <Text style={{fontSize: 50, textAlign: 'center'}}>🌥</Text>
          <Text style={styles.temps}>{Math.round(props.forecast.TempHighF)} / {Math.round(props.forecast.TempLowF)} °F</Text>
        </View>
        <View style={styles.weatherDiv}>
          <Text style={styles.weatherTitle}>Current</Text>
          {/* <Text>{props.currentConditions.MidMountain.Skies}</Text> */}
          <Text style={{fontSize: 50, textAlign: 'center'}}>☀️</Text>
          <Text style={styles.temps}>{Math.round(props.currentConditions.MidMountain.TemperatureF)} °F</Text>
        </View>
      </View>
      <View style={styles.snowBaseRow}>
        <View styles={styles.cell}>
            <Text style={styles.areaTitle}>Base: {Math.round(props.snowReport.MidMountainArea.BaseIn)}"</Text>
        </View>
        <View>
            <Text style={styles.areaTitle}>Season: {Math.round(props.snowReport.SeasonTotalIn)}"</Text>
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
                {props.snowReport.MidMountainArea.SinceLiftsClosedIn}"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableItem}>
                {props.snowReport.MidMountainArea.Last24HoursIn}"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableItem}>
              {props.snowReport.MidMountainArea.Last48HoursIn}"
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.tableItem}>
              {props.snowReport.MidMountainArea.Last72HoursIn}"
              </Text>
            </View>
          </View>
      </View>

      <Webcams />

    </View>
  )
}


export default SnowReport;