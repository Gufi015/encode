var viewImage,
    btnGaleria,
    btnFoto,
    btnEnvio;

viewImage = Ti.UI.createImageView({
	backgroundColor : 'blue',
	top:0,
	width : Ti.UI.FILL,
	height : '92%',
	borderColor : 'red',
	borderRadius : '2%'
});

$.index.add(viewImage);

btnGaleria = Ti.UI.createButton({
	title : 'Galeria',
	bottom : 0,
	left : 0,
	width : '24%',
	height : '8%',
});
$.index.add(btnGaleria);

btnFoto = Ti.UI.createButton({
	title : 'Foto',
	bottom : 0,
	right : 0,
	width : '24%',
	height : '8%',
});
$.index.add(btnFoto);

btnEnvio = Ti.UI.createButton({
	title : 'Enviar',
	bottom : 0,
	width : '24%',
	height : '8%',
});


btnGaleria.addEventListener('click', function(e){
	
});


function abrirGaleria(){
	
}



























$.index.add(btnEnvio);

$.index.open();
