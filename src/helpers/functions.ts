import {Dimensions} from 'react-native';
import Toast from 'react-native-toast-message';

const baseWidth = 360;
const width = Dimensions.get('screen').width;

export const dw = (size: number) => {
  const convertedSize = (size / baseWidth) * width;
  return convertedSize;
};

export const isValidObjectField = (obj: Object) => {
  return Object.values(obj).every(value => value.trim());
};

export const isValidEmail = (email: string) => {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  return regex.test(email);
};

export const updateError = (
  err: string,
  stateUpdater: React.Dispatch<React.SetStateAction<string>>,
) => {
  stateUpdater(err);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

export const showError = (error: string) => {
  if (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error,
    });
  }
};
