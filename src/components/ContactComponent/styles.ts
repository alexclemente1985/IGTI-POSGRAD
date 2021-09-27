import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
  contact: {
    fontSize: 20,
    marginLeft: 8,
    fontWeight: '400',
    fontFamily: 'JosefinSans-Regular',
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginRight: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default styles;
