const SHEET_ID = "1kjCoyRyVpYtSUCLS4p3TpkkAwq1bSO1tsafmdNdk2S4";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXP7hs5aOCtJMYsAx7bW_2UPj2sfAZ_V5NsA9mbGF-KnKxqvjqU7EgGZuW0nL8LPJNtUeyPc3gGvQ-8G4DbwSX7vx86h14IMtsKPp49Am3kvVV_2VLpM6en62Gvt1WPeipL5bXgikalLcziyVW4pZTqqaCgYKATASARASFQEjDvL9GkZeQTZgYthBiwiH9Q9uKA0163";
  
fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/1kjCoyRyVpYtSUCLS4p3TpkkAwq1bSO1tsafmdNdk2S4/values/almuerzo!A2:J`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
)

.then(function (response) {
  //esperamos el json del response para poder utilizarlo
  response.json().then(function (data) {
  const values = data.values;

  // Obtenemos el elemento del dom
  const lista = document.getElementById("lista-menu");

  for (var i = 0; i < values.length; i++) {

      // Div que va a contener los datos del producto
      const producto = document.createElement("div");
      producto.className =  "menu-item";

      // Nombre del producto
      const itemProducto = document.createElement("span");
      itemProducto.className = "item producto";
      itemProducto.innerHTML = values[i][0]; 

      //Descripcion
      const idescripcion = document.createElement('span'); // creo una constante descrepcion, en donde creamos un elemento SPAN dentro de nuestro documento(html) 
      idescripcion.className = 'item descripcion';
      idescripcion.innerHTML= values[i][1];

      // Precio
      const itemPrecio = document.createElement("span");
      itemPrecio.className = "item precio";
      itemPrecio.innerHTML = values[i][2];

      //Precio agrandado 
      const itemagrandado = document.createElement('span');
      itemagrandado.className= 'item agrandado';
      itemagrandado.innerHTML = values[i][3];

      // Agregamos todos los elementos al div de producto
      producto.appendChild(itemProducto);
      producto.appendChild(itemPrecio);
      producto.appendChild(idescripcion);
      producto.appendChild(itemagrandado);


      // Agregamos el producto a la lista
      lista.appendChild(producto);
  }
  });
});