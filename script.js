function Formdata(data){

    let isNotValid = false;
    let sendForm = [];

    if (data.name.value == null || data.name.value.length < 3 )
    {
        data.name.style.backgroundColor = 'pink';
        isNotValid = true;
    } else {
        data.name.style.border = '1px solid green';
        sendForm.push('right');
    }

    const testBirthday = /^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/;
    if (data.birthday.value == null || data.birthday.value.length < 10 || !testBirthday.test(data.birthday.value))
    {
        data.birthday.style.backgroundColor = 'pink';
        isNotValid = true;
    } else {
        data.birthday.style.border = '1px solid green';
        sendForm.push('right');
    }

    if (data.address == null || data.address.value.length < 5 )
    {
        data.address.style.backgroundColor = 'pink';
        isNotValid = true;
    } else {
        data.address.style.border = '1px solid green';
        sendForm.push('right');
    }

    const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(data.email == null || data.email.value.length < 3 || !testEmail.test(data.email.value))
    {
        data.email.style.backgroundColor = 'pink';
        isNotValid = true;
    } else {
        data.email.style.border = '1px solid green';
        sendForm.push('right');
    }
    
    const testTelegram = /^@[a-zA-Z0-9_][a-zA-Z0-9_.]*/;

    if (data.telegram == null || data.telegram.value.length < 2 || !testTelegram.test(data.telegram.value))
    {
        data.telegram.style.backgroundColor = 'pink';
        isNotValid = true;
    } else {
        data.telegram.style.border = '1px solid green';
        sendForm.push('right');
    }

    if(sendForm.length == 5){
        alert('ПІБ: ' + data.name.value + '\nДата народження: ' + data.birthday.value + '\nАдреса: ' + data.address.value + '\nЕлектронна пошта: ' + data.email.value + '\nТелеграм: ' + data.telegram.value);
    }
    return false;
}

function tableCreate() {
    let count = 1;
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.setAttribute('border', '1');
    tbl.setAttribute('id', 'table1')
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 6; i++) {
    var tr = document.createElement('tr');
        for (var j = 0; j < 6; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(count))
            tr.appendChild(td)
            count++;
         }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
tableCreate();

function changeColorOnRandom(){
    let table = document.getElementById("table1");

    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if(table.rows[r].cells[c].innerHTML == '6'){
                table.rows[r].cells[c].onmouseover=function(){
                this.style.backgroundColor='#' + Math.floor(Math.random()*16777215).toString(16);
                randomColor = this.style.backgroundColor;
                }
            

            table.rows[r].cells[c].onmouseout=function(){
                this.style.backgroundColor='#ffff';
            }
            
            table.rows[r].cells[c].onclick=function(){
                const valueofPalit = document.getElementById('palit');
                this.style.backgroundColor = valueofPalit.value;
                palitColor = this.style.backgroundColor;
            }
        }
            if(table.rows[r].cells[c].innerHTML == '6'){
            table.rows[r].cells[c].ondblclick=function(){
                const valueofPalit = document.getElementById('palit');
                for (let i = 0; i < 3; i++) {
                    for(let j = 4; j < 6; j++) {
                        table.rows[i].cells[j].style.backgroundColor = valueofPalit.value;
                    }
                }
            }
            }
        }
    }
}
changeColorOnRandom();