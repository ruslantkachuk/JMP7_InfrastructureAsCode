import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { JmpComponent } from './jmp/jmp.component';

import { JmpModule } from './jmp/jmp.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

@NgModule({
    imports:      [
        BrowserModule,
        JmpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [ AppComponent, JmpComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
