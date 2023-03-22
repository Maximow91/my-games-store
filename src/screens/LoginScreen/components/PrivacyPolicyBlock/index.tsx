import React, {Dispatch, SetStateAction} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from '../../../../components/CheckBox';
import {dw} from '../../../../helpers/functions';
import {theme} from '../../../../theme';

interface PrivacyPolicyBlockProps {
  agreeWithPolicy: boolean;
  setAgreeWithPolicy: Dispatch<SetStateAction<boolean>>;
}

export const PrivacyPolicyBlock = ({
  agreeWithPolicy,
  setAgreeWithPolicy,
}: PrivacyPolicyBlockProps) => {
  return (
    <View
      style={{
        paddingHorizontal: dw(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: dw(16),
      }}>
      <CheckBox checked={agreeWithPolicy} setChecked={setAgreeWithPolicy} />
      <Text
        style={{
          color: theme.colors.textGray,
          paddingLeft: dw(8),
          fontFamily: theme.fontFamily.medium,
        }}>
        {`By Signing up, you agree to the `}
        <Text onPress={() => {}} style={{color: theme.colors.titleYellow}}>
          Terms of Service
        </Text>
        {' and '}
        <Text onPress={() => {}} style={{color: theme.colors.titleYellow}}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};
