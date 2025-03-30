
// currently magical.
export function distToStop(stop) {
    return Math.round((stop.lat ** 2 + stop.long ** 2) ** 0.5 * 10) / 10;
};

export function getNextBusTime(stop){
    return Math.round(Math.random() * 10);
};

export function getNextBus(stop){
    return "35 South";
}