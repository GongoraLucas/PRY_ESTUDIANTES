let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

var btn_agregar_calificacion = document.getElementById('btn_agregar_calificacion');
var calificaciones = document.getElementById('calificaciones');
var aprobados = document.getElementById('aprobados');
var supletorios = document.getElementById('supletorios');
var reprobados = document.getElementById('reprobados');
var promedio = document.getElementById('promedio');
var estado = document.getElementById('estado');
var mensaje_error = document.getElementById('mensaje_error');

inicializar();

btn_agregar_calificacion.addEventListener('click',function(evt){
    let txt_calificacion = document.getElementById('txt_calificacion');
    let nota = Number(txt_calificacion.value);
    if (nota < 0 || nota > 10 || isNaN(nota)){
        mensaje_error.classList.remove('d-none');
        mensaje_error.classList.add('d-block');
        txt_calificacion.value='';
        return;
    };
    mensaje_error.classList.remove('d-block');
    mensaje_error.classList.add('d-none');
    
    notas.push(nota);
    inicializar();
    txt_calificacion.value = '';
 
    
})

function inicializar(){
    let aprobados_contador = 0;
    let supletorios_contador = 0;
    let reprobados_contador = 0;
    let suma_total = 0;
    let promedio_calculo = 0;
    let estado_calculo = '';
    let notas_txt  = '';


    notas.forEach(function(nota){
        notas_txt += `${nota} `;
    
        if (nota >= 7){
            aprobados_contador++;
        }else if(nota >=5 && nota <= 6){
            supletorios_contador++;
        }else if(nota<5){
            reprobados_contador++;
        }
    
        suma_total+=nota;
    })
    
    promedio_calculo = suma_total / notas.length;
    
    estado.classList.remove('text-success','text-danger')
    
    if (promedio_calculo >= 7){
        estado_calculo = 'aprobado';
        estado.classList.add('text-success');
    }else{
        estado_calculo = 'en riesgo';
        estado.classList.add('text-danger');
    }
    

    calificaciones.textContent = notas_txt;
    promedio.textContent = promedio_calculo.toFixed(2);
    estado.textContent = estado_calculo;
    aprobados.textContent = aprobados_contador;
    supletorios.textContent = supletorios_contador;
    reprobados.textContent = reprobados_contador;
}




