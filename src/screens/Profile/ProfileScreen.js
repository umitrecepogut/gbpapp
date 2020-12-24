import React, { useEffect, useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../context/authContext';
import axios from '../../utils/axios/index';

const ProfileScreen = () => {
    const [coupons,setCoupons] = useState(null);
    const {userId} = useContext(AuthContext);
    
    useEffect(() => {
        const fetchData = async() => {
            await axios.get('/coupons')
                .then((response) => {
                    setCoupons(response.data);
                });
        }
        fetchData();
    },[]);
    console.log(coupons);

    return(
        <View>
            <Text>UMIT RECEP ADAMDIR</Text>
        </View>
    );
};

export default ProfileScreen;