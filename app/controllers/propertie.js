// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;


var props = Ti.App.Properties.listProperties();

for (var i=0, ilen=props.length; i<ilen; i++){
    var value = Ti.App.Properties.getString(props[i]);
    Ti.API.info(props[i] + ' = ' + value);
}