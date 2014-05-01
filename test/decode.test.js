var morton = require('../lib/morton');
var test = require('tap').test;

test('test decode morton codes', function(t) {
    t.deepEqual(morton.decode(0, morton.code(0, 0, 0)), [ 0, 0 ]);
    t.deepEqual(morton.decode(1, morton.code(1, 0, 0)), [ 0, 0 ]);
    t.deepEqual(morton.decode(10, morton.code(10, 0, 0)), [ 0, 0 ]);
    t.deepEqual(morton.decode(24, morton.code(24, 0, 0)), [ 0, 0 ]);

    t.deepEqual(morton.decode(1, morton.code(1, 1, 0)), [ 1, 0 ]);
    t.deepEqual(morton.decode(2, morton.code(2, 2, 0)), [ 2, 0 ]);
    t.deepEqual(morton.decode(3, morton.code(3, 4, 0)), [ 4, 0 ]);
    t.deepEqual(morton.decode(4, morton.code(4, 8, 0)), [ 8, 0 ]);
    t.deepEqual(morton.decode(5, morton.code(5, 16, 0)), [ 16, 0 ]);
    t.deepEqual(morton.decode(6, morton.code(6, 32, 0)), [ 32, 0 ]);
    t.deepEqual(morton.decode(7, morton.code(7, 64, 0)), [ 64, 0 ]);
    t.deepEqual(morton.decode(8, morton.code(8, 128, 0)), [ 128, 0 ]);
    t.deepEqual(morton.decode(9, morton.code(9, 256, 0)), [ 256, 0 ]);
    t.deepEqual(morton.decode(10, morton.code(10, 512, 0)), [ 512, 0 ]);
    t.deepEqual(morton.decode(11, morton.code(11, 1024, 0)), [ 1024, 0 ]);
    t.deepEqual(morton.decode(12, morton.code(12, 2048, 0)), [ 2048, 0 ]);
    t.deepEqual(morton.decode(13, morton.code(13, 4096, 0)), [ 4096, 0 ]);
    t.deepEqual(morton.decode(14, morton.code(14, 8192, 0)), [ 8192, 0 ]);
    t.deepEqual(morton.decode(15, morton.code(15, 16384, 0)), [ 16384, 0 ]);
    t.deepEqual(morton.decode(16, morton.code(16, 32768, 0)), [ 32768, 0 ]);
    t.deepEqual(morton.decode(17, morton.code(17, 65536, 0)), [ 65536, 0 ]);
    t.deepEqual(morton.decode(18, morton.code(18, 131072, 0)), [ 131072, 0 ]);
    t.deepEqual(morton.decode(19, morton.code(19, 262144, 0)), [ 262144, 0 ]);
    t.deepEqual(morton.decode(20, morton.code(20, 524288, 0)), [ 524288, 0 ]);
    t.deepEqual(morton.decode(21, morton.code(21, 1048576, 0)), [ 1048576, 0 ]);
    t.deepEqual(morton.decode(22, morton.code(22, 2097152, 0)), [ 2097152, 0 ]);
    t.deepEqual(morton.decode(23, morton.code(23, 4194304, 0)), [ 4194304, 0 ]);
    t.deepEqual(morton.decode(24, morton.code(24, 8388608, 0)), [ 8388608, 0 ]);

    t.deepEqual(morton.decode(1, morton.code(1, 1, 1)), [ 1, 1 ]);
    t.deepEqual(morton.decode(2, morton.code(2, 2, 2)), [ 2, 2 ]);
    t.deepEqual(morton.decode(3, morton.code(3, 4, 4)), [ 4, 4 ]);
    t.deepEqual(morton.decode(4, morton.code(4, 8, 8)), [ 8, 8 ]);
    t.deepEqual(morton.decode(5, morton.code(5, 16, 16)), [ 16, 16 ]);
    t.deepEqual(morton.decode(6, morton.code(6, 32, 32)), [ 32, 32 ]);
    t.deepEqual(morton.decode(7, morton.code(7, 64, 64)), [ 64, 64 ]);
    t.deepEqual(morton.decode(8, morton.code(8, 128, 128)), [ 128, 128 ]);
    t.deepEqual(morton.decode(9, morton.code(9, 256, 256)), [ 256, 256 ]);
    t.deepEqual(morton.decode(10, morton.code(10, 512, 512)), [ 512, 512 ]);
    t.deepEqual(morton.decode(11, morton.code(11, 1024, 1024)), [ 1024, 1024 ]);
    t.deepEqual(morton.decode(12, morton.code(12, 2048, 2048)), [ 2048, 2048 ]);
    t.deepEqual(morton.decode(13, morton.code(13, 4096, 4096)), [ 4096, 4096 ]);
    t.deepEqual(morton.decode(14, morton.code(14, 8192, 8192)), [ 8192, 8192 ]);
    t.deepEqual(morton.decode(15, morton.code(15, 16384, 16384)), [ 16384, 16384 ]);
    t.deepEqual(morton.decode(16, morton.code(16, 32768, 32768)), [ 32768, 32768 ]);
    t.deepEqual(morton.decode(17, morton.code(17, 65536, 65536)), [ 65536, 65536 ]);
    t.deepEqual(morton.decode(18, morton.code(18, 131072, 131072)), [ 131072, 131072 ]);
    t.deepEqual(morton.decode(19, morton.code(19, 262144, 262144)), [ 262144, 262144 ]);
    t.deepEqual(morton.decode(20, morton.code(20, 524288, 524288)), [ 524288, 524288 ]);
    t.deepEqual(morton.decode(21, morton.code(21, 1048576, 1048576)), [ 1048576, 1048576 ]);
    t.deepEqual(morton.decode(22, morton.code(22, 2097152, 2097152)), [ 2097152, 2097152 ]);
    t.deepEqual(morton.decode(23, morton.code(23, 4194304, 4194304)), [ 4194304, 4194304 ]);
    t.deepEqual(morton.decode(24, morton.code(24, 8388608, 8388608)), [ 8388608, 8388608 ]);

    for (var i = 0; i < 1024; i++) {
        var z = (Math.random() * 24) | 0;
        var x = (Math.random() * (1 << z)) | 0;
        var y = (Math.random() * (1 << z)) | 0;
        t.deepEqual(morton.decode(z, morton.code(z, x, y)), [ x, y ]);
    }
    t.end();
});
