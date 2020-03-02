import React from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import { getLightThemeColorByCategory, getDarkThemeColorByCategory } from '../utils/categoryValues'
import { Colors } from '../constants/colors'

export default class MLPFlatList extends React.Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(rowData) {
    const bottomBorderStyle = rowData.index == 0 ? styles.firstBorder : null
    const { category } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onRowPressHandler(rowData)}>
          <View
            style={[
              styles.rowContainer,
              bottomBorderStyle,
              { borderColor: getDarkThemeColorByCategory(category) },
            ]}
          >
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
    )
  }
}

const styles = StyleSheet.create({
  firstBorder: {
    borderTopWidth: 1,
  },
  rowContainer: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: 30,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
})
