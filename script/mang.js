$(document).ready(function () {
    $.getJSON("../Json/data.json", function (data) {
        var items = [];
        $.each(data, function (index, data) {
            items.push('<div class="col-md-2" align="center">'+
                '<a target="_blank" href="http://media.vietq.vn/files/thn_ng_t_vit.jpg">'+
                '<img src='+data.image+' alt="Northern Lights" width="120" height="120">'+
                '</a>'+
                '<div class="col-md-2" align="center">'+data.name+'</div>'+
            '</div>');
        });
        $("#truyen").append(items);
    });
});