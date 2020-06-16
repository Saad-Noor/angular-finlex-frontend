import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatDialogModule, 
        MatFormFieldModule,
        MatSnackBarModule
        ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatDialogModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatTooltipModule,
        MatDialogModule,
        MatSnackBarModule,
        MatFormFieldModule
        ]
})

export class AngularMaterialModule { }