
let myModal = new bootstrap.Modal(document.getElementById('pantallaAgregar__modal'), {})
let listado=document.getElementById('pantallaListado__ul')
let pantallaVacia=document.getElementById('pantallaVacia')
let pantallaListado=document.getElementById('pantallaListado')
let pantallaDetalle=document.getElementById('pantallaDetalle')

let guardar=document.getElementById('btn_agregar').addEventListener('click',function(){
    let nombre=document.getElementById('PantallaAgregar__InputProd').value
    let tipo=document.getElementById('pantallaAgregar__tipoProd').value
    let descripcion=document.getElementById('pantallaAgregar__detalleProd').value
    
    document.getElementById('PantallaAgregar__InputProd').value=""
    document.getElementById('pantallaAgregar__detalleProd').value=""
    document.getElementById('pantallaAgregar__tipoProd').value="Varios"

    let modelo=`<li class="list-group-item" data-nombre="${nombre}" data-tipo="${tipo}" data-descripcion="${descripcion}"><img src="${tipo}" alt="${nombre}" class="pantallaListado__icono">${nombre}</li>`
    listado.innerHTML+=modelo
    myModal.hide()
    pantallaVacia.style.display='none'
    pantallaListado.style.display='block'
})

let detalles=pantallaListado.addEventListener('click',function(e){
    document.getElementById('pantallaDetalle__producto').innerHTML=e.target.getAttribute('data-nombre')
    document.getElementById('pantallaDetalle__icono').src=e.target.getAttribute('data-tipo')
    document.getElementById('pantallaDetalle__descripcion').innerHTML=e.target.getAttribute('data-descripcion')
    pantallaListado.style.display='none'
    document.getElementById('botonAdd').hidden=true
    pantallaDetalle.style.display='block'
})

let volver=document.getElementById('botonAtras').addEventListener('click', ()=>{
    pantallaDetalle.style.display='none'
    pantallaListado.style.display='block'
    document.getElementById('botonAdd').hidden=false
} )