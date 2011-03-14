# NAME

node-morton - Calculates morton numbers for spatial indexing.



# USAGE

Install with `npm install morton`.

    var morton = require('morton');
    
    morton(32, 436);

Note: input numbers must be smaller than 2^24 (16777216). Since the resulting output has twice as many bits, you'll get back numbers that are up to 2^48 (281474976710656). JavaScript can still represent these numbers without losing precision, however, you can't use bitwise operators on these numbers if your input numbers are potentially bigger than 2^15 (32768) because JavaScript only supports bitwise operators on 32 bit signed integers.

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
