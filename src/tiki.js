import turndown from 'turndown';
import toMarkdown from "./toMarkdown";
import getDOM from './getDOM';

/**
 *
 * @param {String} body
 */
export default function(body) {
    const $ = getDOM(body);

    return {
        publisher: get($, "publisher_vn"),
        manufacturer: get($, "manufacturer_book_vn"),
        author: get($, "author"),
        dimensions: get($, "dimensions"),
        book_cover: get($, "book_cover"),
        number_of_page: get($, "number_of_page"),
        publication_date: get($, "publication_date"),
        sku: get($, "sku"),
        description: {
            md: toMarkdown($("#gioi-thieu").html())
        },
        image: {
            url: body
                .replace(/[^]+"large_url":"([^\"]+)"[^]+/g, "$1")
                .replace(/\\/g, "")
        },
        name: $('#product-name').text().trim(),
        price: parseInt($('#span-price').text().replace(/[^0-9]/, ''), ),
        real_price: parseInt($('#span-list-price').text().replace(/[^0-9]/, ''), ),
    };
}

function get($, id) {
    return $(`td[rel=${id}]+td`).text().trim().replace(/\s\s/g, "");
}
