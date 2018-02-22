import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JournalControllerService} from '../../services/journalController.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  journal:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private journalService:JournalControllerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleJournal(params['id']);
    });
  }

  getSingleJournal(id) {
    this.journalService.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }

}
