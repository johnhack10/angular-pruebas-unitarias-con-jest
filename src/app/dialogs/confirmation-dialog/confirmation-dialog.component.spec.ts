import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ConfirmDialogComponent } from "./confirmation-dialog.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

const MatDialogMock = {
  close: () => null
};

describe('Confirm dialog component', () => {

  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        ConfirmDialogComponent
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA, useValue: {},
        },
        {
          provide: MatDialogRef, useValue: MatDialogMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
  })

  beforeEach( () => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onConfirm send true value', () => {
    // const service = fixture.debugElement.injector.get(MatDialogRef);
    const service = TestBed.inject(MatDialogRef)
    const spy = jest.spyOn(service, 'close');
    component.onConfirm();
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('onDismiss send true value', () => {
    // const service = fixture.debugElement.injector.get(MatDialogRef);
    const service = TestBed.inject(MatDialogRef)
    const spy = jest.spyOn(service, 'close');
    component.onDismiss();
    expect(spy).toHaveBeenCalledWith(false);
  });


});
