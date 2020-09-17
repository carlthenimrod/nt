import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StepperService implements OnDestroy {
  private stepSubject = new Subject<number>();
  step$ = this.stepSubject.asObservable();

  private backSubject = new Subject<void>();
  back$ = this.backSubject.asObservable();

  private nextSubject = new Subject<void>();
  next$ = this.nextSubject.asObservable();

  goTo(index: number): void {
    this.stepSubject.next(index);
  }

  goBack(): void {
    this.backSubject.next();
  }

  goNext(): void {
    this.nextSubject.next();
  }

  ngOnDestroy(): void {
    this.stepSubject.complete();
    this.backSubject.complete();
    this.nextSubject.complete();
  }
}
