import React, {Dispatch, SetStateAction} from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import {dw} from '../../helpers/functions';
import {theme} from '../../theme';

interface CheckBoxProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const CheckBox = ({checked, setChecked}: CheckBoxProps) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setChecked(arg => !arg)}>
        <View
          style={{
            width: dw(24),
            height: dw(24),
            backgroundColor: theme.colors.white_OP_70,
            borderWidth: 2,
            borderColor: theme.colors.purple,
            borderRadius: dw(4),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {checked && (
            <Image
              style={{
                width: dw(16),
                height: dw(16),
                tintColor: theme.colors.purple,
              }}
              source={require('../../../assets/icons/check.png')}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
