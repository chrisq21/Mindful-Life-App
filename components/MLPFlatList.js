import React from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { getDarkThemeColorByCategory } from '../utils/categoryValues'
import { Colors } from '../constants/colors'

class MLPFlatList extends React.Component {
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
            <Text style={styles.rowTitle}>{rowData.item.title}</Text>
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
        contentContainerStyle={styles.flatList}
      />
    )
  }
}

MLPFlatList.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPressHandler: PropTypes.func.isRequired,
  listData: PropTypes.object.isRequired,
}

export default MLPFlatList

const styles = StyleSheet.create({
  firstBorder: {
    borderTopWidth: 1,
  },
  flatList: {
    paddingBottom: 100,
  },
  rowContainer: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: 30,
  },
  rowTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 30,
  },
})
