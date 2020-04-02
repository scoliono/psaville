import { key } from './colours.js';

const encode = (message, ctx, width = 30, height = 30, x = 0, y = 0) => {
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
    for (let char of message) {
        if (!(char in key)) continue;
        let colours = key[char];
        if (Array.isArray(colours)) {
            let block_height = height/colours.length;
            for (let i in colours) {
                ctx.fillStyle = colours[i];
                ctx.fillRect(x, y+i*block_height, width, block_height);
            }
        } else {
            ctx.fillStyle = colours;
            ctx.fillRect(x, y, width, height);
        }
        x += width;
    }
};

export { encode };
