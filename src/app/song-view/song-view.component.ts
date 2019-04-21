import { Component, OnInit } from '@angular/core';
import { DocumentService, IDocument } from '../songs.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html',
  styleUrls: ['./song-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  constructor(private songsService: DocumentService, private activatedRoute: ActivatedRoute) { }

  document: IDocument;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute.snapshot.params);
    this.songsService.getById(id).subscribe(res => {
      this.document = res.document;
    })
  }
}
