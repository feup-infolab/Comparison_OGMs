module.exports = ({ orango }) => {
    const { OPERATIONS, SCHEMA } = orango.consts

    class E42_identifierSchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E42_identifierSchema({
        name: String,
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E42_identifier = orango.model('E42_identifier', schema)

    E42_identifier.findById = async function(id) {
        return await this.find().byId(id)
    }

    E42_identifier.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E42_identifier
}
