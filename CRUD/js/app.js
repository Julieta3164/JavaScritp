let app = new function() {
this.el = document.getElementById('countries');
this.countries = [ 'France', 'Germany', 'Englad', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland',];
this.Count = function (data){
    let el =document.getElementById ('counter');
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
            data += '<td>' + this.countries[i] + '<td>';
            data += '<td><button onclick="app.Edit(' + i + ')"> Edit</button><td>';
            data += '<td><button onclick="app.Delete(' + i + ')"> Delete</button><td>';
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
        this.el.value = '';
        //dislay the new list
        this.FetchAll();
    }
};





}