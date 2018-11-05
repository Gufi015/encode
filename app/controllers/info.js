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

var nuevoObjeto = Object.keys(datosService);
var nuevoValor = Object.values(datosService);

for (var i = 0; i < nuevoObjeto.data.length; i++) {
	var texto = nuevoObjeto.data[i];

	texto = texto.replace('-', " ");
	texto = texto.replace('-', " ");
		
	var labelDescripcionNombre = Ti.UI.createLabel({
		color : 'black',
		height : '7%',
		width : '25%',
		top : 10,
		text : texto,
		left : 10,
		textAlign : 'left'
	});
	$.winInfo.add(labelDescripcionNombre);
	
	var valueLabel = Ti.UI.createLabel({
		color: 'black',
		width: '25%',
		height: '7%',
		text: nuevoValor[i],
		right: 10,
		textAlign: 'center'
		 
	});
	$.winInfo.add(valueLabel);
}
