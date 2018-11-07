var ImageFactory = require('ti.imagefactory');

var viewImage,
    btnGaleria,
    btnFoto,
    btnEnvio;
var grados = 0;
var seleccionoImagen = false;
var image;
var imagenBase64;

viewImage = Ti.UI.createImageView({
	backgroundColor : 'transparent',
	top : '10%',
	width : Ti.UI.FILL,
	height : '80%',
	borderColor : 'red',
	borderRadius : '2%'
});
$.index.add(viewImage);

btnGaleria = Ti.UI.createButton({
	//title : 'Galeria',
	bottom : 10,
	left : 0,
	width : '24%',
	height : '8%',
	backgroundImage : '/images/adjuntar.png'
});
$.index.add(btnGaleria);

btnFoto = Ti.UI.createButton({
	//title : 'Foto',
	bottom : 10,
	right : 0,
	width : '24%',
	height : '8%',
	backgroundImage : '/images/camara-de-fotos.png'
});
$.index.add(btnFoto);

btnEnvio = Ti.UI.createButton({
	//title : 'Enviar',
	bottom : 10,
	width : '24%',
	height : '8%',
	backgroundImage : '/images/enviar.png'
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

btnFoto.addEventListener('click', function() {
	if (!Ti.Media.hasCameraPermissions()) {
		Ti.Media.requestCameraPermissions(function(e) {
			if (e.success) {
				abrirFoto();
			} else {
				alert('no se pudo optener permisos de la camara');
			}
		});
	} else {
		abrirFoto();
	}
});

function abrirFoto() {
	Ti.Media.showCamera({
		success : function(event) {
			image = event.media;
			viewImage.image = image;
			seleccionoImagen = true;
		},
		error : function(e) {
			alert('error al abrir la imagen' + e.error);
		}
	});
}

var progresBar = Ti.UI.createProgressBar({
	width : 300,
	height : 50,
	min : 0,
	max : 1,
	value : 0,
	message : 'presesando...',
	font : {
		fontSize : 12,
	},
});

btnEnvio.addEventListener('click', function(e) {
	if (seleccionoImagen == false) {
		alert('Seleccione una imagen...');
	} else {
		var url = 'https://ko7afa9vef.execute-api.us-east-2.amazonaws.com/SDA';
		var httpClient = Ti.Network.createHTTPClient({
			onload : function(e) {

				//var respuesta = JSON.parse(this.responseText);
				//Ti.API.info('*********respuesta' + this.responseText);
				//alert('respuesta ' + JSON.stringify(respuesta));

				var miObjetoRespuesta = {
					response : JSON.parse(this.responseText)
				};

				///Ti.App.Properties.setString('objetosService', miObjetoRespuesta);
				var info = Alloy.createController('info', miObjetoRespuesta).getView();
				if (true) {
					info.open();
				}
			},
			onsendstream : function(e) {
				Ti.API.info('*********************Enviando informaciòn Progress ' + e.progress);
				progresBar.value = e.progress;
				$.progressView.add(progresBar);

			},
			onerror : function(e) {
				alert('error al enviar la imagen: ' + e.error);
			},
			timeout : 20000,
		});

		var imagenComprimida = ImageFactory.compress(image, 0.25);

		var archivo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'demo.png');
		archivo.write(imagenComprimida);

		var archivo2 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'demo.png');
		archivo2.read();

		imagenBase64 = Ti.Utils.base64encode(archivo2).toString();
		//Ti.API.info('imagen convertida a base' + imagenBase64);

		var datosEnvio = {
			"source" : imagenBase64
		};

		httpClient.open('POST', url);
		httpClient.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		httpClient.send(JSON.stringify(datosEnvio));
	}
});
$.index.add(btnEnvio);

$.etiqueta.addEventListener('click', function(e) {
	alert('rotation');
	rotarImage();
});

function rotarImage() {
	grados = Number(grados) + 90;
	var rotarImage = ImageFactory.imageWithRotation(image, {
		degrees : 90,
	});
	image = rotarImage;
	viewImage.setImage(image);
}

$.index.open();

// var activityView = Ti.UI.createView({
// visible : false,
// });
//
// var activityIndicator = Ti.UI.createActivityIndicator({
// message : 'Procesando...',
// height : 'auto',
// width : 'auto',
// });
//
// activityView.add(activityIndicator);
// activityView.show(); var writeFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'demo.txt');
// if (writeFile.exists() === false) {
// // you don't need to do this, but you could...
// writeFile.createFile();
// }
// writeFile.write("Txt");