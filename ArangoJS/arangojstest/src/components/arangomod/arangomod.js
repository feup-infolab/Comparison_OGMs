// TS: import { Database, aql } from "arangojs";
const { Database, aql } = require("arangojs");

const db = new Database({
    url: "http://localhost:8529",
    database: "name",
    auth: { username: "root"},
});
 pokemons = db.collection("my-pokemons");

async function main() {
    /*let pokemons;
    try {
        pokemons = await db.query(aql`
      FOR pokemon IN ${pokemons}
      FILTER pokemon.type == "fire"
      RETURN pokemon
    `);
        console.log("My pokemons, let me show you them:");
        for await (const pokemon of pokemons) {
            console.log(pokemon.name);
        }
    } catch (err) {
        console.error(err.message);
    }*/
    const info = await db.get();
    console.log(info)
}

main();
