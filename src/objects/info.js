// To parse the info object
function parse(info){

    // To store the info object
    const res = [] 

    if (info !== null && typeof info === 'object') {

        res.push(`--- \n`)

        // Set the title of the doc
        if ('title' in info) {
            res.push(`title: ${info.title} \n`)
        }

        // Set the language tab
        res.push(`language_tabs: \n   - json \n`)
        
        // Include the search options
        res.push(`search: true \n`)

        res.push(`--- \n`)

        // Introduction part
        res.push(`# Introduction \n`)

        if ('description' in info) {
            res.push(`${info.description} \n`) 
        }

        if ('version' in info) {
            res.push(`**Version:** ${info.version} \n`) 
        }

    }
    return res.length ? res.join('\n') : null 
}

// Export the parse object
module.exports = {parse}
