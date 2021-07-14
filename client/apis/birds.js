import request from 'superagent'

const rootUrl = '/api/v1'

export function getRecentObs() {
    return request
        .get(rootUrl + '/ebirds/obs/recent/')
        .then(res => res.body)
        .catch(e => console.log(e))
}
