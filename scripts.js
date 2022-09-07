$(document).ready(function () {
    $.ajax({
        method : 'GET',
        url : 'http://api.open-notify.org/astros.json',
        success : function (result) {
            $('#loading').hide();
            $('#result').show();
            $('#number').html(result.number);

            var contents = '';
            for (var i = 0; i < 10; i++) {
                contents += `
                    <div class="person">
                        <h1> name </h1>
                        <h2> craft </h2>
                    </div>
                `;
            }

            $('#people').html(contents);
        }
    });
});
