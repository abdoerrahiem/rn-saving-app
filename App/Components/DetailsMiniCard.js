import { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

// Styles
import styles from './Styles/DetailsMiniCardStyle'
import { apply } from '@Themes/OsmiProvider'
import { formatMoney } from '@Lib/TextUtils'
import Images from '@Images/index'

const DetailsMiniCard = ({ item }) => {
  return (
    <View style={apply('bg-white shadow rounded-15 mb-3 p-2 row items-center')}>
      <View style={apply('flex row items-center')}>
        <View
          style={apply(
            `w-54 h-54 ${
              item.spent ? 'bg-red-secondary' : 'bg-green-third'
            } justify-center items-center rounded-md`
          )}
        >
          <Image
            source={item.spent ? Images.minusBlack : Images.plusBlack}
            resizeMode='center'
            style={apply('w-18 h-18')}
          />
        </View>
        <View style={apply('ml-2')}>
          <Text
            style={apply(
              `font-bold text-base mb-1 ${
                item.spent ? 'text-red-primary' : 'text-green-primary'
              }`
            )}
          >
            {item.title}
          </Text>
          <Text style={apply('text-xs text-grey-secondary')}>{item.time}</Text>
        </View>
      </View>
      <View>
        <Text style={apply('font-bold text-lg')}>
          Rp. {formatMoney(item.amount)}
        </Text>
      </View>
    </View>
  )
}

// // Prop type warnings
// DetailsMiniCard.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// DetailsMiniCard.defaultProps = {
//   someSetting: false
// }

export default memo(DetailsMiniCard)
