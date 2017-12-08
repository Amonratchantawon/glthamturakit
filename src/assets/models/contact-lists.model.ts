import { ContactModel } from "./contact-create.model";

export class ContactListModel {
    contact: Array<ContactModel>;
}

export class AddressModel {
    address: string;
    postcode: string;
    subdistrict: string;
    district: string;
    province: string;
}