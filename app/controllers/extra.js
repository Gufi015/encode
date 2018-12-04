// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var datosService = args.response;

Ti.API.info('Datos de respuesta: ' + datosService);

var itemCollection = [];
for (var i = 0; i < datosService.data.length; i++) {
	var tmp = {
		template : 'template',
		label : {
			text : datosService.data[i].label
		},
		value : {
			text : datosService.data[i].value
		}

	};
	itemCollection.push(tmp);
}

$.section.setItems(itemCollection);

$.section.width = Ti.UI.FILL;
$.section.height = '44dp';

// var arry = [datosService];
// Ti.API.info('array ' + arry);

/*Aqui comieza la parte de almacenaar los objetos en las properties*/

var datos = datosService;
datos = [datosService];

//Ti.App.Properties.setObject('miarray', datos);
var miarray = Ti.App.Properties.getObject('miarray');

miarray.push({
	"miarray" : datos
});
Ti.App.Properties.setObject('miarray', miarray);

//Ti.API.info('Mi array dataservices' + JSON.stringify(miarray));

for (var i = 0; i < miarray.length; i++) {
	//var value = Ti.App.Properties.getObject(miarray[i]); + ' = ' + value
	Ti.API.info("datos de la propertie", miarray[i]);
}

/*Aqui termina*/

//propertie de prueba
Ti.App.Properties.setString('Nombre', 'Guf');
Ti.API.info('El valor de la propertie es: ' + Ti.App.Properties.getString('Nombre'));

