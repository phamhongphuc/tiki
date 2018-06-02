import cheerio from 'cheerio';

/**
 * 
 * @param {String} body 
 */
export default function(body) {
    return cheerio.load(body, {
        xmlMode: true,
        decodeEntities: false
    });
}
