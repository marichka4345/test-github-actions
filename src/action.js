import Axios from "axios";

async function run () {
  const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
  if (response.status === 200) {
    const { name, abilities } = response.data;
    console.log(`${name}: ${abilities[0].ability.name}`);
  }  
}

run();