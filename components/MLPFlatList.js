import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { getLightThemeColorByCategory, getDarkThemeColorByCategory } from '../utils/categoryValues'
import { Colors } from '../constants/colors'

export default class MLPFlatList extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData) {
    const bottomBorderStyle = rowData.index == 0 ? styles.firstBorder : null;
    const { category } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onRowPressHandler(rowData)}>
          <View style={[styles.rowContainer, bottomBorderStyle, { borderColor: getDarkThemeColorByCategory(category) }]}>
            <Text style={[styles.rowTitle, { color: 'white' }]}>{rowData.item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <FlatList
        keyExtractor={(item, index) => `key:${index}`}
        data={this.props.listData}
        renderItem={this.renderRow}
        contentContainerStyle={{ paddingBottom: 100 }}
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
  },
  rowTitle: {
    paddingLeft: 30,
    fontSize: 18,
    fontWeight: 'bold'
  },
  firstBorder: {
    borderTopWidth: 1
  }
});
