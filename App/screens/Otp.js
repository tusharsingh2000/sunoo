import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../constants';
import {generalStyles, authStyles} from '../styles/styles';
import FIcon from 'react-native-vector-icons/FontAwesome';
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/Entypo';

export const Otp = ({route, navigation}) => {
  let otpInput = useRef(null);
  const [otp, setOtp] = useState('');
  const [warn, setWarn] = useState(false);
  const [error, setError] = useState(false);
  const {phone} = route.params;

  const clickHandler = () => {
    setWarn(false);
    // if (otp.length === 0) {
    //   if (otp === '') {
    navigation.push('HomeScreen');
    //   } else {
    //     setError(true);
    //   }
    // } else {
    //   setWarn(true);
    // }
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
