// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// var datosResponse = Ti.App.Properties.getString('objetosService');
//
// var objetosParse = JSON.parse(datosResponse);
//
// for (var i = 0; i < objetosParse.data.length; i++) {
// var texto = objetoParse.data[i];
// var labelDescripcionNombre = Ti.UI.createLabel({
// color : 'black',
// height : TI.UI.SIZE,
// width : '25%',
// top : 10,
// text : texto,
// left : 10,
// textAlign : 'left'
// });
// $.winInfo.add(labelDescripcionNombre);
// }

var datosService = args.response;
Ti.API.info('aqui esta con argumentos_______________________:' + JSON.stringify(datosService));

var result = JSON.parse(datosService);

var nuevoObjeto = Object.keys(datosService);
Ti.API.info('esta es la variable nuevo objeto __________________: ' + nuevoObjeto);
// var nuevoValor = Object.values(datosService);
// Ti.API.info('esta es la variable nuevo valor __________________: ' + nuevoObjeto);

for (var i = 0; i < result.data.length; i++) {
	var texto = result.data[i];

	texto = texto.replace('_', " ");
	//texto = texto.replace('-', " ");

	Ti.API.info('variable texto: ' + texto);

	// var labelDescripcionNombre = Ti.UI.createLabel({
		// color : 'black',
		// height : Ti.UI.SIZE,
		// top : 10,
		// text : texto,
		// left : 10,
		// textAlign : 'left'
	// });
// 
	// $.winInfo.add(labelDescripcionNombre);

	var valueLabel = Ti.UI.createLabel({
		color : 'red',
		height : Ti.UI.SIZE,
		text : texto,
		right : 10,
		textAlign : 'center'

	});
	$.winInfo.add(valueLabel);
}
