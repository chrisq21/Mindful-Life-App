import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { getDarkThemeColorByCategory } from '../utils/categoryValues'
import Colors from '../styles/colors'

const ListWrapper = styled.FlatList`
  padding-bottom: 100px;
  width: 100%;
  flex-grow: 1;
`

const RowWrapper = styled.View`
  border-top-width: ${({ isFirstRow }) => (isFirstRow ? '1px' : '0px')};
  border-bottom-width: 1px;
  justify-content: center;
  padding-bottom: 30px;
  padding-top: 30px;
  border-color: ${({ category }) => getDarkThemeColorByCategory(category)};
  flex-grow: 1;
  width: 100%;
`

const RowText = styled.Text`
  color: ${Colors.white};
  font-size: 18px;
  font-weight: bold;
  padding-left: 30px;
`

const Row = ({ category, onRowPress, item, index }) => (
  <View>
    <TouchableOpacity onPress={() => onRowPress(item)}>
      <RowWrapper isFirstRow={index === 0} category={category}>
        <RowText>{item.title}</RowText>
      </RowWrapper>
    </TouchableOpacity>
  </View>
)

function List({ listData, category, onRowPress }) {
  return (
    <ListWrapper
      keyExtractor={(_, index) => `key:${index}`}
      data={listData}
      renderItem={({ index, item }) => (
        <Row category={category} onRowPress={onRowPress} item={item} index={index} />
      )}
    />
  )
}

Row.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
}

List.propTypes = {
  category: PropTypes.string.isRequired,
  onRowPress: PropTypes.func.isRequired,
  listData: PropTypes.array.isRequired,
}

export default List
