Vue.component('datepicker', vuejsDatepicker);

var app = new Vue({
    el:'.form-group',
    data:{
        name:'',
        surname:'',
        date:'',
        address:'',
        rowData:[] 
    },
    methods: {
        AddNew(){
            var my_object = {
                name:this.name,
                surname:this.surname,
                date:this.date,
                address:this.address,
            };
            this.rowData.push(my_object);
            this.name="";
            this.surname="";
            this.date="";
            this.address=""
    }
}
})

function Download(csv,filename){
    var csvFile;
    var downloadLink;
    csvFile = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}


function Export(){
    var table = document.getElementById("table_content").innerHTML;
    var data = table.replace(/<thead>/g,'')
        .replace(/<\/thead>/g,'')
        .replace(/<tbody>/g,'')
        .replace(/<\/tbody>/g,'')
        .replace(/<tr>/g,'')
        .replace(/<\/tr>/g,'\r\n')
        .replace(/<th>/g,'')
        .replace(/<\/th>/g,';')
        .replace(/<th scope="col">/g,'')
        .replace(/<\/th scope="col">/g,';')
        .replace(/<th scope="row">/g,'')
        .replace(/<\/th scope="row">/g,';')
        .replace(/<td>/g,'')
        .replace(/<\/td>/g,';');
    //alert(data);
    Download(data, 'filename.csv');
}