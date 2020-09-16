import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StepperService implements OnDestroy {
  private backSubject = new Subject<void>();
  back$ = this.backSubject.asObservable();

  private nextSubject = new Subject<void>();
  next$ = this.nextSubject.asObservable();

  goBack(): void {
    this.backSubject.next();
  }

  goNext(): void {
    this.nextSubject.next();
  }

  ngOnDestroy(): void {
    this.backSubject.complete();
    this.nextSubject.complete();
  }
}
