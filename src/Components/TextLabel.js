import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'native-base';

const TextLabel = ( { children, textColor, textSize, textFont, align, onPress } ) => {
    const styles = StyleSheet.create({
        font: {
            fontFamily: textFont,
            color: textColor,
            fontSize: textSize,
            textAlign: align
        }
    });
    return(
        <Text style={styles.font} onPress={onPress}>{children}</Text>
    )
}

export default TextLabel;