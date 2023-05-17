//         https://randomuser.me/api/

const {createApp}=Vue;


createApp( {
    data(){
    
    return{
        name: '',//agarro dato de la api
        placeholder:'...'
    };
    
},




created(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data =>{
      const usuario=data.results[0];
      const nombreCompleto=`${usuario.name.first} ${usuario.name.last}`;
    this.name= nombreCompleto;
    this.placeholder='Nombre completo';
        // console.log(data)
        // this.name= data.name;
    })
    .catch(error => 
 
        console.error(error));
        this.placeholder='Error al obtener el nombre';


    }
}).mount("#titular");