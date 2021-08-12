import { memo } from 'react'
import { View, Text, Image, TouchableNativeFeedback } from 'react-native'

// Styles
import styles from './Styles/DetailsCardStyle'
import { apply } from '@Themes/OsmiProvider'
import { formatMoney } from '@Lib/TextUtils'
import Images from '@Images/index'

const DetailsCard = ({ item }) => {
  const { spent, total } = item
  const percentage = (spent * 100) / total

  console.log(percentage)

  return (
    <View
      style={apply(`${item.background} rounded-25 h-350 p-2 overflow-hidden`)}
    >
      <Image
        source={item.image}
        style={[apply('w-250 h-250 self-center'), { top: -38 }]}
        resizeMode='contain'
      />
      <View style={[apply('bg-white rounded-15 px-4 py-3'), { top: -65 }]}>
        <View style={apply('row items-center mb-1')}>
          <Text style={apply('flex font-bold text-base')}>{item.title}</Text>
          <View
            style={apply(
              'bg-green-third justify-center items-center rounded-lg py-1 px-2 -right-4'
            )}
          >
            <Text style={apply('text-green-secondary font-bold text-xs')}>
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
            style={[
              apply('h-10 bg-purple-primary rounded-lg'),
              { width: percentage },
            ]}
          />
        </View>
        <View style={apply('row justify-end items-center mt-3')}>
          <View
            style={apply(
              'overflow-hidden rounded-lg w-40 h-40 bg-grey-third ml-2'
            )}
          >
            <TouchableNativeFeedback>
              <View style={apply('justify-center items-center w-40 h-40')}>
                <Image
                  source={Images.send}
                  resizeMode='center'
                  style={apply('w-20 h-20')}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={apply(
              'overflow-hidden rounded-lg w-40 h-40 bg-grey-third ml-2'
            )}
          >
            <TouchableNativeFeedback>
              <View style={apply('justify-center items-center w-40 h-40')}>
                <View
                  style={apply(
                    'w-24 h-24 bg-green-primary rounded-full justify-center items-center'
                  )}
                >
                  <Image
                    source={Images.plus}
                    resizeMode='center'
                    style={apply('w-12 h-12')}
                  />
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={apply(
              'overflow-hidden rounded-lg w-40 h-40 bg-grey-third ml-2'
            )}
          >
            <TouchableNativeFeedback>
              <View style={apply('justify-center items-center w-40 h-40')}>
                <Image
                  source={Images.dots}
                  resizeMode='center'
                  style={apply('w-16 h-16')}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </View>
  )
}

export default memo(DetailsCard)
