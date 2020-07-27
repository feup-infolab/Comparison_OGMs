module.exports = ({orango}) => {
    const {OPERATIONS, SCHEMA} = orango.consts

    class E53_placeSchema extends orango.Schema {
        get getName() {
            return this.name;
        }
    }

    const schema = new E53_placeSchema({
        name: {type: String, required: true},
    }, {
        strict: true
    })

    schema.addIndex(SCHEMA.INDEX.HASH, 'name')

    const E53_place = orango.model('E53_place', schema)

    E53_place.findById = async function (id) {
        return await this.find().byId(id)
    }

    E53_place.on(OPERATIONS.INSERT, async model => {
        model.foo = 'bar' // invalid data will stripped
    })

    return E53_place
}
