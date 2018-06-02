import request from 'request';
import log from 'log';
import chalk from 'chalk';
import tiki from './tiki';

export default function getDetailFromId(id) {
    const url = `https://tiki.vn/p${id}.html`;
    log({
        id: id,
        url: url,
    }, {
        title: 'Đường dẫn',
        color: chalk.blue,
        length: 40,
        middle: true,
    });

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            log(tiki(body), {
                title: 'Nội dung',
                color: chalk.yellow,
                length: 40,
                middle: true
            });
        }
    });
}
