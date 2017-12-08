export class ContactModel {
    _id: string;
    name: string;
    govermentId: string;
    email: string;
    tel: string;
    address: AddressModel = new AddressModel();
}

export class AddressModel {
    address: string;
    postcode: string;
    subdistrict: string;
    district: string;
    province: string;
}