module.exports = ({ orango }) => {
    const schema = new orango.Schema({
        message: String
    })

    schema.type('edge', {
        from: 'E24_physical_human_made_thing',
        to: ['E53_place']
    })

    return orango.model('P156_occupies', schema)
}

