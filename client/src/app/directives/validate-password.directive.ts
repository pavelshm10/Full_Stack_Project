import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive,Input } from '@angular/core';

@Directive({
  selector: '[appValidatePassword]',
  providers:[{
    provide: NG_VALIDATORS,
    useExisting: ValidatePasswordDirective,
    multi: true
  }]
})
export class ValidatePasswordDirective implements Validator{

  @Input() appValidatePassword: string;
  validate(control:AbstractControl):{ [key: string]:any}|null{
    const controlToCompare= control.parent.get(this.appValidatePassword);
    if(controlToCompare && controlToCompare.value!==control.value){
      return {'notEqual': true};
    }
    return null;
  }
  

}
