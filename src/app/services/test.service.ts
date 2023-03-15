import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  testResults = new BehaviorSubject<any>({ result: [] });

  constructor() { }


sendResult(obj:any)
{

this.testResults.next({result:obj})

console.log(this.testResults.value.result);

}

}
