import { key } from './colours.js';

const encode = (message, ctx, vertical = false, width = 30, height = 30, x = 0, y = 0) => {
    if (typeof message !== 'string') {
        throw new TypeError('You can only encode a String.');
    }
    if (!(ctx instanceof CanvasRenderingContext2D)) {
        throw new TypeError('You must supply a 2D canvas context.');
    }
    if (Number.isNaN(width) || Number.isNaN(height)) {
        throw new TypeError('Dimensions must be valid numbers.');
    }
    if (Number.isNaN(x) || Number.isNaN(y)) {
        throw new TypeError('Coordinates must be valid numbers.');
    }

    message = message.toUpperCase();
    for (let i = 0; i < message.length; ++i) {
        let char = message[i];
        if (!(char in key)) continue;
        let colours = [].concat(key[char]);
        if (i < message.length - 1) {
            let next = message[i + 1];
            if (parseInt(char, 10) == char && parseInt(next, 10) == next) {
                colours.push(key[next]);
                ++i;
            }
        }
        let block_dim = vertical ? width/colours.length : height/colours.length;
        if (!vertical) colours.reverse();
        for (let c in colours) {
            ctx.fillStyle = colours[c];
            if (vertical) {
                ctx.fillRect(x+c*block_dim, y, block_dim, height);
            } else {
                ctx.fillRect(x, y+c*block_dim, width, block_dim);
            }
        }
        if (vertical) {
            y += height;
        } else {
            x += width;
        }
    }
};

export { encode };
