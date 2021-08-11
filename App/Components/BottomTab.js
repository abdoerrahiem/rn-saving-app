import { memo } from 'react'
// import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native'

// Styles
import styles from './Styles/BottomTabStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'

const BottomTab = (props) => {
  return (
    <View style={[apply('p-1 bg-white row'), { elevation: 10 }]}>
      <View style={apply('flex rounded-15 overflow-hidden')}>
        <TouchableNativeFeedback>
          <View style={apply('justify-center items-center p-1')}>
            <Image
              source={Images.home}
              resizeMode='center'
              style={apply('h-25 w-25 mb-2')}
            />
            <Text style={apply('font-bold text-xs')}>HOME</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <TouchableHighlight
        underlayColor='#10A371'
        onPress={() => {}}
        style={[
          apply(
            'justify-center items-center rounded-full bg-green-primary p-3 mx-2 w-50 h-50'
          ),
          { elevation: 2, top: -25 },
        ]}
      >
        <Image
          source={Images.plus}
          resizeMode='center'
          style={apply('h-25 w-25')}
        />
      </TouchableHighlight>
      <View style={apply('flex rounded-15 overflow-hidden')}>
        <TouchableNativeFeedback>
          <View style={apply('justify-center items-center p-1')}>
            <Image
              source={Images.list}
              resizeMode='center'
              style={apply('h-25 w-25 mb-2')}
            />
            <Text style={apply('font-bold text-grey-secondary text-xs')}>
              SAVINGS
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default memo(BottomTab)
