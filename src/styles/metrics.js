import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const wp = widthPercent => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );

  return screenPixel;
};

const hp = heightPixel => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPixel)) / 100,
  );

  return screenPixel;
};

const FIGMA_WIDTH = 375;
const px = valuePixel => {
  const widthPercent = valuePixel / FIGMA_WIDTH / 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );

  return screenPixel;
};

export const metrics = {
  wp,
  hp,
  px,
};
