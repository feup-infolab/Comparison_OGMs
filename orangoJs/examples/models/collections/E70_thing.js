module.exports = ({ orango }) => {
    const { OPERATIONS, SCHEMA } = orango.consts

    class E70_thingSchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E70_thingSchema({
        name: String,
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E70_thing = orango.model('E70_thing', schema)

    E70_thing.findById = async function(id) {
        return await this.find().byId(id)
    }

    E70_thing.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E70_thing
}
