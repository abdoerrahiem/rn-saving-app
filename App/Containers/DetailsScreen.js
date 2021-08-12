import { connect } from 'react-redux'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// Styles
import styles from './Styles/DetailsScreenStyle'
import { apply } from '@Themes/OsmiProvider'
import DetailsCard from '@Components/DetailsCard'
import DetailsMiniCard from '@Components/DetailsMiniCard'

const DetailsScreen = ({ route }) => {
  const { item } = route.params

  return (
    <SafeAreaView style={apply('flex bg-white')}>
      <ScrollView>
        <View style={apply('p-5')}>
          <Text style={apply('font-bold text-center text-3xl mb-5')}>
            Your Saving
          </Text>
          <DetailsCard item={item} />
          <Text style={apply('font-bold text-3xl my-4')}>Transaction</Text>
          {item?.transactions &&
            item.transactions.map((item) => (
              <DetailsMiniCard key={item.id} item={item} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)
