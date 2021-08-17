import axios, {AxiosResponse} from 'axios'

const API_KEY='';

export const getPlaceLocation=(lat:number,long:number)=>{
    // this url works to find all hospital nearby the location WITHIN a radius
    // this does not work that well
    //const url=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=3000&type=hospital&keyword=hospitals&key=${API_KEY}`;

    //this url searches the nearby locations
    const url=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&type=hospital&keyword=hospitals&rankby=distance&key=${API_KEY}`;
        console.log(url)
    return axios.get(url).then((res:AxiosResponse)=>{
        return res.data.results;
    }).catch(e=>{
        console.log(e);
    })
}

export const getFindSinglePlace=(input:string)=>{
    const url=`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=formatted_address,name,rating,opening_hours,geometry&key=${API_KEY}`;
    axios.get(url).then((res:AxiosResponse)=>{
        console.log(res.data);
    })
}
