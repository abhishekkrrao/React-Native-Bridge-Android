import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const baseWidth = 375; // Reference width for scaling
class ScalingUtils {
    static getPixelRatio() {
        return PixelRatio.get();
    }

    static scaleSize(size: number): number {
        const scaledSize = (size / baseWidth) * width;
        return scaledSize;
    }

    static scaleFont(size: number): number {
        const ratio = size / baseWidth;
        const fontSize = ratio * width;
        return Math.round(PixelRatio.roundToNearestPixel(fontSize));
    }

    static scaleHeight(heightPercent: number): number {
        const screenHeight = Dimensions.get('window').height;
        const elemHeight = (heightPercent * screenHeight) / 100;
        return Math.round(elemHeight);
    }

    static scaleWidth(widthPercent: number): number {
        const screenWidth = Dimensions.get('window').width;
        const elemWidth = (widthPercent * screenWidth) / 100;
        return Math.round(elemWidth);
    }
}
export { ScalingUtils };
