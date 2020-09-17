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

    class E1_CRM_Entity{
        constructor(graph1,collectionName) {
            this.graph1 = graph1;
            this.collectionName = collectionName
        }
        async saveNode(name) {
            const collections = await this.graph1.listVertexCollections();
            const E1 = this.graph1.vertexCollection(this.collectionName);
            if (!collections.includes(E1.name))
                await this.graph1.addVertexCollection(this.collectionName);


            return await E1.save({name: name});
        }



}

class E24_Physical_Human_Made_Thing {
    constructor(graph1,collectionName) {
        this.graph1 = graph1;
        this.collectionName = collectionName
    }

    async saveNode(name) {
        const collections = await this.graph1.listVertexCollections();
        const E24 = this.graph1.vertexCollection( this.collectionName);
        if (!collections.includes(E24.name))
            await this.graph1.addVertexCollection(this.collectionName);


        return await E24.save({name: name});
    }
}

class E35_Title {
    constructor(graph1,collectionName) {
        this.graph1 = graph1;
        this.collectionName = collectionName
    }

    async saveNode(name) {
        const collections = await this.graph1.listVertexCollections();
        const E35 = this.graph1.vertexCollection( this.collectionName);
        if (!collections.includes(E35.name))
            await this.graph1.addVertexCollection(this.collectionName);


        return await E35.save({name: name});
    }



}

class E42_Identifier {
    constructor(graph1,collectionName) {
        this.graph1 = graph1;
        this.collectionName = collectionName
    }

    async saveNode(name) {
        const collections = await this.graph1.listVertexCollections();
        const E42 = this.graph1.vertexCollection(this.collectionName);
        if (!collections.includes(E42.name))
            await this.graph1.addVertexCollection(this.collectionName);


        return await E42.save({name: name});
    }

}

class E53_Place {
    constructor(graph1,collectionName) {
        this.graph1 = graph1;
        this.collectionName = collectionName
    }

    async saveNode(name) {
        const collections = await this.graph1.listVertexCollections();
        const E53 = this.graph1.vertexCollection( this.collectionName);
        if (!collections.includes(E53.name))
            await this.graph1.addVertexCollection(this.collectionName);


        return await E53.save({name: name});
    }
}

class E70_Thing {
    constructor(graph1,collectionName) {
        this.graph1 = graph1;
        this.collectionName = collectionName
    }

    async saveNode(name) {
        const collections = await this.graph1.listVertexCollections();
        const E70 = this.graph1.vertexCollection( this.collectionName);
        if (!collections.includes(E70.name))
            await this.graph1.addVertexCollection(this.collectionName);


        return await E70.save({name: name});
    }
}


let P1 = {
    async p1(e1,e42){
        const edge_collections = await this.graph1.listEdgeCollections();
        if(!edge_collections.includes('p1-is-identified-by')){
            await this.graph1.addEdgeDefinition({
                collection: 'p1-is-identified-by',
                from: ['e1-crm-entity'],
                to: ['e42-identifier']
            });
        }

        const collection = this.graph1.edgeCollection("p1-is-identified-by");
        const edge = await collection.save(
            { some: "data3" },
            e1._id,
            e42._id
        );
    }
};

let P48 = {
    async p48(e1,e42){
        const edge_collections = await this.graph1.listEdgeCollections();
        if(!edge_collections.includes('p48-has-preferred-identifier')){
            await this.graph1.addEdgeDefinition({
                collection: 'p48-has-preferred-identifier',
                from: ['e1-crm-entity'],
                to: ['e42-identifier']
            });
        }

        const collection = this.graph1.edgeCollection("p48-has-preferred-identifier");
        const edge = await collection.save(
            { some: "data3" },
            e1._id,
            e42._id
        );
    }
};

let P102 = {
    async p102(e24,e35){
        const edge_collections = await this.graph1.listEdgeCollections();
        if(!edge_collections.includes('p102-has-title')){
            await this.graph1.addEdgeDefinition({
                collection: 'p102-has-title',
                from: ['e24-physical-human-made-thing'],
                to: ['e35-title']
            });
        }

        const collection = this.graph1.edgeCollection("p102-has-title");
        const edge = await collection.save(
            { some: "data3" },
            e24._id,
            e35._id
        );
    }
};

