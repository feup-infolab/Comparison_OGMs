module.exports = ({ orango }) => {
    const schema = new orango.Schema({
        message: String
    })

    schema.type('edge', {
        from: 'E24_physical_human_made_thing',
        to: ['E42_identifier']
    })

    return orango.model('P48_has_preferred_identifier', schema)
}

