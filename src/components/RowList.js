import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { getDarkThemeColorByCategory } from '../utils/categoryValues'
import Colors from '../constants/colors'
import styled from 'styled-components/native'

const RowListWrapper = styled.FlatList`
  padding-bottom: 100px;
`

const RowWrapper = styled.View`
  border-top-width: ${({ isFirstRow }) => (isFirstRow ? '1px' : '0px')};
  border-bottom-width: 1px;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 30px;
  border-color: ${({ category }) => getDarkThemeColorByCategory(category)};
`

const RowText = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
  font-weight: bold;
  padding-left: 30px;
`

class MLPFlatList extends React.Component {
  constructor(props) {
    super(props)

    this.renderRow = this.renderRow.bind(this)
  }

  renderRow(rowData) {
    const { category, onRowPressHandler } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => onRowPressHandler(rowData)}>
          <RowWrapper isFirstRow={rowData.index === 0} category={category}>
            <RowText>{rowData.item.title}</RowText>
          </RowWrapper>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { listData } = this.props
    return (
      <RowListWrapper
        keyExtractor={(_, index) => `key:${index}`}
        data={listData}
        renderItem={this.renderRow}
      />
    )
  }
}

MLPFlatList.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPressHandler: PropTypes.func.isRequired,
  listData: PropTypes.array.isRequired,
}

export default MLPFlatList
