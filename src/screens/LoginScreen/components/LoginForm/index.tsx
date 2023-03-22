import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CustomButton} from '../../../../components/CustomButton';

import {FormInput} from '../../../../components/FormInput';
import {dw, isValidObjectField, showError} from '../../../../helpers/functions';
import {theme} from '../../../../theme';

const w = Dimensions.get('screen').width;

const isValidEmail = (email: string) => {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  return regex.test(email);
};

const updateError = (
  err: string,
  stateUpdater: React.Dispatch<React.SetStateAction<string>>,
) => {
  stateUpdater(err);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

export const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    showError(error);
  }, [error]);

  const handleChangeText = (value: string, fieldName: string) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidObjectField(userInfo)) {
      return updateError('Required all fields!', setError);
    }
    if (!isValidEmail(userInfo.email))
      return updateError('Invalid email!', setError);
    if (!userInfo.password.trim() || userInfo.password.length < 8)
      return updateError('Password error', setError);
    return true;
  };

  const handleSubmit = () => {
    if (isValidForm()) {
      console.log(userInfo);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <FormInput
          label="Email"
          value={userInfo.email}
          autoCapitalize="none"
          onChangeText={value => handleChangeText(value, 'email')}
        />
        <FormInput
          label="Password"
          value={userInfo.password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={value => handleChangeText(value, 'password')}
        />
      </View>

      <CustomButton
        label="Continue"
        onPress={handleSubmit}
        style={{marginBottom: dw(40)}}
        primary
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: dw(36),
    paddingHorizontal: dw(16),
    width: w,
    justifyContent: 'space-between',
  },
});
