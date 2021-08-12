import { memo } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'

// Styles
import styles from './Styles/HomeMiniCardStyle'
import { apply } from '@Themes/OsmiProvider'
import { formatMoney } from '@Lib/TextUtils'

const HomeMiniCard = ({ item, onPress }) => {
  return (
    <View
      style={apply(`h-163 w-155 ${item.background} mx-2 my-2 rounded-25 p-2`)}
    >
      <Image
        source={item.image}
        resizeMode='contain'
        style={apply('w-100 h-95 ml-2')}
      />
      <View style={apply('bg-white rounded-15 overflow-hidden')}>
        <TouchableNativeFeedback onPress={onPress}>
          <View style={apply('p-3.5')}>
            <Text style={apply('font-bold text-sm ml-1')}>{item.title}</Text>
            <Text
              style={apply('text-mini text-blue-secondary text-center my-1')}
            >
              Rp. {formatMoney(item.spent)}{' '}
              <Text style={apply('text-gray-400')}>
                - Rp. {formatMoney(item.total)}
              </Text>
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default memo(HomeMiniCard)
