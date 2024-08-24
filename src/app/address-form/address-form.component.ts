import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  @Input() formData: any;
  @Output() formOutput = new EventEmitter();

  country = [
    {
      id: 1,
      name: 'India',
    },
    {
      id: 2,
      name: 'England',
    },
    {
      id: 3,
      name: 'Singapore',
    },
    {
      id: 4,
      name: 'USA',
    },
  ];

  submitForm(addressForm: any) {
    this.formOutput.emit(addressForm.value.address);
  }
}
