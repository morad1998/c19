import axios from "axios";
import parser from './parser';

async function usStats(){
    const response = await axios.get('https://api.covidtracking.com/v1/us/current.json');
    
    return parser.usStats(response.data)

}