var myob={
    nombre:"juan",
    edad:30,
    mostrar:function()
    {
        var men = "Nombre "+ myob.nombre+"\r\n";
        men += "Edad " + myob.edad;
        alert(men);
    },
    channam:function(newnam)
    {
        var oldna = this.nombre;
        myob.nombre = newnam;
        return oldna;
    },
    chandat:function(neweda)
    {
        myob.edad = neweda;
    },

    moto:{
        model:"susuki",
        Fecha:"1981"
    }
}

alert(myob.nombre + " tiene una "+ myob.moto.model);
myob.mostrar();
myob.channam("David");
myob.chandat("2000");
myob.mostrar();
var ant=myob.channam("juan")
alert("El anterior era: "+ ant)
myob.channam("Pepe")
var ant=myob.channam("Pepe")
myob.mostrar();
alert("El anterior era: "+ ant)