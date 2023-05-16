function generarTabla() {
  fetch('https://www.el-tiempo.net/api/json/v2/home')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  var table = "<tr><th>CIUDAD</th><th>MAXIMAS</th><th>MINIMAS</th><th>ESTADO</th></tr>";
  data.ciudades.forEach(item => {
    table += "<tr><td>" +
      item.name +
      "</td><td>" +
      item.temperatures.max +
      "</td><td>" +
      item.temperatures.min +
      "</td><td>" +
      item.stateSky.description +
      "</td></tr>";
});

  document.getElementById("table").innerHTML += table;
});
}