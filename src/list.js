import request from 'request';
import cheerio from 'cheerio';
import getDOM from './getDOM';
import eachBook from "./eachBook";

getListIdFromUrl('https://tiki.vn/bestsellers-month/nha-sach-tiki/c8322?p=2');

/**
 * 
 * @param {String} url 
 */
function getListIdFromUrl(url) {
    const data = [];

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const $ = getDOM(body);
            $("[data-id]")
                .each((i, e) => data.push($(e).attr("data-id")))
        }

        console.log(data);
        data.forEach(element => {
            eachBook(element);
        });
    });
}
