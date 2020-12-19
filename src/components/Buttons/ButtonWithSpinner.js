import React, { useEffect } from 'react';
import { Button, Spinner } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
        color:'white'
    },
});

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small' status="warning"/>
    </View>
);

const ButtonWithSpinner = (props) => {
    const {text, isSubmitting, onClick, style} = props;

    useEffect(()=>{
        
    },[isSubmitting]);

    return(
        <Button style={style} accessoryLeft={isSubmitting ? LoadingIndicator : null} onPress={()=> !isSubmitting && onClick()}>
            {text}
        </Button>
    );
};

export default ButtonWithSpinner;
