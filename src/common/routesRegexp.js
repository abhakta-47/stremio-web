const routesRegexp = {
    intro: {
        regexp: /^\/intro\/?$/i,
        urlParamsNames: []
    },
    board: {
        regexp: /^\/?$/i,
        urlParamsNames: []
    },
    discover: {
        regexp: /^\/discover(?:\/([^\/]+?)\/([^\/]+?)\/([^\/]+?))?\/?$/i,
        urlParamsNames: ['addonTransportUrl', 'catalogId', 'type']
    },
    library: {
        regexp: /^\/library(?:\/([^\/]*?))?\/?$/i,
        urlParamsNames: ['type']
    },
    search: {
        regexp: /^\/search\/?$/i,
        urlParamsNames: []
    },
    detail: {
        regexp: /^\/detail\/(?:([^\/]+?))\/(?:([^\/]+?))(?:\/([^\/]*?))?\/?$/i,
        urlParamsNames: ['type', 'id', 'videoId']
    },
    addons: {
        regexp: /^\/addons(?:\/([^\/]*?))?(?:\/([^\/]*?))?\/?$/i,
        urlParamsNames: ['category', 'type']
    },
    settings: {
        regexp: /^\/settings\/?$/i,
        urlParamsNames: []
    },
    player: {
        regexp: /^\/player\/(?:([^\/]+?))\/(?:([^\/]+?))\/(?:([^\/]+?))\/(?:([^\/]+?))\/?$/i,
        urlParamsNames: ['type', 'id', 'videoId', 'stream']
    }
};

module.exports = routesRegexp;
