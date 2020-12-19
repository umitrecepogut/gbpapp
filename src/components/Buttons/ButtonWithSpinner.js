import React from 'react';
import { Button, Spinner } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSignup: {
        textAlign: 'center',
        backgroundColor: '#1abc9c',
        marginHorizontal: 20,
        marginTop: 15,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#16a085',
        fontSize: 18,
        color: '#ecf0f1',
    },
});

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small'/>
    </View>
);

const ButtonWithSpinner = (props) => {
    const {text, isSubmitting} = props;

    return(
        <Button style={styles.btnSignup} appearance='outline' accessoryLeft={isSubmitting ? LoadingIndicator : null}>
            {text}
        </Button>
    );
};

export default ButtonWithSpinner;
