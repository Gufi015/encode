// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var datosService = args.response;
Ti.API.info('aqui esta con argumentos_______________________:' + JSON.stringify(datosService));

var nuevoObjeto = datosService;

var labelDescripcionNombre = Ti.UI.createLabel({
	color : 'black',
	height : Ti.UI.SIZE,
	top : 10,
	text : 'Nombre: ' + nuevoObjeto.data[0].value,
	left : 10,
	textAlign : 'left'
});

$.winInfo.add(labelDescripcionNombre);

var i = 0;
for (i in nuevoObjeto) {
	
	Ti.API.info('NUEVO OBJETO '+ nuevoObjeto[i].data);
}
