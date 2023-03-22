import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import {dw} from '../../helpers/functions';
import {theme} from '../../theme';
import {FormHeader} from './components/FormHeader';
import {FormSelectorBtns} from './components/FormHeaderBtns';
import {LoginForm} from './components/LoginForm';
import {SignUpForm} from './components/SignUpForm';

export const LoginScreen = () => {
  const w = Dimensions.get('window').width;

  const animation = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<React.LegacyRef<ScrollView>>();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, w],
    outputRange: [1, 0],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, w],
    outputRange: [dw(0), dw(-20)],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, w],
    outputRange: [dw(0), dw(40)],
  });

  const loginBtnColor = animation.interpolate({
    inputRange: [0, w],
    outputRange: [theme.colors.purple_OP_70, theme.colors.purple_OP_40],
  });

  const signUpBtnColor = animation.interpolate({
    inputRange: [0, w],
    outputRange: [theme.colors.purple_OP_40, theme.colors.purple_OP_70],
  });

  const onLoginPress = () => {
    scrollViewRef?.current?.scrollTo({x: 0});
  };

  const onSignUpPress = () => {
    scrollViewRef?.current?.scrollToEnd();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <FormHeader
              leftHeading="Welcome"
              rigthHeading="Back"
              subHeading="My Store App"
              rightHeaderOpacity={rightHeaderOpacity}
              rightHeaderTranslateY={rightHeaderTranslateY}
              leftHeaderTranslateX={leftHeaderTranslateX}
            />
            <FormSelectorBtns
              leftBtnLabel={'Login'}
              rigthBtnLabel={'Sign Up'}
              leftButtonColor={loginBtnColor}
              rightButtonColor={signUpBtnColor}
              onLeftButtonPress={onLoginPress}
              onRightButtonPress={onSignUpPress}
            />
          </View>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: animation,
                    },
                  },
                },
              ],
              {useNativeDriver: false},
            )}>
            <LoginForm />
            <SignUpForm />
          </ScrollView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: dw(12),
    paddingTop: dw(40),
    justifyContent: 'space-around',
  },
  headerContainer: {
    paddingHorizontal: dw(16),
  },
});
