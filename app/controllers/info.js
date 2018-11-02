// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var datosService = args.response;

var nuevoObjeto = Object.keys(datosService);
var nuevoValor = Object.values(datosService);


for(var i; i< nuevoObjeto.length; i++){
    var texto = nuevoObjeto[i];

    texto = texto.replace('_', " ");
    texto = texto.replace('-', " ");

    
    var labelDescripcionNombre = Ti.UI.createLabel({
        color: 'white',
        height: TI.UI.SIZE,
        top: 10,
        text: texto,
        left: 10,
        textAlign: 'left'
    });

    $.winInfo.add(labelDescripcionNombre);
}