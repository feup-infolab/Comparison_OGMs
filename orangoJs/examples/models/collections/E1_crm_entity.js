module.exports = ({ orango }) => {
    const { OPERATIONS, SCHEMA } = orango.consts

    class E1_crm_entitySchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E1_crm_entitySchema({
        name: String,
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E1_crm_entity = orango.model('E1_crm_entity', schema)

    E1_crm_entity.findById = async function(id) {
        return await this.find().byId(id)
    }

    E1_crm_entity.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E1_crm_entity
}
