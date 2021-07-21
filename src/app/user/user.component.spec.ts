import { TestBed } from '@angular/core/testing';
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
    let userService = fixture.debugElement.injector.get(UserService);//forcefully injecting the service inside the component 
    fixture.detectChanges();
    expect(userService.user).toEqual(app.user);

  });
});
