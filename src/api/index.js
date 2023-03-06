import Chance from "chance";

const chance=Chance()
const fakedata=()=>{
return  chance.name({ middle: true })
}

export default fakedata;

