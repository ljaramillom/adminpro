import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    
    this.subscription = this.regresaObservable().subscribe(
      (numero) => console.log('subs', numero),
      (error) => console.log('error', error),
      () => console.log('end observable'),
    );
  }

  ngOnInit() {}

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if(contador === 3){
          clearInterval(intervalo);
          // observer.complete();
        }
      }, 1000);
    });
  }


  ngOnDestroy(): void {
    console.log('Close page rxjs');
    this.subscription.unsubscribe();
  }
}
