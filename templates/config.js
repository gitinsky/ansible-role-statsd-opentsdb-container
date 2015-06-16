{
  backends: ['statsd-opentsdb-backend']
, opentsdbHosts: [{host: '{{ opentsdb_host }}', port: 4242}]
, opentsdbDeadHostRetry: 15
, opentsdbTagPrefix: '_t_'
, opentsdbTagValuePrefix: '_tv_'
, opentsdbDeadHostRetry: 15
}
