import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appOne';

  ngOnInit() {

    // const numObservable = Observable.interval(1000);
    // numObservable.subscribe((number: number) => {
    //   console.log(number);
    // });
  }
  //   const newObservale = Observable.create((observer: Observer<any>) => {
  //     setTimeout((number: number) => {
  //       observer.next(number)
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.error('error')
  //     }, 2000);
  //   });

  //   newObservale.subscribe(
  //     (data: any) => { console.log(data); }
  //   );
  // }
}
