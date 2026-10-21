const NodeMediaServer = require('node-media-server');

const config ={
    rtmp:{
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_tumeout: 60
    },
    http:{
        port:3000,
        mediaroot: './media',
        allow_origin: '*'
    },
    trans:{
        ffmpeg: 'ffmpeg',
        tasks:[
            {
              app: 'live',
              his: true,
              hlsFlags:'[hls_time=2:his_list_size=3:hls_flags=delete_segments]',
              hlsCustomCmd: '-m3u8_hold_counters 5'
            }
        ]
    }
};
var nms = new NodeMediaServer(config);
nms.run();
console.log('Live streaming server started on port 3000');