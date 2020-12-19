import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Match from './Match';

const MatchesList = ({ matches }) => {
  if (!matches.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={matches}
        keyExtractor={(match) => match.homeTeam}
        renderItem={({ item }) => {
          return <Match match={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default MatchesList;
