// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

/*Ejemplo*/
// var props = Ti.App.Properties.listProperties();
//
// for (var i=0, ilen=props.length; i<ilen; i++){
// var value = Ti.App.Properties.getString(props[i]);
// Ti.API.info(props[i] + ' = ' + value);
// }

var createDataBase = Ti.UI.createButton({
	left : 5,
	right : 5,
	bottom : 10,
	width : Ti.UI.FILL,
	backgroundColor : 'black',
	title : 'Created database'
}),
    txtName = Ti.UI.createTextField({
	top : 20,
	left : 10,
	right : 10,
	width : Ti.UI.FILL,
	height : '40dp',
	borderColor : 'blue',
	borderRadius : 2,
	backgroundColor : 'white',
	color : 'black',
	textAlign : 'center',
	hintText : 'Agregar Nombre',
	hintTextColor : 'black'
}),
    btnInsert = Ti.UI.createButton({
	top : 65,
	left : 40,
	width : '130dp',
	backgroundColor : 'white',
	color : 'black',
	title : 'insertar',
}),
    verDatos = Ti.UI.createButton({
	top : 65,
	right : 40,
	width : '130dp',
	backgroundColor : 'white',
	color : 'black',
	title : 'Ver datos',
}),
    btnEliminar = Ti.UI.createButton({
	title : 'eliminar datos',
	width : '190dp',
	backgroundColor : 'white',
	color : 'black'
});
$.container.add(createDataBase);
$.container.add(txtName);
$.container.add(btnInsert);
$.container.add(verDatos);
$.container.add(btnEliminar);

createDataBase.addEventListener('click', function(e) {
	var db = Ti.Database.open('confianza');
	db.execute('CREATE TABLE IF NOT EXISTS DOCUMENTS ( name TEXT);');
	db.close();
	Ti.API.info('DATA BASE CREATED SUSSCESFUL');
});

btnInsert.addEventListener('click', function(e) {
	if (txtName.value == "") {
		alert('Ingresa un nombre');
	} else {
		var db = Ti.Database.open('confianza');
		db.execute('INSERT INTO DOCUMENTS(name) VALUES(?)', txtName.getValue());
		db.close();

		Ti.API.info('INSERT VALUE SUSSCESSFUL');

		txtName.value = null;
	}

});

verDatos.addEventListener('click', function(e) {
	var db = Ti.Database.open('confianza');
	var rows = db.execute('SELECT * FROM DOCUMENTS');
	db.close();
	while (rows.isValidRow()) {
		Ti.API.info('Datos insertados: ' + ' Nombre ' + rows.fieldByName('name'));
		//alert('Datos insertados: ' + ' Nombre ' + rows.fieldByName('name'));
		rows.next('Datos insertados: ' + ' Nombre ' + rows.fieldByName('name'));
	}
	rows.close();
});

btnEliminar.addEventListener('click', function(e) {
	var db = Ti.Database.open('confianza');
	var rows = db.execute('DELETE FROM DOCUMENTS');
	db.close();
	alert('Deleted Susscess');
});

var response = args;
var nuevoObjeto = response;

Ti.API.info(JSON.stringify(nuevoObjeto));
var db = Ti.Database.open('confianza');
db.execute('CREATE TABLE IF NOT EXISTS DOCUMENTS ( name TEXT);');
var db = Ti.Database.open('confianza');
db.execute('INSERT INTO DOCUMENTS (name) VALUES(?)', nuevoObjeto.documentType);
db.close();

for (var i in nuevoObjeto) {
	Ti.API.info('Response ' + nuevoObjeto);

}

for (var i = 0; i < nuevoObjeto.data.length; i++) {
	Ti.API.info('1:===' + nuevoObjeto.data[i].label);
	Ti.API.info('2:===' + JSON.stringify(nuevoObjeto.data[i].value));
}

