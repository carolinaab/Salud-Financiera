//SECCIÓN PARA SUMAR LOS GASTOS, EN ESTE CASO ES PARA COMIDA //
const despensa=document.getElementById('desp-comi');
const comidaRapida=document.getElementById('comi-rap');
const restaurante=document.getElementById('rest')
const sumar=()=>{
    let total=0;
    let numDespensa=parseFloat(despensa.value);
    let numComidaRapida=parseFloat(comidaRapida.value);
    let numRestaurante=parseFloat(restaurante.value);
    total=total+numDespensa+numComidaRapida+numRestaurante;
    total=total.toFixed(2);
    document.getElementById('gasto-total').innerHTML=total;


}

