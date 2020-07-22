module.exports = ({orango}) => {
    const {OPERATIONS, SCHEMA} = orango.consts

    class E24_physical_human_made_thingSchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E24_physical_human_made_thingSchema({
        name: {type: String, required: true},
    }, {
        strict: true
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E24_physical_human_made_thing = orango.model('E24_physical_human_made_thing', schema)

    E24_physical_human_made_thing.findById = async function (id) {
        return await this.find().byId(id)
    }

    E24_physical_human_made_thing.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E24_physical_human_made_thing
}
