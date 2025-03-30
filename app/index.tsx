import { Text, View } from "react-native";
import {StopsTable} from '@/components/StopListDisplay'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <StopsTable/>
    </View>
  );
}
