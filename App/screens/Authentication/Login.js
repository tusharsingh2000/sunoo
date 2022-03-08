import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../constants';
import {generalStyles, authStyles} from '../../styles/styles';
import Icon from 'react-native-vector-icons/Entypo';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {togglePlay} from '../../redux/actions/actions';
import TrackPlayer from 'react-native-track-player';
import {useFocusEffect} from '@react-navigation/native';

export const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [warn, setWarn] = useState(false);

  const dispatch = useDispatch();

  const stopMusic = async () => {
    await TrackPlayer.stop();
  };

  useFocusEffect(() => {
    dispatch(togglePlay(false));
    stopMusic();
  });

  const clickHandler = () => {
    setWarn(false);
    if (phone.length === 10) {
      navigation.push('OtpScreen', {phone: phone});
    } else {
      setWarn(true);
    }
  };

  return (
    <View style={[generalStyles.authcontainer, generalStyles.p10]}>
      <View style={styles.background}>
        <FIcon
          name={'music'}
          style={styles.opacity}
          color={colors.darkBlue}
          size={400}
        />
      </View>
      <View style={styles.title}>
        <View style={styles.iconStyle}>
          <Icon name={'scribd'} color={colors.lightBlue} size={50} />
        </View>
        <View style={generalStyles.p10}>
          <Text style={authStyles.title}>Sunoo</Text>
        </View>
      </View>
      <View style={generalStyles.p10}>
        <View style={generalStyles.p10}>
          <View>
            <TextInput
              keyboardType="number-pad"
              style={authStyles.inputBox}
              placeholderTextColor={colors.lightBlue}
              placeholder="Enter phone number"
              onChangeText={val => setPhone(val)}
              maxLength={10}
              value={phone}
            />
          </View>
          {warn ? (
            <View>
              <Text style={authStyles.warn}>
                phone number should be 10 digits long
              </Text>
            </View>
          ) : null}
        </View>
        <View style={generalStyles.p10}>
          <TouchableOpacity onPress={clickHandler} style={authStyles.button}>
            <Text style={authStyles.label}>Sign In</Text>
          </TouchableOpacity>
          <View>
            <Text style={authStyles.hint}>
              you'll recieve an OTP on this number
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 10,
    padding: 5,
  },
  background: {
    zIndex: -1,
    position: 'absolute',
  },
  opacity: {opacity: 0.1},
});
