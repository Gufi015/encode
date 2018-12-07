// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
//var datosService = args.response;
var datosService = args;
var nuevoObjeto = datosService;

//console.log('contenido---------: ' + nuevoObjeto.documentType);
var documento = Ti.UI.createLabel({
	text : 'Documento: ' + datosService.documentType,
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
	var viewInformacion = Ti.UI.createView({
		layout : 'vertical',
		width : Ti.UI.FILL,
		height : '120dp',
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
	title : 'Propertie',
	width : '140dp',
	backgroundColor : 'white',
	color : 'black',
	bottom : 10,
	left : 10
});
$.win.add(btnOtro);

btnOtro.addEventListener('click', function(e) {
	var inicio = Alloy.createController('propertie', args).getView();
	inicio.open();
	

});

//ver el listado de properties que hay
// var props = Ti.App.Properties.listProperties();
// for (var i = 0,
    // ilen = props.length; i < ilen; i++) {
	// var value = Ti.App.Properties.getString(props[i]);
	// Ti.API.info(props[i] + ' = ' + value);
// }


if (!Ti.App.Properties.hasProperty('miarray')) {
	Ti.App.Properties.setObject('miarray', []);
}


// function datos() {	
	// var datos = Ti.App.Properties.getObject('miarray');
	// ///veamos antes los valores actuales de "miarray"
	// Ti.API.info('===valor anterior property "miarray" ======');
	// Ti.API.info('contenido array: ' + JSON.stringify('miarray', datos));
	// Ti.API.info('==============');
	// ////
	// for (var i = 0; i < datosService.length; i++) {
		// datos.push(datosService[i].data);
	// }
// 
// 	
	// Ti.API.info('===valor posterior property "miarray" ======');
	// Ti.App.Properties.setObject('miarray', datos);
	// //Ti.App.properties.setObject('miarray', datos);
	// Ti.API.info('==============');
	// /*termina*/
// 
	// //leamos la propertiy despes de actualziar para ver su contenido actual despues del proceso
	// Ti.API.info(JSON.stringify(Ti.App.Properties.getObject('miarray', datos)));
// }
// 
// datos();

function datos() {	
	var datos = Ti.App.Properties.getObject('miarray');
	///veamos antes los valores actuales de "miarray"
	Ti.API.info('===valor anterior property "miarray" ======');
	Ti.API.info('contenido array: ' + JSON.stringify(Ti.App.Properties.getObject('miarray', datos)));
	Ti.API.info('==============');
	////
	for (var i = 0; i < datosService.length; i++) {
		datos.push(datosService[i]);
	}
	
	Ti.API.info('===valor posterior property "miarray" ======');
	Ti.App.Properties.setObject('miarray', datos);
	//Ti.App.properties.setObject('miarray', datos);
	Ti.API.info('==============');
	/*termina*/

	//leamos la propertiy despes de actualziar para ver su contenido actual despues del proceso
	Ti.API.info(JSON.stringify(Ti.App.Properties.getObject('miarray',datos)));
}

datos();

