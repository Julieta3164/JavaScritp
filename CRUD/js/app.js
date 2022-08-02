let app = new function() {
this.el = document.getElementById('countries');
this.countries = ['France', 'Germany', 'Englad', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland'];
this.Count = function (data) {
    let el = document.getElementById('counter');
    let name = 'country';
    if (data){
if (data > 1) {
    name = 'countries'; 
}        
el.innerHTML = data + ' ' + name;
    } else {
        el.innerHTML = 'No' + name;
    }
};

this.FetchAll = function () {
    let data = '';
    if(this.countries.length > 0){
        for(i = 0; i < this.countries.length; i++){
            data += '<tr>';
            data += '<td class="pais">' + this.countries[i] + '<td>';
            data += '<td class="btn-edit"><button class= "edit" onclick="app.Edit(' + i + ')"> <i class="bi bi-pencil-square"></i></button><td>';
            data += '<td class="btn-delete"><button class= "delete" onclick="app.Delete(' + i + ')"><i class="bi bi-trash-fill"></i></button><td>';
            data += '</tr>';
        }
    }
    this.Count(this.countries.length);
    return this.el.innerHTML = data;
};

this.Add = function (){
    el = document.getElementById('add-name');
    //get the value
    let country = el.value;
    if (country) {
        //Add the new value
        this.countries.push(country.trim());
        //reset input value
        el.value = '';
        //display the new list
        this.FetchAll();
    }
};
this.Edit = function (item) {
    let el = document.getElementById ('edit-name');
    //display value in the field
    el.value = this.countries[item];
    //display field
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function(){
        //get value
        let country = el.value;
        if (country){
            //edit value
            self.countries.splice(item, 1, country.trim());
            //display the new list
            self.FetchAll();
            //hide fields
            CloseImput();
        }
    }
};

this.Delete = function (item){
    //delete the current row
    this.countries.splice(item, 1);
    //display the new list
    this.FetchAll ();
};

}

app.FetchAll();
function CloseImput(){
    document.getElementById('spoiler').style.display = 'none';
}