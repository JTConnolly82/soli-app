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
    height: '80%',
  },
  snowPage: {
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
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 14,
    marginTop: 4,
    borderRadius: 8,
    backgroundColor: '#f5f5f5'
  },
  areaTitle: {
    fontSize: 22,
    color: '#3a3e6c'
  },
  areaStatus: {
    fontSize: 18,
    fontWeight: '400',
    color: '#56586c'
  },
  weatherWrapper: {
    marginTop: 8,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'row'
  },
  weatherDiv: {
    display: 'flex',
    padding: 30
  },
  weatherTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3a3e6c'
  },
  temps: {
    textAlign: 'center',
    fontSize: 22,
    color: '#47485b'
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
  snowBaseRow: {
    marginVertical: 16,
    width: '98%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    fontSize: 24,
    borderRadius: 6,
    backgroundColor: '#f4f4f4'
  },
  recentSnowTitle: {
    fontSize: 23,
    color: '#3a3e6c',
    marginBottom: 4,
    textAlign: 'center'
  },
  snowTotalsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '98%',
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  snowTotalsHeader: {
    display: 'flex',
    flexDirection: 'row'
  },
  snowTableRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerCellFirst: {
    backgroundColor: '#cdcdcd',
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'flex-end'
  },
  headerCell: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderBottomColor: '#d2af26'
  },
  tableCell: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 6,
    justifyContent: 'center'
  },
  tableItem: {
    fontSize: 20
  },
  tableHeaderItem: {
    fontSize: 18
  }
})

export default styles;