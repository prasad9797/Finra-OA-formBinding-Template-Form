import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AddressFormComponent } from './app/address-form/address-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddressFormComponent],
  template: `
   <app-address-form [formData]="{name: 'Prasad Jadhav', address: '123 Main St', zipcode: '12345', state: 'CA', country: 'USA', phone: '5551211234', email: 'prasad.jadhav@example.com'}" (formOutput)="displayAddress($event)"></app-address-form>

   <h2> Recieved Address </h2>
   <p>{{ recievedAddress }}</p>
  `,
})
export class App {
  name = 'Angular';
  recievedAddress: any;

  displayAddress(data: any) {
    this.recievedAddress = data;
  }
}

bootstrapApplication(App);
