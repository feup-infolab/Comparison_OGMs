// TS: import { Database, aql } from "arangojs";
const { Database, aql } = require("arangojs");

const db = new Database({
    url: "http://localhost:8529",
    database: "name",
    auth: { username: "root"},
});

async function main() {

    const graph = db.graph('some-graph3');
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
    const collection2 = graph.vertexCollection("start-vertices");

    const collection3 = graph.vertexCollection("end-vertices");
    const collections = await graph.listVertexCollections();
    console.log(collections);
    if(!collections.includes(collection.name))
        await graph.addVertexCollection('vertices');

    const doc = await collection.save({ some: "data" });
    console.log(collection.name);
    console.log(doc);



    const collections4 = await graph.listEdgeCollections();
    if(!collections4.includes('edges2')){
        await graph.addEdgeDefinition({
            collection: 'edges2',
            from: ['vertices'],
            to: ['vertices']
        });
    }

    const doc3 = await collection2.save({ some: "data" });
    const doc2 = await collection3.save({ some: "data2" });

    const ecollection = graph.edgeCollection("edges");
    const edge = await ecollection.save(
        { some: "data3" },
        doc3._id,
        doc2._id
    );
    console.log(edge);
    }


main();
