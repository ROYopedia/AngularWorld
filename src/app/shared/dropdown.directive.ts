import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:"[appDropdown]"
})
export class DropdownDirective{
    constructor() { }
        ngOnInit(){ }
        @HostBinding('class.open') isOpen = false;
        @HostListener('click') toggleOpen(eventData:Event){
          // Interacting elements with renderer2
          // this.renderer.setStyle(this.elRef.nativeElement,"backgroundColor",'blue')
          // Interacting dom elements with hostbinding
          this.isOpen = !this.isOpen;
        }
}