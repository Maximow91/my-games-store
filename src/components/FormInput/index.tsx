import React, {LegacyRef, useRef, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  TextInputProps,
} from 'react-native';
import {dw} from '../../helpers/functions';
import {theme} from '../../theme';

interface FormInputProps {
  label: string;
  error?: string | false | undefined;
}

export const FormInput = (props: TextInputProps & FormInputProps) => {
  const {value, label, error, onChangeText} = props;
  const refInput = useRef<TextInput>();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const moveTextToTop = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const moveTextToBottom = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onBlurHandler = () => {
    // console.log('on blur');
    if (value === '') {
      moveTextToBottom();
    }
  };

  const onFocusHandler = () => {
    // console.log('onFocus');
    moveTextToTop();
  };

  return (
    <View style={styles.wrapper}>
      {error ? <Text style={styles.errText}>{error}</Text> : null}

      <TouchableWithoutFeedback
        onPress={() => {
          refInput?.current?.focus();
        }}>
        <View style={styles.container}>
          <Animated.Text
            style={[
              styles.label,
              {
                fontSize: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [dw(14), dw(12)],
                }),
                paddingHorizontal: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [dw(16), dw(0)],
                }),
                transform: [
                  {
                    translateY: animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [dw(0), dw(-28)],
                    }),
                  },
                ],
              },
            ]}>
            {label}
          </Animated.Text>
          <TextInput
            ref={refInput}
            style={styles.input}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            onChangeText={onChangeText}
            {...props}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: dw(16),
    paddingBottom: dw(8),
  },
  container: {
    position: 'relative',
    borderWidth: 2,
    borderColor: theme.colors.purple_OP_70,
    backgroundColor: theme.colors.purple_OP_40,
    borderRadius: dw(4),
  },
  label: {
    paddingHorizontal: dw(16),
    top: dw(10),
    position: 'absolute',
    zIndex: 6,
    alignSelf: 'flex-start',
    fontFamily: theme.fontFamily.medium,
    lineHeight: dw(16),
    color: 'white',
  },
  input: {
    padding: dw(10),
    color: 'white',
    fontSize: dw(14),
  },
  errText: {
    alignSelf: 'flex-end',
    fontFamily: theme.fontFamily.medium,
    lineHeight: dw(16),
    color: '#F82BFF',
    backgroundColor: '#808080B3',
    marginBottom: dw(1),
    paddingTop: dw(1),
    paddingHorizontal: dw(6),
    borderWidth: 1,
    borderColor: '#F82BFF',
    borderRadius: 4,
  },
});
