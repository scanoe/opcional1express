const opciones ={

	id:{
		demand: true,
		alias:'i'
	},
	nombre:{
		demand: true,
		alias:'n'
	},
	cedula:{
		demand: true,
		alias:'x'
	}
}
const fs = require('fs')
const argv = require('yargs').command('inscribir','inscribir en curso',opciones).argv
let timer =1

let cursos = [{
	id: 1,
	nombre: 'Baile Tropical',
	duracion: 3,
	costo:20
},{
	id: 2,
	nombre: 'Baile tropical avanzado',
	duracion: 6,
	costo:30

},{
	id: 3,
	nombre: 'programacion extrema',
	duracion: 3,
	costo:40
}]

function timeout(curso,timer){setTimeout(function(){
console.log('El curso con id '+ curso.id +' se llama '+ curso.nombre+' tiene una duracion de '+curso.duracion+' horas y un valor de '+ curso.costo +' pesos ')
},2000*timer);}

function listar(cursos){
cursos.forEach((curso)=> {
timeout(curso,timer)
timer = timer +1
})
}

function guardarInscripcion(nombre,cedula,id,cur,duracion,costo){

	texto ='El Ususario: '+nombre+' Identificado con Cedula: '+cedula+'\n'
			+' Se ha matriculado en el curso ID: '+id+' de Nombre'+ cur+ '\n'
			+'el cual tiene un costo de '+costo+' y una duracion de '+duracion+'\n'

	fs.writeFile('Matricula-'+cedula+'-curso-'+id+'.txt',texto,(err)=> {if(err)throw (err);
console.log('Archivo de matricula creado')
	});
}


if ( !argv.id){

listar(cursos)

}else{

let inscripcion = cursos.find( curs => curs.id == argv.id)

console.log(inscripcion)
if(inscripcion){
guardarInscripcion(argv.nombre,argv.cedula,argv.id,inscripcion.nombre,inscripcion.duracion,inscripcion.costo)

}else{

	console.log('id del curso no encontrado sus opciones son las siguientes:')
	listar(cursos)
}


}





