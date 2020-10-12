const utils = {
    BASEURL: 'http://www.depuminsheng.com/museum/',
    getUrl: function() {
        let href = window.location.href;
        let BASEURL = utils.BASEURL;
        let URL = BASEURL+href.split('/')[href.split('/').length-1];
        return  URL
    }
}