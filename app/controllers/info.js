// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var datosService = args.response;
Ti.API.info('aqui esta con argumentos_______________________:' + JSON.stringify(datosService));

var nuevoObjeto = datosService;

// var labelDescripcionNombre = Ti.UI.createLabel({
// color : 'black',
// height : Ti.UI.SIZE,
// top : 10,
// text : 'Nombre: ' + nuevoObjeto.data[0].value,
// left : 10,
// textAlign : 'left'
// });
// $.winInfo.add(labelDescripcionNombre);

for (var i = 0; i < nuevoObjeto.data.length; i++) {

	Ti.API.info('NUEVO OBJETO ' + nuevoObjeto.data[i].value);

	var label = Ti.UI.createLabel({
		color : 'black',
		height : Ti.UI.SIZE,
		top : 10,
		text : nuevoObjeto.data[0].label,
		left : 10,
		textAlign : 'left'
	});
	$.winInfo.add(label);

	var labelNombre = Ti.UI.createLabel({
		color : 'black',
		height : Ti.UI.SIZE,
		top : 10,
		text : nuevoObjeto.data[0].value,
		left : 10,
		textAlign : 'left'
	});
	$.winInfo.add(labelNombre);
}
