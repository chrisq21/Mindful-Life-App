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

const Row = ({ category, onRowPressHandler, item, index }) => (
  <View>
    <TouchableOpacity onPress={() => onRowPressHandler(item)}>
      <RowWrapper isFirstRow={index === 0} category={category}>
        <RowText>{item.title}</RowText>
      </RowWrapper>
    </TouchableOpacity>
  </View>
)

function RowList({ listData, category, onRowPressHandler }) {
  return (
    <RowListWrapper
      keyExtractor={(_, index) => `key:${index}`}
      data={listData}
      renderItem={({ index, item }) => (
        <Row category={category} onRowPressHandler={onRowPressHandler} item={item} index={index} />
      )}
    />
  )
}

Row.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPressHandler: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

RowList.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPressHandler: PropTypes.func.isRequired,
  listData: PropTypes.array.isRequired,
}

export default RowList
