import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {dw} from '../../../../helpers/functions';
import {theme} from '../../../../theme';

type animProp =
  | number
  | Animated.Value
  | Animated.AnimatedInterpolation<string | number>
  | undefined;

interface FormHeaderProps {
  leftHeading: string;
  rigthHeading: string;
  subHeading: string;
  leftHeaderTranslateX: animProp;
  rightHeaderTranslateY: animProp;
  rightHeaderOpacity: animProp;
}

export const FormHeader = ({
  leftHeading,
  rigthHeading,
  subHeading,
  leftHeaderTranslateX = dw(40),
  rightHeaderTranslateY = dw(-20),
  rightHeaderOpacity = 0,
}: FormHeaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.heading,
            {transform: [{translateX: leftHeaderTranslateX}]},
          ]}>
          {leftHeading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              transform: [{translateY: rightHeaderTranslateY}],
              opacity: rightHeaderOpacity,
            },
          ]}>{` ${rigthHeading}`}</Animated.Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.textGray,
    fontSize: dw(30),
    textAlign: 'center',
  },
  subHeading: {
    fontFamily: theme.fontFamily.appTitle,
    color: theme.colors.titleYellow,
    fontSize: dw(20),
    alignSelf: 'flex-end',
    marginTop: dw(20),
    paddingEnd: dw(10),
  },
});
