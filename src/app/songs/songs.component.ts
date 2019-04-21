import { Component, OnInit } from '@angular/core';
import { DocumentService, IDocument } from '../songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: IDocument[];
  searchText : string;

  constructor(private documentsService: DocumentService) { }

  ngOnInit() {
    this.documentsService.getAll().subscribe(res => {
      this.documents = res.documents;
    })
  }

}
