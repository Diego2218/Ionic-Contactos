import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contacts, ContactFieldType, IContactFindOptions } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ourtype: ContactFieldType[]=["displayName"];
  avatar:string="./assets/icon/avatar.png";
  contactos = [];

  constructor(public navCtrl: NavController, private contacts:Contacts) {
    this.viewContacts('');
  }

  async viewContacts(q) {
    try {
      const option: IContactFindOptions = {
        filter: q
      }
      this.contacts.find(this.ourtype, option).then(conta => {
      this.contactos = conta;
      })
    } catch (error) {
      console.error(error);
    }
  }

  onKeyUp(ev){
    this.viewContacts(ev.target.value);
  }

}
