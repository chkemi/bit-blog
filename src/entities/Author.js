export default class Author {
    constructor(id, name, username, email, address, phone, company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.street = address.street;
        this.city = address.city;
        this.zipCode = address.zipcode;
        this.companyName = company.name;
        this.companySlogan = company.catchPhrase;
        this.phone = phone;

    }
}