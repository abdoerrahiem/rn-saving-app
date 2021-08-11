import { memo } from 'react'
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

// Styles
import styles from './Styles/HomeCardStyle'
import { apply } from '@Themes/OsmiProvider'
import { formatMoney } from '@Lib/TextUtils'

const HomeCard = ({ item, onPress }) => {
  const { spent, total } = item
  const percentage = (spent * 100) / total - 24

  return (
    <View style={apply(`rounded-25 h-190 ${item.background} p-2`)}>
      <View style={apply('-top-125')}>
        <Image
          source={item.image}
          resizeMode='center'
          style={apply('w-200 h-200 self-center')}
        />
        <View style={apply('rounded-15 overflow-hidden -top-4')}>
          <TouchableNativeFeedback onPress={onPress}
          >
            <View style={apply('bg-white rounded-15 p-4')}>
              <View style={apply('row items-center mb-1')}>
                <Text style={apply('flex font-bold text-base')}>
                  {item.title}
                </Text>
                <View
                  style={apply(
                    'bg-red-secondary justify-center items-center rounded-lg py-1 px-2 -right-4'
                  )}
                >
                  <Text style={apply('text-red-primary font-bold text-xs')}>
                    {item.timeLeft} left
                  </Text>
                </View>
              </View>
              <Text style={apply('text-sm text-blue-secondary')}>
                Rp. {formatMoney(item.spent)}{' '}
                <Text style={apply('text-gray-400')}>
                  - Rp. {formatMoney(item.total)}
                </Text>
              </Text>
              <View style={apply('h-10 bg-blue-primary rounded-lg mt-2')}>
                <View
                  style={apply(`h-10 w/${percentage} bg-blue-third rounded-lg`)}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  )
}

export default memo(HomeCard)
