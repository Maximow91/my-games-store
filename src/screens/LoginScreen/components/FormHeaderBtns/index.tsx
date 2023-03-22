import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {dw} from '../../../../helpers/functions';
import {theme} from '../../../../theme';

interface FormSelectorBtnsProps {
  leftBtnLabel: string;
  rigthBtnLabel: string;
  leftButtonColor: Animated.AnimatedInterpolation<string | number>;
  rightButtonColor: Animated.AnimatedInterpolation<string | number>;
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
}

type ActiveBtn = 'rigth' | 'left';

export const FormSelectorBtns = ({
  leftBtnLabel,
  rigthBtnLabel,
  leftButtonColor,
  rightButtonColor,
  onLeftButtonPress,
  onRightButtonPress,
}: FormSelectorBtnsProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onLeftButtonPress}>
        <Animated.View
          style={[
            styles.btnLeft,
            {
              backgroundColor: leftButtonColor,
            },
          ]}>
          <Text style={styles.btnLabel}>{leftBtnLabel}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onRightButtonPress}>
        <Animated.View
          style={[
            styles.btnRight,
            {
              backgroundColor: rightButtonColor,
            },
          ]}>
          <Text style={styles.btnLabel}>{rigthBtnLabel}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: dw(36),
    flexDirection: 'row',
  },
  btnRight: {
    height: dw(40),
    width: '50%',
    backgroundColor: '#9C00FF4D',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: dw(4),
    borderBottomRightRadius: dw(4),
  },
  btnLeft: {
    height: dw(40),
    width: '50%',
    backgroundColor: '#9C00FFB3',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: dw(4),
    borderBottomLeftRadius: dw(4),
  },
  btnLabel: {
    fontFamily: theme.fontFamily.semiBold,
    color: 'white',
    fontSize: dw(14),
  },
});
