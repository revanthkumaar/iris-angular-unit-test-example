import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { DataService } from './data.service';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
describe('testing user component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });

  it('An app should be created with user component inside it', () => {
    let fixture = TestBed.createComponent(UserComponent); //arrange
    let app = fixture.debugElement.componentInstance; //action
    expect(app).toBeTruthy(); //assert
  });

  it('should update the user value from a service', () => {
    let fixture = TestBed.createComponent(UserComponent); //arrange
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); //forcefully injecting the service inside the component
    fixture.detectChanges();
    expect(userService.user).toEqual(app.user);
  });

  it('should update the user value from a service and render it on HTML page', () => {
    let fixture = TestBed.createComponent(UserComponent); //arrange
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService); //forcefully injecting the service inside the component
    fixture.detectChanges();
    let elements = fixture.debugElement.nativeElement;
    expect(elements.querySelector('p').textContent).toEqual(app.user);
  });


  it('should not fetch for the data if called in sync manner', () => {
    //sync test zone
    let fixture = TestBed.createComponent(UserComponent); //arrange
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });


  it('should  fetch for the data if called in async manner', async (() => {
    //async test zone
    let fixture = TestBed.createComponent(UserComponent); //arrange
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );

    fixture.whenStable().then( () => {
        fixture.detectChanges();
        expect(app.data).toBe('Data');
    })
  }));

  //using fakeAsync and tick:

    it('should  fetch for the data if called in async manner', fakeAsync(() => {
      //async test zone
      let fixture = TestBed.createComponent(UserComponent); //arrange
      let app = fixture.debugElement.componentInstance;
      let dataService = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(dataService, 'getDetails').and.returnValue(
        Promise.resolve('Data')
      );

        tick:
        fixture.detectChanges();
        expect(app.data).toBe('Data');
    
    }));
});
