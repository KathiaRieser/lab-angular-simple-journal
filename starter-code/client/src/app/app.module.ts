import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JournalControllerService} from '../services/journalController.service';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { SingleEntryComponent } from './single-entry/single-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [JournalControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
