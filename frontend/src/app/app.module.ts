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
import { PageAdminComponent } from './components/page-admin/page-admin.component';
import { TableArchiveComponent } from './components/table-archive/table-archive.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModifierComponent } from './components/modifier/modifier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    HeaderComponent,
    TableauComponent,
    PageAdminComponent,
    TableArchiveComponent,
    ModifierComponent,
    DashboardComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
