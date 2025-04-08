import { Text, View } from "react-native";
import {StopsTable} from '@/components/StopListDisplay'
import {stops_by_dist} from '@/scripts/localapi'

export default function Index() {
  return (
    <View
      style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
      }}
    >
        <StopsTable/>
        <Text>Oh no!</Text>
    </View>
  );
}
