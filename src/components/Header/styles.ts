import {StyleSheet} from 'react-native';
import {colors} from '../../config/Styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: colors.blue2,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 24,
    color: colors.cream,
    fontWeight: '400',
    marginLeft: 8,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
