fetch('https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json')
    .then(res => res.json())
    .then(data => display(data))
function display(d) {
    let table = document.getElementById("table");
    let Info = " <h1>Employees with Salary > 50000 are:</h1><p>";
    let Join = " <h1>Employees who joined in December are:</h1><p>";
    let text_table = '<table>' +
        ' <thead>' +
        '<tr>';
    Object.keys(d.Employees[0]).forEach(n => {
        text_table += '<th>' + n + '</th>'
    })
    text_table += '</tr>' +
        '</thead>' +
        '<tbody>';
    d.Employees.forEach(n => {
        text_table += '<tr>' +
            '<td>' + n.Name + '</td>' +
            '<td>' + n.Address + '</td>' +
            '<td>' + n.Salary + '</td>' +
            '<td>' + n.DateOfJoining + '</td>' +
            '</tr>';
            if(n.Salary>50000)
                Info+=n.Name+'<br>';
            if(n.DateOfJoining.split('-')[1]=='12')
                Join+=n.Name+'<br>';
    })
    text_table +='</tbody>'+'</table>';
    table.innerHTML = text_table;
    Info+='</p>'
    Join+='</p>'
    document.body.innerHTML+=Info;
    document.body.innerHTML+=Join;
    d.Employee[0].forEach(n => {
        console.log(n);
    })
}