import { init as initApm } from 'elastic-apm-js-base'
const serviceName = 'frontend'
const ELASTIC_APM_SERVER_URL = process.env.ELASTIC_APM_SERVER_URL
const ORIGINS = window.location.protocol + '//' + window.location.host + ':' + window.location.port

export default {
  install (Vue, options) {
    const apm = initApm({
      serviceName: serviceName,
      serverUrl: ELASTIC_APM_SERVER_URL,
      serviceVersion: '',
      distributedTracingOrigins: [ ORIGINS ]
    })
    apm.setInitialPageLoadName('frontend')
  }
}
