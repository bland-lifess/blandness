self.__uv$config = {
    prefix: '/blandness/service/', // Make sure your repo name is here
    bare: 'https://uv.radon.games/', // Or another working bare server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/blandness/uv/uv.handler.js',
    bundle: '/blandness/uv/uv.bundle.js',
    config: '/blandness/uv/uv.config.js',
    sw: '/blandness/uv-sw.js', // Points to the file you moved
}
