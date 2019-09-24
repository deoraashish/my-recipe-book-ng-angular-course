import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective{
  @HostBinding('class.open') appDropDownToggle: boolean = false;

  @HostListener('click') mouseClick(){
    this.appDropDownToggle = !this.appDropDownToggle;
  }
}
