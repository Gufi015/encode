// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var datosService = args.response;

console.log('Objeto-------' + datosService);

Ti.API.info('Datos...............' + JSON.stringify(datosService));

var itemCollection = [];
for (var i = 0; i < datosService.data.length; i++) {
	var tmp = {
		template : 'template',
		username : {
			text : datosService.data[i].value
		},

	};
	itemCollection.push(tmp);
}

$.section.setItems(itemCollection);

$.section.width = Ti.UI.FILL;
$.section.height = '44dp';
