import { Component, OnInit, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Component({
    selector:'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit
{
    eventData:string;
    list: Array<any> = [{ 'id': 1 }, { 'id': 2 }];
    //@HostBinding('style.backgroundColor') background:string;
    constructor(private elementRef:ElementRef, private render:Renderer2){}

    ngOnInit(){
    }

    onChange(event)
    {
        this.eventData= event;
    }
    @HostListener('change') changeColor(event:Event){
        this.render.setStyle(document.body,'background-color',this.eventData);
    }
}