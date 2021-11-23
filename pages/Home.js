import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, FlatList } from 'react-native';
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

const Home = () => {

  const [isLoading, setLoading] = useState(true);
  const [soliResponse, setSoliResponse] = useState([]);

  const getInfo = async () => {
     try {
      const response = await fetch("https://alerts.quicktrax.com/feed?resortId=65&format=json");
      const json = await response.json();
      setSoliResponse(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    getInfo();
  }, []);

  return (
      <View style={styles.page}>
      {isLoading ? <ActivityIndicator /> : (
        <>
        <View style={styles.row}>
          <View style={styles.cell}> 
            <ProgressCircle style={{ height: 110 }} cornerRadius={4} backgroundColor={'#ddeaf9'} strokeWidth={12} progress={soliResponse.SnowReport.TotalOpenTrails == 0 ? .5 / 82 : soliResponse.SnowReport.TotalOpenLifts / soliResponse.SnowReport.TotalLifts} progressColor={'#d2af26'} />
            <View style={styles.totalLifts}>
              <Text style={styles.amount}>{soliResponse.SnowReport.TotalOpenLifts}/<Text style={{fontSize: '21px'}}>{soliResponse.SnowReport.TotalLifts}</Text></Text>
            </View>
            <Text style={styles.description}>Lifts</Text>
          </View>
          <View style={styles.cell}>
            <ProgressCircle style={{ height: 110 }} cornerRadius={4} backgroundColor={'#ddeaf9'} strokeWidth={12} progress={soliResponse.SnowReport.TotalOpenTrails == 0 ? .5 / 82 : soliResponse.SnowReport.TotalOpenTrails / soliResponse.SnowReport.TotalTrails} progressColor={'#d2af26'} />
            <View style={styles.totalRuns}>
              <Text style={styles.amount}>{soliResponse.SnowReport.TotalOpenTrails}/<Text style={{fontSize: '21px'}}>{soliResponse.SnowReport.TotalTrails}</Text></Text>
              <Text></Text>
            </View>
            <Text style={styles.description}>Runs</Text>
          </View>
        </View>
        <View>
          <FlatList
              data={soliResponse.MountainAreas}
              keyExtractor={(item) => item.Name}
              renderItem={({item}) => (
                
                <View style={styles.areaRow}>
                  <Text style={styles.areaTitle}>{item.Name}</Text>
                  <Text style={styles.areaStatus}>{item.OpenTrailsCount > 0 ? 'Open' : 'Closed'}</Text>
                </View>
              )}
          />
        </View>
        <Text style={{textAlign: 'center', color: '#b1b1b1', fontSize: 12}}>Updated: {soliResponse.LastUpdate}</Text>
        </>
        )}
      </View>
  )
}

export default Home;

