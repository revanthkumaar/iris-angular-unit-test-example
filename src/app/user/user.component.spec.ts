

import { TestBed } from '@angular/core/testing';
import {UserComponent} from './user.component';

describe('testing user component', () => {

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
  })

it('An app should be created with user component inside it', () => {

  let fixture = TestBed.createComponent(UserComponent);//arrange
  let app = fixture.debugElement.componentInstance;//action
  expect(app).toBeTruthy() //assert

});



 })


