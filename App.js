
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, ScrollView } from 'react-native';
import { Router, Route, Link } from './react-router'

import Home from './pages/Home'
import SnowReport from './pages/SnowReport'
import styles from './components/styles';

const App = () => {

  return(
    <Router>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />}
        > */}
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 44, paddingBottom: 12, paddingRight: 12}}>🦅</Text>
          <Text style={styles.title}>Solitude</Text>
        </View>
        <Route exact path="/" component={ ()=> <Home /> } />
        <Route path="/snow-report" component={ ()=> <SnowReport /> } />
        <View style={styles.footerWrapper}>
          <View style={styles.footer}>
              <Link to="/">
                <Text style={styles.linkText}>Openings</Text>
              </Link>
              <Link to="/snow-report">
                <Text style={styles.linkText}>Snow Report</Text>
              </Link>
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  </Router>
  )
};

export default App;

// let soliResponse = (
//   {
//     "Name": "Solitude",
//     "LastUpdate": "2021-10-06T18:52:42-0600",
//     "OperatingStatus": "--",
//     "SnowReport": {
//         "LastUpdate": "2021-04-25T05:41:55-0600",
//         "BaseConditions": "Variable Conditions",
//         "Report": "Solitude has 2 of 8 lifts scheduled to open serving 16 runs.",
//         "AdditionalText": "--",
//         "News": "--",
//         "Alert": "--",
//         "StormRadar": "--",
//         "StormRadarButtonText": "--",
//         "SafetyReport": "--",
//         "LiftNotification": "--",
//         "LastUpdatedLift": {
//             "Moonbeam Express": "closed_for_season"
//         },
//         "OpenTerrainAcres": "--",
//         "TotalTerrainAcres": "1200.0",
//         "StormTotalIn": "0.0",
//         "StormTotalCM": "0.0",
//         "AnnualAverageSnowfallIn": "500.0",
//         "AnnualAverageSnowfallCm": "1270.0",
//         "SnowBaseRangeIn": "66 - 66",
//         "SnowBaseRangeCM": "167 - 167",
//         "SeasonTotalIn": "359.0",
//         "SeasonTotalCm": "911.86",
//         "SecondarySeasonTotalIn": "359.0",
//         "SecondarySeasonTotalCm": "911.86",
//         "OpenTerrainHectares": "0.0",
//         "TotalTerrainHectares": "486.0",
//         "TotalOpenTrails": 1,
//         "TotalTrails": 82,
//         "GroomedTrails": 1,
//         "TotalOpenLifts": 0,
//         "TotalLifts": 8,
//         "TotalOpenActivities": 0,
//         "TotalActivities": 7,
//         "TotalOpenParks": 0,
//         "TotalParks": 0,
//         "OpenNightParks": 0,
//         "TotalNightParks": 0,
//         "TotalParkFeatures": 0,
//         "OpenNightTrails": 0,
//         "TotalNightTrails": 0,
//         "BaseArea": {
//             "SinceLiftsClosedIn": "--",
//             "BaseIn": "--",
//             "BaseCm": "--",
//             "Last24HoursIn": "--",
//             "Last48HoursIn": "--",
//             "Last72HoursIn": "--",
//             "Last7DaysIn": "--",
//             "SinceLiftsClosedCm": "--",
//             "Last24HoursCm": "--",
//             "Last48HoursCm": "--",
//             "Last72HoursCm": "--",
//             "Last7DaysCm": "--"
//         },
//         "MidMountainArea": {
//             "SinceLiftsClosedIn": "0.0",
//             "BaseIn": "66.0",
//             "BaseCm": "167.64",
//             "Last24HoursIn": "0.0",
//             "Last48HoursIn": "0.0",
//             "Last72HoursIn": "0.0",
//             "Last7DaysIn": "--",
//             "SinceLiftsClosedCm": "0.0",
//             "Last24HoursCm": "0.0",
//             "Last48HoursCm": "0.0",
//             "Last72HoursCm": "0.0",
//             "Last7DaysCm": "0.0"
//         },
//         "SummitArea": {
//             "SinceLiftsClosedIn": "--",
//             "BaseIn": "--",
//             "BaseCm": "--",
//             "Last24HoursIn": "--",
//             "Last48HoursIn": "--",
//             "Last72HoursIn": "--",
//             "Last7DaysIn": "--",
//             "SinceLiftsClosedCm": "--",
//             "Last24HoursCm": "--",
//             "Last48HoursCm": "--",
//             "Last72HoursCm": "--",
//             "Last7DaysCm": "--"
//         },
//         "GroomingActive": "true",
//         "SnowMakingActive": "false"
//     },
//     "MountainAreas": [
//         {
//             "Name": "Moonbeam Area",
//             "LastUpdate": "2021-04-25T15:58:09-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 7,
//             "Trails": [
//                 {
//                     "Name": "Dean's Dash",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Easy",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Easy Street",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Easy",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Home Run",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Last Run",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Little Dollie",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Easy",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Same Street",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Easy",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Tude-Dudes",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Easy",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [
//                 {
//                     "Name": "Link",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:05-0600",
//                     "LiftType": "Double",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 },
//                 {
//                     "Name": "Moonbeam Express",
//                     "MountainAreaName": "Moonbeam Area",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-25T15:58:09-0600",
//                     "LiftType": "High-Speed Quad",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 }
//             ],
//             "Activities": [
//                 {
//                     "Name": "Moonbeam Area",
//                     "Status": "Open",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T15:57:48-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Eagle Ridge",
//             "LastUpdate": "2021-04-25T16:30:10-0600",
//             "OpenTrailsCount": 1,
//             "TotalTrailsCount": 28,
//             "Trails": [
//                 {
//                     "Name": "Abba's Alley",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Blue Spruce",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Challenger",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T16:30:10-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Concord",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Diamond Lane",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Eagle Ridge",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Fleet Street",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Event",
//                     "StatusEnglish": "closed_for_event",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Fluid Drive",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Gary's Glade",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Grumble Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Grumble Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Hal's Hollow",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Inspiration Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Inspiration Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Main Street",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Olympia",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Paradise",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Paradise Lost",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Post Card",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Rhapsody",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Rumble Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Rumble Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Serenity Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Serenity Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Shady Lane",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Stumble Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Stumble Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Sundancer Lower",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Sundancer Upper",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Sunshine Bowl",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "TBD",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Vertigo",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Wall Street",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Wanderer",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [
//                 {
//                     "Name": "Eagle Express",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:05-0600",
//                     "LiftType": "High-Speed Quad",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 },
//                 {
//                     "Name": "Powderhorn II",
//                     "MountainAreaName": "Eagle Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:06-0600",
//                     "LiftType": "Quad Chair",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 }
//             ],
//             "Activities": [
//                 {
//                     "Name": "Eagle Ridge",
//                     "Status": "Open",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T15:57:48-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Solitude Canyon",
//             "LastUpdate": "2021-04-25T15:58:09-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 26,
//             "Trails": [
//                 {
//                     "Name": "Alta Bird",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Back Door",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Broadway",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Cathedral Cirque",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Corner Chute",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Dynamite",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Front Door",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Headwall Forest",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Liberty",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Middle Slope",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Milk Run",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Mine",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "North Star",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Parachute",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Polaris",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Powderhorn Cirque",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Roller Coaster",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Scree Slope",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Sensation",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Shaft",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "SolBright",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "South Star",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Summit Access East",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Summit Access West",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T15:57:30-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Timberline",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Zip-A-Dee",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [
//                 {
//                     "Name": "Apex Express",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-25T15:58:09-0600",
//                     "LiftType": "High-Speed Quad",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 },
//                 {
//                     "Name": "Summit Express",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:05-0600",
//                     "LiftType": "High-Speed Quad",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 },
//                 {
//                     "Name": "Sunrise",
//                     "MountainAreaName": "Solitude Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:05-0600",
//                     "LiftType": "Triple Chair",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "4:00 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 }
//             ],
//             "Activities": [
//                 {
//                     "Name": "Solitude Canyon",
//                     "Status": "Open",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T15:57:48-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Honeycomb Canyon",
//             "LastUpdate": "2021-04-18T16:07:18-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 14,
//             "Trails": [
//                 {
//                     "Name": "Black Bess",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Black Forest",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Boundary Chutes",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Buckeye Junior",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "Top",
//                     "Glades": "Yes",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Crystal Point",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Here Be Dragons",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Honeycomb Return",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Memorial Chutes",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Navarone",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "No Man's Land",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Prince of Wales",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Queen Bess",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Voltaire",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Woodlawn",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [
//                 {
//                     "Name": "Honeycomb Return",
//                     "MountainAreaName": "Honeycomb Canyon",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "FirstTracks": "No",
//                     "UpdateDate": "2021-04-18T15:59:05-0600",
//                     "LiftType": "Quad Chair",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:30 PM"
//                         }
//                     },
//                     "WaitTime": "--",
//                     "WaitTimeString": "--",
//                     "WaitTimeStatus": "--"
//                 }
//             ],
//             "Activities": [
//                 {
//                     "Name": "Honeycomb Canyon",
//                     "Status": "Closed",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T05:41:37-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Evergreen Peak",
//             "LastUpdate": "2021-04-18T16:07:17-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 4,
//             "Trails": [
//                 {
//                     "Name": "Barrett's Glade",
//                     "MountainAreaName": "Evergreen Peak",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Dead Tree",
//                     "MountainAreaName": "Evergreen Peak",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Evening Star",
//                     "MountainAreaName": "Evergreen Peak",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Difficult",
//                     "TrailIcon": "BlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Evergreen Chutes",
//                     "MountainAreaName": "Evergreen Peak",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [],
//             "Activities": [
//                 {
//                     "Name": "Evergreen Peak",
//                     "Status": "Closed",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T05:41:37-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Highway to Heaven",
//             "LastUpdate": "2021-04-18T16:07:18-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 1,
//             "Trails": [
//                 {
//                     "Name": "Highway to Heaven",
//                     "MountainAreaName": "Highway to Heaven",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "Yes",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [],
//             "Activities": [
//                 {
//                     "Name": "Highway to Heaven",
//                     "Status": "Closed",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T05:41:37-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "3:00 PM"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Fantasy Ridge",
//             "LastUpdate": "2021-04-18T16:07:18-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 2,
//             "Trails": [
//                 {
//                     "Name": "Black Bess Chutes",
//                     "MountainAreaName": "Fantasy Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Honeycomb Chutes",
//                     "MountainAreaName": "Fantasy Ridge",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Expert",
//                     "TrailIcon": "DoubleBlackDiamond",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "Yes",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [],
//             "Activities": [
//                 {
//                     "Name": "Fantasy Ridge",
//                     "Status": "Closed",
//                     "StatusEnglish": "closed_for_season",
//                     "LinkUrl": "--",
//                     "UpdateDate": "2021-04-25T05:41:37-0600",
//                     "Hours": {
//                         "Sunday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Monday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Tuesday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Wednesday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Thursday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Friday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         },
//                         "Saturday": {
//                             "Open": "9:00 AM",
//                             "Close": "2:00 PM  (check-in with patrol, avalanche transceiver, shovel, and probe required)"
//                         }
//                     }
//                 }
//             ]
//         },
//         {
//             "Name": "Nordic",
//             "LastUpdate": "2021-04-18T16:07:18-0600",
//             "OpenTrailsCount": 0,
//             "TotalTrailsCount": 0,
//             "Trails": [
//                 {
//                     "Name": "Big Redman",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "Yes",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Bypass",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "Yes",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Cabin Fever",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "Yes",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Cabin Loop",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Snowshoe",
//                     "TrailIcon": "Snowshoe",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Camp Loop",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "Yes",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Cornucopia",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Creek Bottom",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Snowshoe",
//                     "TrailIcon": "Snowshoe",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Evergreen",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Lake Flat",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Little Redman",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Mid Redman",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "New Sensation",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Intermediate",
//                     "TrailIcon": "BlueSquare",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Redman Loop",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Snowshoe",
//                     "TrailIcon": "Snowshoe",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Silver Lake",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenBlackCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Silver Lake Loop",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Snowshoe",
//                     "TrailIcon": "Snowshoe",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Solitude Street",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Easier",
//                     "TrailIcon": "GreenBlackCircle",
//                     "SnowMaking": "No",
//                     "Grooming": "Yes",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 },
//                 {
//                     "Name": "Solitude Trail",
//                     "MountainAreaName": "Nordic",
//                     "Status": "Closed for Season",
//                     "StatusEnglish": "closed_for_season",
//                     "UpdateDate": "2021-04-25T05:41:45-0600",
//                     "Difficulty": "Snowshoe",
//                     "TrailIcon": "Snowshoe",
//                     "SnowMaking": "No",
//                     "Grooming": "No",
//                     "NightSkiing": "No",
//                     "Moguls": "No",
//                     "Glades": "No",
//                     "Touring": "No",
//                     "Nordic": "No",
//                     "TerrainParkOnRun": "No",
//                     "RunOfTheDay": "No",
//                     "TrailSummary": "--",
//                     "TerrainParkFeatures": 0
//                 }
//             ],
//             "Lifts": [],
//             "Activities": []
//         }
//     ],
//     "Roads": [],
//     "CurrentConditions": {
//         "Base": {
//             "FeedSavedTime": "--",
//             "PressureIN": "--",
//             "PressureMB": "--",
//             "TemperatureF": "--",
//             "TemperatureC": "--",
//             "Humidity": "--",
//             "DewPointF": "--",
//             "DewPointC": "--",
//             "WindDirection": "--",
//             "WindStrengthMph": "--",
//             "WindStrengthKph": "--",
//             "WindGustsMph": "--",
//             "WindGustsKph": "--",
//             "WindChillF": "--",
//             "WindChillC": "--",
//             "Skies": "--",
//             "TemperatureHighF": "--",
//             "TemperatureHighC": "--",
//             "TemperatureLowF": "--",
//             "TemperatureLowC": "--",
//             "UvIndex": "--",
//             "Conditions": "--",
//             "Icon": "--",
//             "Default": "--"
//         },
//         "MidMountain": {
//             "FeedSavedTime": "2021-10-06T18:52:38-0600",
//             "PressureIN": "--",
//             "PressureMB": "--",
//             "TemperatureF": "39.0",
//             "TemperatureC": "4.0",
//             "Humidity": "--",
//             "DewPointF": "--",
//             "DewPointC": "--",
//             "WindDirection": "--",
//             "WindStrengthMph": "--",
//             "WindStrengthKph": "--",
//             "WindGustsMph": "--",
//             "WindGustsKph": "--",
//             "WindChillF": "39.0",
//             "WindChillC": "3.9",
//             "Skies": "Sunny",
//             "TemperatureHighF": "0.0",
//             "TemperatureHighC": "0.0",
//             "TemperatureLowF": "41.0",
//             "TemperatureLowC": "5.0",
//             "UvIndex": "--",
//             "Conditions": "sunny",
//             "Icon": "skc.svg",
//             "Default": "true"
//         },
//         "Summit": {
//             "FeedSavedTime": "--",
//             "PressureIN": "--",
//             "PressureMB": "--",
//             "TemperatureF": "--",
//             "TemperatureC": "--",
//             "Humidity": "--",
//             "DewPointF": "--",
//             "DewPointC": "--",
//             "WindDirection": "--",
//             "WindStrengthMph": "--",
//             "WindStrengthKph": "--",
//             "WindGustsMph": "--",
//             "WindGustsKph": "--",
//             "WindChillF": "--",
//             "WindChillC": "--",
//             "Skies": "--",
//             "TemperatureHighF": "--",
//             "TemperatureHighC": "--",
//             "TemperatureLowF": "--",
//             "TemperatureLowC": "--",
//             "UvIndex": "--",
//             "Conditions": "--",
//             "Icon": "--",
//             "Default": "--"
//         }
//     },
//     "Forecast": {
//         "TempHighF": "0.0",
//         "TempLowF": "41.0",
//         "TempHighC": "0.0",
//         "TempLowC": "5.0",
//         "ForecastedSnowIn": "9999.0",
//         "ForecastedSnowCm": "9999.0",
//         "OneDay": {
//             "date": "2021-10-06",
//             "temp_high_f": "0.0",
//             "temp_low_f": "41.0",
//             "temp_high_c": "0.0",
//             "temp_low_c": "5.0",
//             "forecasted_snow_day_in": "-9999",
//             "forecasted_snow_day_cm": "-9999",
//             "forecasted_snow_night_in": "0",
//             "forecasted_snow_night_cm": "0",
//             "forecasted_snow_in": 9999,
//             "forecasted_snow_cm": 9999,
//             "skies": ". Mostly Cloudy",
//             "conditions": "unknown",
//             "icon": "na.svg",
//             "avewind": {
//                 "mph": "0mph",
//                 "kph": "0m/s",
//                 "dir": null
//             }
//         },
//         "TwoDay": {
//             "date": "2021-10-07",
//             "temp_high_f": "51.0",
//             "temp_low_f": "40.0",
//             "temp_high_c": "10.0",
//             "temp_low_c": "4.0",
//             "forecasted_snow_day_in": "0",
//             "forecasted_snow_day_cm": "0",
//             "forecasted_snow_night_in": "0",
//             "forecasted_snow_night_cm": "0",
//             "forecasted_snow_in": 0,
//             "forecasted_snow_cm": 0,
//             "skies": "Mostly Cloudy. Mostly Cloudy",
//             "conditions": "mostly_cloudy",
//             "icon": "few.svg",
//             "avewind": {
//                 "mph": "15mph",
//                 "kph": "5m/s",
//                 "dir": "SSW"
//             }
//         },
//         "ThreeDay": {
//             "date": "2021-10-08",
//             "temp_high_f": "45.0",
//             "temp_low_f": "34.0",
//             "temp_high_c": "7.0",
//             "temp_low_c": "1.0",
//             "forecasted_snow_day_in": "0",
//             "forecasted_snow_day_cm": "0",
//             "forecasted_snow_night_in": "0",
//             "forecasted_snow_night_cm": "0",
//             "forecasted_snow_in": 0,
//             "forecasted_snow_cm": 0,
//             "skies": "Rain. Rain",
//             "conditions": "rain",
//             "icon": "rain.svg",
//             "avewind": {
//                 "mph": "15mph",
//                 "kph": "6m/s",
//                 "dir": "SSW"
//             }
//         },
//         "FourDay": {
//             "date": "2021-10-09",
//             "temp_high_f": "34.0",
//             "temp_low_f": "32.0",
//             "temp_high_c": "1.0",
//             "temp_low_c": "0.0",
//             "forecasted_snow_day_in": "0",
//             "forecasted_snow_day_cm": "0",
//             "forecasted_snow_night_in": "0",
//             "forecasted_snow_night_cm": "0",
//             "forecasted_snow_in": 0,
//             "forecasted_snow_cm": 0,
//             "skies": "Rain/Snow. Mostly Cloudy",
//             "conditions": "rain_snow",
//             "icon": "snow.svg",
//             "avewind": {
//                 "mph": "10mph",
//                 "kph": "3m/s",
//                 "dir": "W"
//             }
//         },
//         "FiveDay": {
//             "date": "2021-10-10",
//             "temp_high_f": "39.0",
//             "temp_low_f": "34.0",
//             "temp_high_c": "4.0",
//             "temp_low_c": "1.0",
//             "forecasted_snow_day_in": "0",
//             "forecasted_snow_day_cm": "0",
//             "forecasted_snow_night_in": "0-1",
//             "forecasted_snow_night_cm": "0-3",
//             "forecasted_snow_in": 1,
//             "forecasted_snow_cm": 3,
//             "skies": "Partly Cloudy. Mostly Clear",
//             "conditions": "partly_cloudy",
//             "icon": "few.svg",
//             "avewind": {
//                 "mph": "5mph",
//                 "kph": "2m/s",
//                 "dir": "WNW"
//             }
//         }
//     },
//     "ParkingLots": [
//         {
//             "Name": "Employee ",
//             "NumberOfSpots": 200
//         }
//     ],
//     "LayoutOptions": {
//         "soldOut": "false",
//         "PrimaryWeather": "toggle_base",
//         "SecondaryWeather": [
//             "toggle_overnight",
//             "toggle_24",
//             "toggle_48",
//             "season_total"
//         ],
//         "Weather": [
//             "toggle_overnight",
//             "toggle_24",
//             "toggle_48",
//             "season_total"
//         ],
//         "SnowfallChart": "false",
//         "Disclaimer": "--"
//     }
// }
// )