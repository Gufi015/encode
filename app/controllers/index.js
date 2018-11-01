var viewImage,
    btnGaleria,
    btnFoto,
    btnEnvio;

var seleccionoImagen = false;

var image;

viewImage = Ti.UI.createImageView({
	backgroundColor : 'blue',
	top : 0,
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

btnGaleria.addEventListener('click', function(e) {
	abrirGaleria();
});

function abrirGaleria() {
	Ti.Media.openPhotoGallery({
		allowEditing : true,
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
		success : function(event) {
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				image = event.media;
				viewImage.image = image;
				
				seleccionoImagen = true;
				
			}
		},
		error : function(e) {
			alert('In error: ' + e.error);
		}
	});
}

btnFoto.addEventListener('click', function(){
	if(!Ti.Media.hasCameraPermissions()){
		Ti.Media.requestCameraPermissions(function(e){
			if(e.success){
				abrirFoto();
			}else{
				alert('no se pudo optener permisos de la camara');
			}
		});
	} else{
		abrirFoto();
	}
});

function abrirFoto(){
	Ti.Media.showCamera({
		success: function(event){
			image = event.media;
			viewImage.image = image;
			
			seleccionoImagen = true;
		},
		error: function(e){
			alert('error al abrir la imagen' + e.error);
		}
	});
}

$.index.add(btnEnvio);

$.index.open();