let P130 = {
    async p130(e24,e70){
        const edge_collections = await this.graph1.listEdgeCollections();
        if(!edge_collections.includes('p130-shows-features-of')){
            await this.graph1.addEdgeDefinition({
                collection: 'p130-shows-features-of',
                from: ['e24-physical-human-made-thing'],
                to: ['e70-thing']
            });
        }

        const collection = this.graph1.edgeCollection("p130-shows-features-of");
        const edge = await collection.save(
            { some: "data3" },
            e24._id,
            e70._id
        );
    }
};

let P156 = {
    async p156(e24,e53){
        const edge_collections = await this.graph1.listEdgeCollections();
        if(!edge_collections.includes('p156-occupies')){
            await this.graph1.addEdgeDefinition({
                collection: 'p156-occupies',
                from: ['e24-physical-human-made-thing'],
                to: ['e53-place']
            });
        }

        const collection = this.graph1.edgeCollection("p156-occupies");
        const edge = await collection.save(
            { some: "data3" },
            e24._id,
            e53._id
        );
    }
};

Object.assign(E1_CRM_Entity.prototype, P1);
Object.assign(E24_Physical_Human_Made_Thing.prototype, P1);
Object.assign(E35_Title.prototype, P1);
Object.assign(E53_Place.prototype, P1);
Object.assign(E70_Thing.prototype, P1);
Object.assign(E42_Identifier.prototype, P1);

Object.assign(E1_CRM_Entity.prototype, P48);
Object.assign(E24_Physical_Human_Made_Thing.prototype, P48);
Object.assign(E35_Title.prototype, P48);
Object.assign(E53_Place.prototype, P48);
Object.assign(E70_Thing.prototype, P48);
Object.assign(E42_Identifier.prototype, P48);

Object.assign(E24_Physical_Human_Made_Thing.prototype, P102);
Object.assign(E35_Title.prototype, P102);
Object.assign(E42_Identifier.prototype, P102);

Object.assign(E24_Physical_Human_Made_Thing.prototype, P130);
Object.assign(E35_Title.prototype, P130);
Object.assign(E42_Identifier.prototype, P130);

Object.assign(E24_Physical_Human_Made_Thing.prototype, P156);


async function experiment2() {
    const graph = db.graph('experiment-graph2');
    const result = await graph.exists();
    if (result) {
        const data = await graph.get();
        console.log(data);
    } else {
        const info = await graph.create({
            edgeDefinitions: [{
                collection: 'edges',
                from: ['start-vertices'],
                to: ['end-vertices']
            }]
        });

    }
    const E1Col = new E1_CRM_Entity(graph,'e1-crm-entity');
    const E24Col = new E24_Physical_Human_Made_Thing(graph,'e24-physical-human-made-thing');
    const E35Col = new E35_Title(graph,'e35-title');
    const E53Col = new E53_Place(graph,'e53-place');
    const E42Col = new E42_Identifier(graph,'e42-identifier');
    const E70Col = new E53_Place(graph,'e70-thing');

    const doc = await E1Col.saveNode("E1 of Test");
    const doc1 = await E24Col.saveNode("Tokyo Tower");
    const doc2 = await E42Col.saveNode("Id1");
    const doc3 = await E42Col.saveNode("Id2");
    const doc4 = await E35Col.saveNode("Tokyo Tower");
    const doc5 = await E53Col.saveNode("Tokyo");
    const doc6 = await E70Col.saveNode("Eiffel Tower");


    await E24Col.p1(doc1, doc2);
    await E24Col.p1(doc1,doc3);
    await E24Col.p48(doc1,doc2);
    await E24Col.p48(doc1,doc3);
    await E24Col.p102(doc1,doc4);
    await E24Col.p130(doc1,doc);
    await E24Col.p130(doc1,doc6);
    await E24Col.p156(doc1,doc5);





}

experiment2();
