var constructor= function(nombreinicial)
{
    var obj=
    {
        name:nombreinicial,
        old:30,
        showname: function()
        {
            alert(this.name);
        },
        changenam: function(nombrenuevo)
        {
            this.name=nombrenuevo;
        }
    }
    return obj;
}
var empleado = constructor("Juan");
var empleado1 = constructor("Robert");
var empleado2 = constructor("Gabriel");
empleado.showname();
alert(empleado.name+", "+ empleado1.name+", "+empleado2.name)