# ![](./example/psaville.png) (psaville)

![npm](https://img.shields.io/npm/v/psaville)

A tiny npm package that can colour-code strings, inspired by the work of graphic designer Peter Saville.

I made this package in response to [int-72h](https://github.com/int-72h), who did it in Python first.

## Usage

This module is intended to be run in the browser, and it draws the result on an HTML canvas. It exports one method:

### `encode(message, ctx, vertical = false, width = 30, height = 30, x = 0, y = 0)`

Use it like so:

```html
<canvas width="300" height="30"></canvas>
<script type="module">
    import { encode } from './psaville.js';
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    encode('Hello world', ctx);
</script>
```

and you get:

![](./example/helloworld.png)

What if you set `vertical` to `true`?

![](./example/helloworld-vert.png)

Note that by design, the colour-coding does not differentiate between uppercase and lowercase, and it omits any unrecognized characters. Also, if there are two digits in a row, they get stacked into one block. This introduces ambiguity; any letter will look identical to the number corresponding with its position in the alphabet. I don't make the rules I just enforce them
