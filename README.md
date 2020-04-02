# ![](./example/psaville.png) (psaville)

![npm](https://img.shields.io/npm/v/psaville)

A tiny npm package that can colour-code strings, inspired by the work of graphic designer Peter Saville.

I made this package in response to [int-72h](https://github.com/int-72h), who did it in Python first.

## Usage

This module is intended to be run in the browser. It exports one method:

### `encode(message, ctx, width = 30, height = 30, x = 0, y = 0)`

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

![](./example/helloworld.png)

Note that by design, the colour-coding does not differentiate between uppercase and lowercase, and it omits any non-alphanumeric character.
