import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../../constants';
import {generalStyles, authStyles} from '../../styles/styles';
import FIcon from 'react-native-vector-icons/FontAwesome';
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import TrackPlayer from 'react-native-track-player';
import {useFocusEffect} from '@react-navigation/native';
import {togglePlay} from '../../redux/actions/actions';
import {loginApi} from '../../redux/services/authService';

export const Otp = ({route, navigation}) => {
  const dispatch = useDispatch();
  let otpInput = useRef(null);
  const [otp, setOtp] = useState('');
  const [warn, setWarn] = useState(false);
  const [error, setError] = useState(false);
  const {phone} = route.params;

  const isLoading = useSelector(state => state.authReducer.isLoading);

  const stopMusic = async () => {
    await TrackPlayer.stop();
  };

  useFocusEffect(() => {
    dispatch(togglePlay(false));
    stopMusic();
  });

  const clickHandler = async () => {
    const data = {
      mobilenumber: phone,
      otp: otp,
    };
    setWarn(false);
    if (otp.length === 4) {
      if (otp === '1234') {
        const result = await dispatch(loginApi(data));
        console.log({result});
        if (result.status === 200) {
          navigation.push('HomeScreen');
        }
      } else {
        setError(true);
      }
    } else {
      setWarn(true);
    }
  };

  return (
    <View style={[generalStyles.authcontainer, generalStyles.p10]}>
      {isLoading ? (
        <View
          style={{
            backgroundColor: colors.black,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 2,
            opacity: 0.9,
            justifyContent: 'center',
          }}>
          <ActivityIndicator animating size={'large'} />
        </View>
      ) : null}
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
            <OTPTextInput
              // eslint-disable-next-line no-unused-vars
              ref={e => (otpInput = e)}
              handleTextChange={text => setOtp(text)}
              textInputStyle={styles.boxStyle}
              offTintColor={'#e6e6e6'}
              tintColor={'#e6e6e6'}
            />
          </View>
          {warn ? (
            <View>
              <Text style={authStyles.warn}>OTP should be 4 digits long</Text>
            </View>
          ) : null}
        </View>
        <View style={generalStyles.p10}>
          <View>
            <Text style={authStyles.hint}>enter the OTP sent on {phone}</Text>
          </View>
          <TouchableOpacity onPress={clickHandler} style={authStyles.button}>
            <Text style={authStyles.label}>Verify</Text>
          </TouchableOpacity>
          {error ? (
            <View>
              <Text style={authStyles.warn}>Wrong OTP</Text>
            </View>
          ) : null}
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
  boxStyle: {
    color: '#fff',
  },
});
