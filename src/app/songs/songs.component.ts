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
  cleanDisabled: boolean;

  constructor(private documentsService: DocumentService) { }

  ngOnInit() {
    this.cleanDisabled = true;
    this.documentsService.getAll().subscribe(res => {
      this.documents = res.documents;
    })
  }

  onSearch(event: Event){
    event.preventDefault();
    this.cleanDisabled = false;

    this.documentsService.getFiltered(this.searchText).subscribe(res => {
      this.documents = res.documents;
    })
  }

  onClean(event: Event){
    event.preventDefault();

    this.documentsService.getAll().subscribe(res => {
      this.documents = res.documents;
    })

    this.searchText = "";
    this.cleanDisabled = true;
  }

}
