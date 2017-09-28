$(document).ready(function() {
    'use stict';

    function snipFactory(resp) {
        console.log(resp);

        let $table = $('<table>');

        let code_list = resp.code.split('\n');

        for (let line of code_list) {
            let row = $('<tr>');
            let code = $('<tb>').text(line)

            row.append(code);
            table.append(row);
        }

        $('#first-section').append($table);

    }

    function getSnip() {
        let to_get = document.URL.split('/').pop();

        $.ajax({
            url: `http://127.0.0.1:8000/api/v1/snippets/${to_get}`,
            method: 'GET',
            success: function(resp) {
                snipFactory(resp);
            },
            error: function(err) {
                alert(err);
            }
        });
    }

    getSnip();


});
