# NAME

node-morton - Calculates morton numbers and Z-order codes for spatial indexing.



# USAGE

Install with `npm install morton`.

    var morton = require('morton');

    morton(32, 436);          // => 167456

    morton.code(1, 0, 1);     // => 140737488355328
    morton.code(2, 0, 2);     // => 140737488355328
    morton.code(3, 0, 4);     // => 140737488355328
    morton.code(4, 0, 8);     // => 140737488355328

    morton.range(1, 0, 0);    // => [              0,   70368744177663 ]
    morton.range(1, 1, 0);    // => [  70368744177664, 140737488355327 ]
    morton.range(1, 0, 1);    // => [ 140737488355328, 211106232532991 ]
    morton.range(1, 1, 1);    // => [ 211106232532992, 281474976710655 ]

Note: input numbers must be smaller than 2^24 (16777216). Since the resulting output has twice as many bits, you'll get back numbers that are up to 2^48 (281474976710656). JavaScript can still represent these numbers without losing precision, however, you can't use bitwise operators on these numbers if your input numbers are potentially bigger than 2^15 (32768) because JavaScript only supports bitwise operators on 32 bit signed integers.

`morton.code(z, x, y)` returns a 48-bit Z-order code.

`morton.range(z, x, y)` will return an array of the lower and upper bound of the Z-order rectangle. See also [Z-order curves](http://en.wikipedia.org/wiki/Z-order_curve) in Wikipedia.

`[x, y] = morton.reverse(c)` reverses `c = morton(x, y)`.

`[x, y] = morton.decode(z, c)` reverses `c = morton.code(z, x, y)`.

# TESTS

[expresso](https://github.com/visionmedia/expresso) is required to run unit tests.

    npm install expresso
    expresso



# CONTRIBUTORS

* [Konstantin Käfer](https://github.com/kkaefer)



# ACKNOWLEDGEMENTS

Thanks to [Sean Eron Anderson](http://graphics.stanford.edu/~seander/) for his [Bit Twiddling Hacks](http://graphics.stanford.edu/~seander/bithacks.html) page.



# LICENSE

`node-morton` is [BSD licensed](https://github.com/developmentseed/node-morton/raw/master/LICENSE).
