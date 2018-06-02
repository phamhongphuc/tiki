import turndown from 'turndown';
const Turndown = new turndown();

export default function(html) {
    return Turndown.turndown(html).replace(/\n\n/g, "\n");
}
