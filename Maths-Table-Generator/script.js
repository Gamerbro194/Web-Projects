function generateTable() {
    const number = document.getElementById('number').value;
    const rows = document.getElementById('rows').value;

    let table = '<table><thead><tr><th>Multiplicand</th><th>Multiplier</th><th>Product</th></tr></thead><tbody>';

    for (let i = 1; i <= rows; i++) {
        table += `<tr><td>${number}</td><td>${i}</td><td>${number * i}</td></tr>`;
    }

    table += '</tbody></table>';

    document.getElementById('table-container').innerHTML = table;
}