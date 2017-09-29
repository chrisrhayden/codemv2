$(document).ready(() => {
    'use stict';

    function anoFactory(resp) {
        let code_text = resp.code;
        let line_begin = resp.line_begin;

        let row = $('<tr>', {'class': 'ano-row'}).hide();

        let pre = $('<pre>');
        let code = $('<code>').text(code_text);
        pre.append(code);

        let tdone = $('<td>').text(' ');
        let tdtwo = $('<td>');
        tdtwo.append(pre);

        row.append(tdone);
        row.append(tdtwo);

        console.log(row);
        $(`#line-${line_begin}`).before(row);
    }


    function getAno() {
        /*
        $.ajax({
            url: '/api/v1/annotations/1/',
            method: 'GET',
            success: (resp) => {
                console.log(resp);
                anoFactory(resp);
            },
            error: (err) => {
                alert(err);
            }
        });
        */

        let myUrl = '/api/v1/annotations/1/';
        let myHeaders = new Headers();
        let myInit = {
            method: 'GET',
            headers: myHeaders
        };

        fetch(myUrl, myInit).then((resp) => {
            return resp.json();
        }).then((data) => {
            anoFactory(data);
        }).catch((err) => {
            console.log(err);
        });

    }


    function snipFactory(resp) {
        let $table = $('<table>');

        let code_list = resp.code.split('\n');

        let counter = 1;
        for (let line of code_list) {
            let row = $('<tr>', {
                'class': 'code-row',
                'data-line': counter,
                'id': `line-${counter}`
            });

            let tdone = $('<td>', {'class': 'counter'}).text(counter);
            row.append(tdone)

            let tdtwo = $('<td>');

            let pre = $('<pre>');
            let code = $('<code>').text(line)

            pre.append(code);
            tdtwo.append(pre);

            row.append(tdtwo);
            row.css({
                'display': 'table'
            });

            row.on('click', (evt) => {
                let prev = $(evt.target).parents('tr').prev();
                console.log('prev');
                console.log(prev);

                if (prev.attr('class') === 'ano-row') {
                    prev.css({
                        'display': 'table'
                    });
                }
            });

            $table.append(row);
            counter++;
        }

        $('#first-section').append($table);
    }


    function getSnip() {
        let to_get = document.URL.split('/').pop();

        /*
        $.ajax({
            url: `/api/v1/snippets/${to_get}/`,
            method: 'GET',
            success: (resp) => {
                snipFactory(resp);
                getAno();
            },
            error: (err) => {
                alert(err);
            }
        });*/

        let myUrl = `/api/v1/snippets/${to_get}/`;

        let myHeaders = new Headers();

        let myInit = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch(myUrl, myInit).then((resp) => {
            return resp.json();
        }).then((data) => {
            snipFactory(data);
        }).then(() => {
            getAno();
        }).then(() => {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }).catch((err) => {
            alert(err);
        });
    }


    getSnip();



});
