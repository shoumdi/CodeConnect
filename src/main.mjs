import { fetchData } from "./repositories/repository.mjs";

const myData = await fetchData("../src/data/client.json");

console.log(myData);
