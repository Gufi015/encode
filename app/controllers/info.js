// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var datosService = args.response;
Ti.API.info('aqui esta con argumentos_______________________:' + JSON.stringify(datosService));

var nuevoObjeto = datosService;

console.log('contenido---------: ' + nuevoObjeto.documentType);
var documento = Ti.UI.createLabel({
	text : 'Documento: ' + nuevoObjeto.documentType,
	width : Ti.UI.FILL,
	left : 10,
	color : 'black',
	font : {
		fontSize : 19,
		fontWeight : 'bold'
	}
});
$.scroll.add(documento);

for (var i = 0; i < nuevoObjeto.data.length; i++) {

	Ti.API.info('NUEVO OBJETO ' + nuevoObjeto.data[i]);

	var viewInformacion = Ti.UI.createView({
		layout : 'vertical',
		width : Ti.UI.FILL,
		height : '100dp',
		borderColor : 'black',
		top : 1,
	});
	$.scroll.add(viewInformacion);

	var label = Ti.UI.createLabel({
		color : 'black',
		height : Ti.UI.SIZE,
		top : 25,
		text : nuevoObjeto.data[i].label + ':',
		left : 10,
		textAlign : 'left',
		font : {
			fontSize : 19,
			fontWeight : 'bold'
		}
	});
	viewInformacion.add(label);

	var labelNombre = Ti.UI.createLabel({
		color : 'black',
		height : Ti.UI.SIZE,
		top : 10,
		text : nuevoObjeto.data[i].value,
		left : 10,
		textAlign : 'left'
	});
	viewInformacion.add(labelNombre);
}

var btnSig = Ti.UI.createButton({
	title : 'ver documentos',
	width : '140dp',
	backgroundColor : 'white',
	color : 'black',
	bottom : 10,
	right : 10
});
$.win.add(btnSig);

btnSig.addEventListener('click', function(e) {
	var siguiente = Alloy.createController('extra', args).getView();
	siguiente.open();
});

var btnOtro = Ti.UI.createButton({
	title : 'Atras',
	width : '140dp',
	backgroundColor : 'white',
	color : 'black',
	bottom : 10,
	left : 10
});
$.win.add(btnOtro);

btnOtro.addEventListener('click', function(e) {
	var inicio = Alloy.createController('index').getView();
	inicio.open();

});
