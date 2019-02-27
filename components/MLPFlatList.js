import React from 'react';
import { View, TouchableHighlight, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors'

export default class MLPFlatList extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    /* expects rowData to have title property */
    // TODO Change TouchableHighlight color
    const bottomBorderStyle = rowData.index == 0 ? styles.firstBorder : null;
    return (
      <View>
        <TouchableHighlight underlayColor={Colors.lighterGreen} onPress={() => this.props.onRowPressHandler(rowData)}>
          <View style={[styles.rowContainer, bottomBorderStyle]}>
            <Text style={styles.rowTitle}>{rowData.item.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => `key:${index}`}
        data={this.props.listData}
        renderItem={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.darkGreen
  },
  rowTitle: {
    paddingLeft: 30,
    fontSize: 18,
    color: Colors.lightGreen,
    fontWeight: 'bold'
  },
  firstBorder: {
    borderTopWidth: 1
  }
});
