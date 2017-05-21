import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './jmp.routes';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES),
        HttpModule
    ],
    declarations: [ MODULE_COMPONENTS ]
})

export class JmpModule{}
