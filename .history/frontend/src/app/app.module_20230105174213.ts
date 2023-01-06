import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/authconfig.interceptor';
import { ReactiveFormsModule, FormsModule, FormGroup} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HeaderComponent } from './components/header/header.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TableArchiveComponent } from './components/table-archive/table-archive.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    HeaderComponent,
    TableauComponent,
    TableArchiveComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
