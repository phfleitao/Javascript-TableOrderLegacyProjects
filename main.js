const arrowDesc = "img/arrow_down.png";
const arrowAsc = "img/arrow_up.png";

var lastOrderField = "CODIGO";
var lastOrderDirection = "ASC";
var orderField = "CODIGO_ASC"

function onStart()
{
    loadData();
}

function loadData(){
    produtos = getProdutos(orderField);
    loadTableWithData(produtos);
}

function loadTableWithData(data){
    var table = document.getElementById("tbl");
    var tbody = table.getElementsByTagName("tbody")[0];
    var tr = '';
    for(i = 0;i < data.length; i++){
        tr += '<tr>';
            tr += '<td>' + data[i].codigo + '</td>';
            tr += '<td>' + data[i].produto + '</td>';
            tr += '<td>' + data[i].categoria + '</td>';
        tr += '</tr>';
    }
    tbody.innerHTML = tr;
}

function orderByHeader(obj, field)
{
    var imgArrow = obj.getElementsByTagName("img")[0];

    removeArrowsFromTable();

    if(field == lastOrderField)
    {
        if(lastOrderDirection == 'ASC')
        {
            lastOrderDirection = 'DESC';
            imgArrow.src = arrowDesc;
        }
        else
        {
            lastOrderDirection = 'ASC';
            imgArrow.src = arrowAsc;
        }
    }
    else
    {
        lastOrderField = field;
        lastOrderDirection = 'ASC';
        imgArrow.src = arrowAsc;
    }

    //reload
    orderField = lastOrderField + '_' + lastOrderDirection;
    loadData();
}

function removeArrowsFromTable()
{
    var table = document.getElementById("tbl");
    var tableHeader = table.getElementsByTagName('thead')[0];
    var headers = tableHeader.getElementsByTagName('th');

    for(var i = 0; i < headers.length; i++){
        var img = headers[i].getElementsByTagName("img")[0];
        img.src = "";
    }    
}