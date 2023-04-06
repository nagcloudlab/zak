import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appZipValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ZipValidatorDirective, multi: true }],
})
export class ZipValidatorDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl) {
    let zipPattern = /[0-9]{6}/
    if (c.value && zipPattern.test(c.value)) {
      return null;
    }
    return { invald_zip: 'Invalid zip code' };
  }

}
