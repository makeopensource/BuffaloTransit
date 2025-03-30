/**
 * All stops have info associated with name
 * id: unique stop identifier
 * name: human parsable stop name
 * lat: latitude of the stop
 * long: longitude of the stop
 * type: "bus", "train", "mixed"
 * */
import {FlatList, StyleSheet, Text, View} from "react-native";
import {distToStop, getNextBusTime, getNextBus} from '@/scripts/stopinfo'

type StopInfo = {
    id: number;
    name: string;
    lat: number;
    long: number
    type: string;
};

const TempData  =[
    {
        id: 0,
        name: "Left Westrightland",
        lat: -1,
        long: 27,
        type: "bus",
    },
    {
        id: 1,
        name: "Right Eastleftland",
        lat: 2,
        long: 9,
        type: "bus",
    },
];



export const StopInfo = (stop: StopInfo) => (
    <View style={styles.stopInfo}>
        <Text style={styles.stopName}>{stop.name}</Text>
        <Text style={styles.stopDist}>{distToStop(stop)} mi.</Text>
        <Text>Next arrival: Bus: {getNextBus(stop)} in {getNextBusTime(stop)} minutes</Text>
    </View>
);

export const StopsTable = () => {
    return <FlatList
        data={TempData}
        renderItem={({item}) => <StopInfo name={item.name} lat={item.lat} id={item.id} long={item.long} type={item.type}
                                          key={item.id}/>}
    />
};

const styles = StyleSheet.create({
    stopInfo: {
        backgroundColor: "#9efff2",
        marginVertical: 10,
        padding: 20,
        width: "100%",
        marginHorizontal: 0,
        borderStyle: "solid",
        borderColor: "#000000",
        borderWidth: 1,
    },
    stopName: {
        verticalAlign: "top",
        fontSize: 20,
        display: "flex",
        justifyContent: "space-between",
    },
    stopDist: {
        textAlign: "right",
        display: "flex",
        justifyContent: "space-between",
    }
});