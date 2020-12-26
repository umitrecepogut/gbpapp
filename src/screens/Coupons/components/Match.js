import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { round } from 'mathjs';

const Match = ({ match }) => {
  var formattedDate = new Date(match.date);
  var dateString =
    (formattedDate.getDate() < 10 ? '0' : '') +
    formattedDate.getDate() +
    '.' +
    (formattedDate.getMonth() + 1 < 10 ? '0' : '') +
    (formattedDate.getMonth() + 1) +
    '.' +
    formattedDate.getFullYear() +
    ' ' +
    (formattedDate.getHours() < 10 ? '0' : '') +
    formattedDate.getHours() +
    ':' +
    (formattedDate.getMinutes() < 10 ? '0' : '') +
    formattedDate.getMinutes();
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.leftTopSide}>
          <Text style={styles.leftTopSideText}>{dateString}</Text>
        </View>
        <View style={styles.leftBottomSide}>
          <Text style={styles.leftBottomSideText}>
            {match.homeTeam} - {match.awayTeam}
          </Text>
        </View>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.rightTopSide}>
          <View style={styles.rightTopLeftSide}>
            <Text style={styles.rightTopLeftSideText}>{match.betType}</Text>
          </View>
          <View style={styles.rightTopRightSide}>
            <Text style={styles.rightTopRightSideText}>
              {round(match.rate, 2)}
            </Text>
          </View>
        </View>
        <View style={styles.rightBottomSide}>
          <Text style={styles.rightBottomSideText}>
            %{round(match.score, 2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#34495e',
    borderWidth: 1,
    padding: 1,
    backgroundColor: '#b2ddd4',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 2,
  },
  leftSide: {
    flex: 3,
    flexDirection: 'column',
    padding: 5,
  },
  leftTopSide: {
    flex: 1,
    justifyContent: 'center',
    padding: 3,
  },
  leftTopSideText: {
    textAlign: 'center',
    color: '#34495e',
  },
  leftBottomSide: {
    flex: 1,
    justifyContent: 'center',
    padding: 3,
  },
  leftBottomSideText: {
    textAlign: 'center',
    color: '#34495e',
  },
  rightSide: { flex: 2, flexDirection: 'column' },
  rightTopSide: { flex: 1, flexDirection: 'row' },
  rightBottomSide: {
    flex: 1,
    backgroundColor: '#34495e',
    justifyContent: 'center',
    padding: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  rightBottomSideText: {
    textAlign: 'center',
    color: '#ecf0f1',
  },
  rightTopLeftSide: {
    flex: 1,
    backgroundColor: '#65a09e',
    justifyContent: 'center',
    padding: 3,
    marginLeft: 5,
    marginTop: 5,
    borderTopLeftRadius: 5,
  },
  rightTopLeftSideText: {
    textAlign: 'center',
    color: '#ecf0f1',
  },
  rightTopRightSide: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    padding: 3,
    marginRight: 5,
    marginTop: 5,
    borderTopRightRadius: 5,
  },
  rightTopRightSideText: {
    textAlign: 'center',
    color: '#65a09e',
  },
});

export default Match;
