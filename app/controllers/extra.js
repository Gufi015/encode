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
