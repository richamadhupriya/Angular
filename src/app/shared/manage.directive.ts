import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[manageData]'
})
export class ManageDirective implements OnInit
{
    //@HostBinding('') dropdown: string;
    @HostBinding('class.open') status = false;
    constructor(private elementRef : ElementRef,private render: Renderer2){}

    ngOnInit() {}

    @HostListener('click') open(event:Event){
        this.status = !this.status;
    }
}