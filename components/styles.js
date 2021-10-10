import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#173963',
    color: '#1F2937',
    position: 'relative'
  },
  scrollView: {
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#f4ce3c',
    paddingBottom: 10
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8
  },
  footerWrapper: {
    display: 'flex',
    height: '10%'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#173963',
    paddingTop: 6,
  },
  linkText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  },
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: '80%'
  },
  cell: {
    width: '49%',
    display: 'flex',
    justifyContent: 'center', 
    borderRadius: 6,
    padding: 4,
    paddingTop: 10,
    backgroundColor: '#f5f5f5'
  },
  row: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '98%'
  },
  totalLifts: {
    position: 'absolute',
    top: '34%',
    left: '48%',
  },
  totalRuns: {
    position: 'absolute',
    top: '34%',
    left: '44%',
  },
  amount: {
    fontSize: 30,
    color: '#50515c'
  },
  description: {
    marginTop: 8,
    fontSize: 24,
    textAlign: 'center',
    color: '#3a3e6c'
  },
  areaRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginTop: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 22,
    color: '#3a3e6c'
  },
  areaStatus: {
    fontSize: 18,
    fontWeight: '400',
    color: '#56586c'
  },
  weatherWrapper: {
    marginTop: 24,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  currentWeather: {

  },
  todaysWeather: {

  },
  snowSectionWrapper: {
    marginTop: 24,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  snowTotalsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 400
  },
  snowTotalsHeader: {
    display: 'flex',
    flexDirection: 'row'
  },
  snowTableRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  headerCellFirst: {
    backgroundColor: '#cdcdcd',
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'center'
  },
  headerCell: {
    backgroundColor: '#cdcdcd',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 6,
    justifyContent: 'center'
  },
  tableCell: {
    backgroundColor: '#e9e9e9',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 6,
    justifyContent: 'center'
  },
})

export default styles;