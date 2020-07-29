// TS: import { Database, aql } from "arangojs";
const { Database, aql } = require("arangojs");

const db = new Database({
    url: "http://localhost:8529",
    database: "name",
    auth: { username: "root"},
});

async function main() {

    const graph = db.graph('some-graph');
    const result = await graph.exists();
    if(result){
        const data = await graph.get();
        console.log(data);
    }
    else {
        const info = await graph.create({
            edgeDefinitions: [{
                collection: 'edges',
                from: ['start-vertices'],
                to: ['end-vertices']
            }]
        });
        console.log(info);
        }

    const collection = graph.vertexCollection("vertices");
    //const doc = await collection.save({ some: "data" });
    console.log(collection.name);
    //console.log(doc);
    const collections = await graph.listVertexCollections();
    console.log(collections);
    if(!collections.includes(collection.name))
    await graph.addVertexCollection('vertices');

    const collections2 = await graph.listEdgeCollections();
    if(!collections2.includes('edges2')){
        await graph.addEdgeDefinition({
            collection: 'edges2',
            from: ['vertices'],
            to: ['vertices']
        });
    }

    const doc = await collection.save({ some: "data" });
    }


main();
