function Address(road, city, CEP) {
    this.road,
    this.city,
    this.CEP,
    this.showAddress = function() {
        console.log("Road: " + road + "\nCity: " + city + "\nCEP: " + CEP);
    }
}

const myAddress = new Address("Jacitaba", "Campinas", 13054-133);
myAddress.showAddress();
