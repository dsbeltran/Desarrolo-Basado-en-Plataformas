var objeto={
    nombre:"David",
    edad: 19
}
var objeto2={
    nombre:"David",
    'mi edad': 19
}
var ed="edad";
var nom="nombre";
var mensaje ="Mi nombre es "+objeto.nombre+"\r\n";
mensaje +="Tengo "+objeto["edad"]+" años";

mensaje +="Tengo "+objeto[ed]+" años" +"\r\n";
mensaje +="Mi nombre es "+objeto[nom]+"\r\n";

mensaje +="Mi nombre es "+objeto2[nom]+"\r\n";
mensaje +="Tengo "+objeto2['mi edad']+" años" +"\r\n";

mensaje +="Mi nombre es "+objeto2[nom]+"\r\n";
mensaje +="Tengo "+objeto2['mi edad']+" años" +"\r\n";
objeto.nombre="Martin"
objeto.trabajo="Programador"
alert(objeto.nombre+" "+objeto.trabajo+" "+objeto.edad
)
alert(mensaje);