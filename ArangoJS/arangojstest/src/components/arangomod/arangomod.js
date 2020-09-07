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

    async function experiment(){
        const graph = db.graph('experiment-graph');
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
            const E1 = graph.vertexCollection("e1-crm-entity");
            const E24 = graph.vertexCollection("e24-physical-human-made-thing");
            const E35 = graph.vertexCollection("e35-title");
            const E42 = graph.vertexCollection("e42-identifier");
            const E53 = graph.vertexCollection("e53-place");
            const E70 = graph.vertexCollection("e70-thing");

            const collections = await graph.listVertexCollections();
            console.log(collections);
            if(!collections.includes(E1.name))
                await graph.addVertexCollection('e1-crm-entity');
            if(!collections.includes(E24.name))
                await graph.addVertexCollection('e24-physical-human-made-thing');
            if(!collections.includes(E35.name))
                await graph.addVertexCollection('e35-title');
            if(!collections.includes(E42.name))
                await graph.addVertexCollection('e42-identifier');
            if(!collections.includes(E53.name))
                await graph.addVertexCollection('e53-place');
            if(!collections.includes(E70.name))
                await graph.addVertexCollection('e70-thing');

            const edge_collections = await graph.listEdgeCollections();
            if(!edge_collections.includes('p1-is-identified-by')){
                await graph.addEdgeDefinition({
                    collection: 'p1-is-identified-by',
                    from: ['e24-physical-human-made-thing'],
                    to: ['e42-identifier']
                });
            }
            if(!edge_collections.includes('p48-has-preferred-identifier')){
                await graph.addEdgeDefinition({
                    collection: 'p48-has-preferred-identifier',
                    from: ['e24-physical-human-made-thing'],
                    to: ['e42-identifier']
                });
            }

            if(!edge_collections.includes('p102-has-title')){
                await graph.addEdgeDefinition({
                    collection: 'p102-has-title',
                    from: ['e24-physical-human-made-thing'],
                    to: ['e35-title']
                });
            }

            if(!edge_collections.includes('p130-shows-features-of')){
                await graph.addEdgeDefinition({
                    collection: 'p130-shows-features-of',
                    from: ['e24-physical-human-made-thing'],
                    to: ['e70-thing']
                });
            }

            if(!edge_collections.includes('p156-occupies')){
                await graph.addEdgeDefinition({
                    collection: 'p156-occupies',
                    from: ['e24-physical-human-made-thing'],
                    to: ['e53-place']
                });
            }

        }
    }

main();
