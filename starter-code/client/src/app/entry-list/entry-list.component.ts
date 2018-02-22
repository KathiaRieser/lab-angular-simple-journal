import { Component, OnInit } from '@angular/core';
import {JournalControllerService} from '../../services/journalController.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journalList:Array<any>;
  constructor(public journalSrv:JournalControllerService) {

      this.journalSrv.getList().subscribe(list=> this.journalList = list);
   }

  ngOnInit() {
  }

}
