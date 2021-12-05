import { Component } from "@angular/core";

@Component({
  selector: 'ac-contacts-component',
  template: `

             Contacts - works!
             <br>
             TODO: da implementare

<!--
             <ng-container *ngIf="???">
              <app-contact-list
                [contacts]="???"
                (removeContact)="???"
                (editContact)="???"
                (selectContact)="???"
              ></app-contact-list>
              <button mat-raised-button color="primary" (click)="???">Nuovo contatto</button>
            </ng-container>
            <ng-container *ngIf="???">
              <button mat-stroked-button (click)="???">Indietro</button>
              <app-contact-form
                (saveContact)="???"
              ></app-contact-form>
            </ng-container>

-->

  `,
  styles: [`
    .card300{
      width: 300px;
      margin: 100px auto;
    }
    mat-form-field {
      width: 100%;
    }
    mat-flat-button{
      width: 100%;
    }
  `]
})
export class ContacsComponent {

}
