import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'


const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-around',
    height: '80%'
  },
  cell: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center'
  },
  row: {
    height: '35%',
    display: 'flex',
    flexDirection: 'row'
  },
  amount: {
    fontSize: 22,
    marginTop: 8,
    color: '#3f3f3f'
  },
  description: {
    fontSize: 28
  },
  textDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  areaRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginBottom: 2,
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 22,
    color: '#2b2b2b'
  },
  areaStatus: {
    fontSize: 18,
    color: '#373737'
  }
})

// Checkbox for is open
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}

// 'X' in circle for closed
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}

//Note: progress circle's progress will be number of lifts_open/total_lifts, runs_open/total_runs ...


const Home = (props) => {

  let mtnAreas = props.mountainAreas.map(area => {
    if (area.Name != 'Nordic') {
      return (
        <View style={styles.areaRow} key={area.Name}>
          <Text style={styles.title}>{area.Name}</Text>
          <Text style={styles.areaStatus}>{area.Activities[0].Status}</Text>
        </View>)
    }
  })

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <View style={styles.cell}> 
          <ProgressCircle style={{ height: 100 }} progress={0.1} progressColor={'#f4ce3c'} />
          <View style={styles.textDiv}>
            <Text style={styles.amount}>{3}/8</Text>
            <Text style={styles.description}>Lifts</Text>
          </View>
        </View>
        <View style={styles.cell}>
          <ProgressCircle style={{ height: 100 }} progress={0.5} progressColor={'#f4ce3c'} />
          <View style={styles.textDiv}>
            <Text style={styles.amount}>{3}/82</Text>
            <Text style={styles.description}>Runs</Text>
          </View>
        </View>
      </View>
        { mtnAreas }
      <Text style={{textAlign: 'center', color: '#b1b1b1', fontSize: 12}}>Updated: {props.lastResponseTime}</Text>
    </View>
  )
}

export default Home;

