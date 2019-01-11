import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importación de módulo de enrutado asociado
import { AppRoutingModule } from './app-routing.module';

// importación de otros módulos de funcionalidad
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

// decorador que define un módulo
//modulo principal
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // el módulo de rutas ya configurado

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
