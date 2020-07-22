module.exports = ({ orango }) => {
    const schema = new orango.Schema({
        message: String
    })

    schema.type('edge', {
        from: 'E24_physical_human_made_thing',
        to: ['E35_title']
    })

    return orango.model('P102_has_title', schema)
}

