import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor() {}

  ngOnInit() {
    // this.subscription.add(
    //   interval(1000).subscribe({
    //     next: (count) => {
    //       console.log('Sub1 ' + count);
    //     },
    //   })
    // );

    // Create custom observable providing the subscribed `observer`
    const customInterval$ = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
        if (count === 12) {
          observer.complete();
        } else if (count > 30) {
          observer.error(new Error('count greater than 3'));
        }
      }, 1000);
    });

    // Add a new subscription to the `customInterval$` observable which
    // first calls the observable and pipes the data into the `map` function
    // before the logging to the console
    this.subscription.add(
      customInterval$
        .pipe(
          filter((data: number) =>
            data % 2 === 0 // filter out odd numbers
          ),
          map((data: number) => {
            return 'Round: ' + (data + 1);
          })
        )
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log(error);
            alert(error.message);
          },
          () => {
            console.log('Completed!');
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
