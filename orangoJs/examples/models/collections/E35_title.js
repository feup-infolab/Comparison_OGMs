module.exports = ({orango}) => {
    const {OPERATIONS, SCHEMA} = orango.consts

    class E35_titleSchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E35_titleSchema({
        name: {type: String, required: true},
    }, {
        strict: true
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E35_title = orango.model('E35_title', schema)

    E35_title.findById = async function (id) {
        return await this.find().byId(id)
    }

    E35_title.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E35_title
}
