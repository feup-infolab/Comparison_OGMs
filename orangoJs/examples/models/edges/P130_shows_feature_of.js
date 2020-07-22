module.exports = ({ orango }) => {
    const schema = new orango.Schema({
        message: String
    })

    schema.type('edge', {
        from: 'E24_physical_human_made_thing',
        to: ['E70_thing']
    })

    return orango.model('P130_shows_feature_of', schema)
}

