/*
* For remote download, I think we use expo file-system
* which has download capabilities
* */
import {PriorityQueue} from 'datastructures-js';

const stops = require('@/assets/data/json_dir/stops.json');

export var sorted_stops;

function dist_to_stop(lat, lon, stop){
    let slat = stop.lat;
    let slon = stop.lon;
    return Math.sqrt((slat - lat) ** 2 + (slon - lon) ** 2);
}

export function stops_by_dist(lat, lon) {
    let pq = new PriorityQueue( (a, b) => {
        if(dist_to_stop(lat, lon, a) > dist_to_stop(lat, lon, b)){
            return -1;
        }
        return 1;
    });
    for(const sid in stops) {
       console.log(stops[sid]);
        pq.enqueue(stops[sid]);
    }
    sorted_stops = pq;
    return pq;
}