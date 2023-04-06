import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-customer-form',
  templateUrl: './template-customer-form.component.html',
  styleUrls: ['./template-customer-form.component.css']
})
export class TemplateCustomerFormComponent {

  states: Array<string> = ['TN', 'KA', 'AP', 'KL']
  // customerModel: any = {
  //   fName: 'Nag',
  //   lName: 'N',
  // }

  handleSubmit(customerForm: any) {
    // console.log(customerForm);
    // console.log(this.customerModel);
    console.log(customerForm.value);
  }

}
