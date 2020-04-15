var constructor= function()
{
    var obj=
    {
        name:"Juan",
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
var empleado = constructor();
empleado.showname();