var fecha =new Date();
alert(fecha);
fecha = new Date(2017,1,15,12,35,0);
alert(fecha)
var hoy=new Date();
var ano=hoy.getFullYear();
alert("El a;o es: "+ano)

var hoy=new Date();
var ano=hoy.getFullYear();
var mes=hoy.getMonth();
var dia =hoy.getDate();
alert(ano+"-"+mes+"-"+dia)

var hoy =new Date();
alert(hoy);
hoy.setDate(hoy.getDate()+15);
alert(hoy);

var hoy = new Date (2017,0,5);
var Futu = new Date (2017,0,20);
var inter=Futu-hoy;
alert(inter);


