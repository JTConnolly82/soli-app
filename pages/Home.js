import React from 'react';
import { View, Text } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import styles from '../components/styles';


// Checkbox for is open
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}

// 'X' in circle for closed
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg> */}

//Todo: progress circle's progress will be number of lifts_open/total_lifts, runs_open/total_runs
//Todo: Need to find what the statuses are beyond 'closed for the season'...


const Home = (props) => {
  // console.log('--- mountain areas ---', props.mountainAreas)
  // let mtnAreas = props.mountainAreas.forEach(area => {
  //   if (area.Name != 'Nordic') {
  //     return (
  //       <View style={styles.areaRow} key={area.Activities.Name}>
  //         <Text style={styles.areaTitle}>{area.Activities.Name}</Text>
  //         <Text style={styles.areaStatus}>{area.Activities[0].Status}</Text>
  //       </View>)
  //   }
  // })

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <View style={styles.cell}> 
          <ProgressCircle style={{ height: 110 }} cornerRadius={4} backgroundColor={'#ddeaf9'} strokeWidth={12} progress={7 / 8} progressColor={'#d2af26'} />
          <View style={styles.totalLifts}>
            <Text style={styles.amount}>{7}</Text>
          </View>
          <Text style={styles.description}>Lifts</Text>
        </View>
        <View style={styles.cell}>
          <ProgressCircle style={{ height: 110 }} cornerRadius={4} backgroundColor={'#ddeaf9'} strokeWidth={12} progress={65 / 82} progressColor={'#d2af26'} />
          <View style={styles.totalRuns}>
            <Text style={styles.amount}>{65}</Text>
            <Text></Text>
          </View>
          <Text style={styles.description}>Runs</Text>
        </View>
      </View>
        {/* { mtnAreas } */}
      <Text style={{textAlign: 'center', color: '#b1b1b1', fontSize: 12}}>Updated: {props.lastResponseTime}</Text>
    </View>
  )
}

export default Home;

