import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bufferCount, debounceTime, zip } from 'rxjs';

@Component({
  selector: 'app-reactive-customer-form',
  templateUrl: './reactive-customer-form.component.html',
  styleUrls: ['./reactive-customer-form.component.css']
})
export class ReactiveCustomerFormComponent {


  errors: any = {}

  customerForm!: FormGroup

  constructor(private fb: FormBuilder) { }

  customerModel = {
    firstName: "Nag",
    lastName: "N"
  }

  states: Array<string> = ['TN', "AP", "KA"]

  ngOnInit() {

    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['N', Validators.required],
      email: ['nag@mail.com', [Validators.required, Validators.email]],
      mobile: [''],
      noti: ['email'],
      addressFormArray: this.fb.array([])
    });

    // this.customerForm.patchValue({
    //   firstName: this.customerModel.fName,
    //   lastName: this.customerModel.lName,
    //   address: {
    //     city: "chennai",
    //     state: "TN",
    //     zip: "601202"
    //   }
    // })

    // this.customerForm.patchValue(this.customerModel);

    // const stateFormControl = this.customerForm.get('address.state') as FormControl;
    // stateFormControl?.valueChanges
    //   .subscribe({
    //     next: (state) => {
    //       console.log(state);
    //     }
    //   })

    // const firstnameFormControl = this.customerForm.get('firstName') as FormControl;
    // firstnameFormControl.valueChanges
    //   //.pipe(bufferCount(3))
    //   .pipe(debounceTime(5000))
    //   .subscribe({
    //     next: (firstName) => {
    //       console.log(firstName);
    //     }
    //   })
    // firstnameFormControl.statusChanges
    //   .subscribe({
    //     next: (firstName) => {
    //       console.log(firstName);
    //     }
    //   })

    // zip(firstnameFormControl.valueChanges, firstnameFormControl.statusChanges)
    //   .subscribe({
    //     next: (zipped) => {
    //       let [value, status] = zipped
    //       if (status === 'INVALID' && firstnameFormControl.touched && firstnameFormControl?.errors) {
    //         if (firstnameFormControl.errors['required']) {
    //           this.errors['firstName'] = "First name is required";
    //         }
    //       }
    //     }
    //   })


    this.addressFormArray?.push(this.createAddressFormGroup())


  }


  get addressFormArray() {
    return this.customerForm.controls['addressFormArray'] as FormArray;
  }

  addNewAddress() {
    this.addressFormArray.push(this.createAddressFormGroup())
  }
  removeAddress(index: number) {
    this.addressFormArray.removeAt(index)
  }


  createAddressFormGroup(): FormGroup {

    return this.fb.group({
      primary: [false],
      city: ['', Validators.required],
      state: [''],
      zip: ['', [Validators.required, this.zipValidator]]
    })

  }


  zipValidator(control: AbstractControl) {
    let pattern = /[0-9]{6}/
    if (pattern.test(control.value)) {
      return null;
    }
    return { zip: 'invalid zip' }
  }

  crossFieldValidator(group: FormGroup) {
    // console.log(group.get('state')?.value);
    // console.log(group.get('city')?.value);
    // console.log(group.get('zip')?.value);
  }

  notiChange(notiType: string) {
    const mobileForlControl = this.customerForm.get('mobile') as FormControl;
    if (notiType === "sms") {
      mobileForlControl.setValidators([Validators.required, Validators.pattern(/^[0-9]{10}$/)]);
    } else {
      mobileForlControl.clearValidators()
    }
    mobileForlControl.updateValueAndValidity()
  }

  handleSubmit(event: any) {
    console.log(this.customerForm.value);
  }

}
