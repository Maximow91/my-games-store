import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {CustomButton} from '../../../../components/CustomButton';

import {dw, showError} from '../../../../helpers/functions';
import {PrivacyPolicyBlock} from '../PrivacyPolicyBlock';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {FormInput} from '../../../../components/FormInput';

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: Yup.string()
    .trim()
    .email('Ivalid email!')
    .required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmedPassword: Yup.string().test(
    'password-match',
    'Passwords do not match',
    function () {
      const {password} = this.parent;
      return password === this.parent.confirmedPassword;
    },
  ),
});

const w = Dimensions.get('screen').width;

export const SignUpForm = () => {
  const [agreeWithPolicy, setAgreeWithPolicy] = useState(false);

  const userInfo = {
    fullName: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={(values, formikActions) => {
          console.log(values);
          setTimeout(() => {
            formikActions.resetForm();
            formikActions.setSubmitting(false);
          }, 3000);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          const {fullName, email, password, confirmedPassword} = values;
          return (
            <>
              <View>
                <FormInput
                  label="Full Name"
                  error={touched.fullName && errors.fullName}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={fullName}
                />
                <FormInput
                  autoCapitalize="none"
                  label="Email"
                  error={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={email}
                />
                <FormInput
                  secureTextEntry
                  autoCapitalize="none"
                  label="Password"
                  error={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={password}
                />
                <FormInput
                  autoCapitalize="none"
                  secureTextEntry
                  label="Confirm Password"
                  error={touched.confirmedPassword && errors.confirmedPassword}
                  onChangeText={handleChange('confirmedPassword')}
                  onBlur={handleBlur('confirmedPassword')}
                  value={confirmedPassword}
                />
                <PrivacyPolicyBlock
                  agreeWithPolicy={agreeWithPolicy}
                  setAgreeWithPolicy={setAgreeWithPolicy}
                />
              </View>
              <CustomButton
                label="Get Started"
                onPress={handleSubmit}
                style={{marginBottom: dw(40)}}
                primary
                submitting={isSubmitting}
                disabled={!agreeWithPolicy}
              />
            </>
          );
        }}
      </Formik>
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
