import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native'
import { getDarkThemeColorByCategory } from '../utils/categoryValues'
import Colors from '../constants/colors'

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
  },
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

class MLPFlatList extends React.Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(rowData) {
    const bottomBorderStyle = rowData.index === 0 ? styles.firstBorder : null
    const { category, onRowPressHandler } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => onRowPressHandler(rowData)}>
          <View
            style={[
              styles.rowContainer,
              bottomBorderStyle,
              { borderColor: getDarkThemeColorByCategory(category) },
            ]}
          >
            <Text style={[styles.rowTitle, { color: Colors.white }]}>{rowData.item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { listData } = this.props
    return (
      <FlatList
        keyExtractor={(_, index) => `key:${index}`}
        data={listData}
        renderItem={this.renderRow}
        contentContainerStyle={styles.contentContainer}
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
