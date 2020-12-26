import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../../context/authContext';
import axios from '../../utils/axios/index';
import CouponCard from '../Coupons/components/CouponCard';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({ navigation }) => {
  const [coupons, setCoupons] = useState(null);
  const { userId, email, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if(isLoggedIn){
      const fetchData = async () => {
        await axios.get('/coupons').then((response) => {
          setCoupons(
            response.data.coupons.filter((coupon) =>
              coupon.favUsers.includes(userId)
            )
          );
        });
      };
      fetchData();
    }
  }, []);

  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          borderColor: '#34495e',
          backgroundColor: '#34495e',
          borderStyle: 'solid',
          borderWidth: 2,
          borderRadius: 10,
          margin: 2,
          padding: 4,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 5,
              borderBottomColor: '#00000044',
            }}
          >
            <View
              style={{
                flex: 2,
                marginRight: 5,
                padding: 5,
              }}
            >
              <Text style={{ textAlign: 'right' }}>
                <Icon style={styles.iconText} name='user' color='#ffffff' />
              </Text>
            </View>
            <View
              style={{
                flex: 12,
                marginLeft: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 30,
                  color: '#ecf0f1',
                  fontWeight: 'bold',
                }}
              >
                Kullanıcı Bilgileri
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}
          >
            <View
              style={{
                flex: 2,
                marginRight: 5,
                padding: 5,
              }}
            >
              <Text style={{ textAlign: 'right' }}>
                <Icon
                  style={{
                    fontSize: 25,
                    color: '#ecf0f1',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                  name='envelope'
                  color='#ffffff'
                />
              </Text>
            </View>
            <View
              style={{
                flex: 12,
                marginLeft: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 18,
                  color: '#ecf0f1',
                  fontWeight: 'bold',
                }}
              >
                {email}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderColor: '#34495e',
          backgroundColor: '#34495e',
          borderStyle: 'solid',
          borderWidth: 2,
          borderRadius: 10,
          margin: 2,
          padding: 8,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 5,
              borderBottomColor: '#00000044',
            }}
          >
            <View
              style={{
                flex: 2,
                marginRight: 5,
                padding: 5,
              }}
            >
              <Text style={{ textAlign: 'right' }}>
                <Icon
                  style={styles.iconText}
                  name='thumbs-up'
                  color='#ffffff'
                />
              </Text>
            </View>
            <View
              style={{
                flex: 12,
                marginLeft: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 30,
                  color: '#ecf0f1',
                  fontWeight: 'bold',
                }}
              >
                Beğendiğim Kuponlar
              </Text>
            </View>
          </View>
        </View>
        {!!coupons && coupons.length > 0 ? (
          <FlatList
            style={{ marginVertical: 6 }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={coupons}
            keyExtractor={(coupon) => coupon._id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    axios.get(`/coupons/${item._id}`).then((response) => {
                      navigation.navigate('CouponDetail', {
                        coupon: response.data,
                      });
                    });
                  }}
                >
                  <CouponCard coupon={item} />
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View>
            <View
              style={{
                backgroundColor: '#ecf0f1',
                margin: 10,
                padding: 10,
                borderColor: '#00000022',
                borderWidth: 5,
                borderStyle: 'solid',
                borderRadius: 20,
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  color: '#34495e',
                  fontSize: 16,
                  textAlign: 'center',
                  flex: 1,
                }}
              >
                Kupon bulunamadı.
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconText: {
    fontSize: 40,
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
