
$(document).ready(function() {

    function buildText(obj) {
        let text = obj[0].text

        let $sec = $('#second-section');

        let made_text = {
            view: function() {
                return m('div', [
                    m('p', text),
                ])
            }
        }

        m.mount($sec, made_text);
    }

    m.request({
        method: 'GET',
        url: 'api/v1/comments'
    }).then(function(resp) {
        console.log(resp);
        buildText(resp);
    });

})
