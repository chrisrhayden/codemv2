'use strict';

$(document).ready(function() {

    function buildCode(obj) {

        let sec = document.getElementById('second-section');
        let code = obj[0].code;
        alert(obj[0].code);

        let made_code = {
            view: function() {
                return m('div', {class: 'ano-code'}, [
                    m('pre', [
                        m('code', code),
                    ])
                ]);
            }
        };

        m.mount(sec, made_code);
    }  // func buildCode

    m.request({
        method: 'GET',
        url: `/api/v1/annotations`
    }).then(function(resp) {
        console.log(resp);
        buildCode(resp);
    });
});
