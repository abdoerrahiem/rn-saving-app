import { ScrollView, Text, View, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '@Themes/OsmiProvider'
import Images from '@Images/index'
import HomeCard from '@Components/HomeCard'
import HomeMiniCard from '@Components/HomeMiniCard'
import BottomTab from '@Components/BottomTab'

const items = [
  {
    id: 1,
    title: 'Buy a work desk',
    timeLeft: '1 month',
    spent: 400000,
    total: 500000,
    image: Images.pic3,
    background: 'bg-blue-fourth',
  },
  {
    id: 2,
    title: 'Go abroad',
    timeLeft: '2 month',
    spent: 100000,
    total: 5000000,
    image: Images.pic1,
    background: 'bg-blue-fourth',
  },
  {
    id: 3,
    title: 'New Vehicle',
    timeLeft: '2 month',
    spent: 100000,
    total: 5000000,
    image: Images.pic2,
    background: 'bg-blue-fourth',
  },
  {
    id: 4,
    title: 'New Vehicle',
    timeLeft: '2 month',
    spent: 100000,
    total: 5000000,
    image: Images.pic2,
    background: 'bg-blue-fourth',
  },
  {
    id: 5,
    title: 'Go abroad',
    timeLeft: '2 month',
    spent: 100000,
    total: 5000000,
    image: Images.pic1,
    background: 'bg-blue-fourth',
  },
]

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={apply('flex bg-white')}>
      <ScrollView>
        <View style={apply('row items-end mx-4 mt-10')}>
          <View style={apply('flex')}>
            <Text style={apply('font-bold text-6xl')}>Let's save </Text>
            <Text style={apply('font-bold text-6xl')}>our money here</Text>
          </View>
          <View
            style={apply(
              'w-45 h-45 bg-blue-primary justify-center items-center rounded-lg right-4'
            )}
          >
            <Image
              source={Images.profile}
              resizeMode='center'
              style={apply('w-27 h-45 -top-4')}
            />
          </View>
        </View>
        <View style={apply('row items-center mx-4 mt-5 mb-20')}>
          <Text style={apply('font-regular text-lg flex')}>Already saved</Text>
          <View style={apply('row items-center')}>
            <Image
              source={Images.eye}
              resizeMode='center'
              style={apply('h-24 w-24 mr-2')}
            />
            <Text style={apply('font-bold text-blue-secondary text-2xl')}>
              Rp. 4.000.000
            </Text>
          </View>
        </View>
        <View style={apply('px-5')}>
          <HomeCard
            item={items[0]}
            onPress={() =>
              navigation.navigate('DetailsScreen', { item: items[0] })
            }
          />
        </View>
        <View style={apply('my-5 mx-2 row wrap')}>
          {items.map(
            (item, index) =>
              index !== 0 && (
                <HomeMiniCard
                  key={item.id}
                  item={item}
                  onPress={() => navigation.navigate('DetailsScreen', { item })}
                />
              )
          )}
        </View>
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  )
}

export default HomeScreen
