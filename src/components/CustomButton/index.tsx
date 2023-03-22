import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageSourcePropType,
  Insets,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {dw} from '../../helpers/functions';
import {theme} from '../../theme';

interface ButtonProps {
  onPress: () => void;
  label: string;
  submitting?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  primary?: boolean;
  disabled?: boolean;
}

export const CustomButton = ({
  label,
  style,
  labelStyle,
  onPress,
  submitting = false,
  disabled = false,
  primary = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      {primary ? (
        <LinearGradient
          useAngle={true}
          angle={167.85}
          locations={[0, 1]}
          colors={['#9C00FF', '#027CE6']}
          style={[styles.container, style]}>
          {submitting ? (
            <ActivityIndicator size="small" />
          ) : (
            <Text style={[styles.text, labelStyle]}>{label}</Text>
          )}
        </LinearGradient>
      ) : (
        <View style={[styles.container, style]}>
          <Text style={[styles.text, labelStyle]}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: dw(10),
    borderRadius: dw(8),
  },
  text: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: dw(14),
    color: 'white',
  },
});
