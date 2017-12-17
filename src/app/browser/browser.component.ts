import {Component, OnInit, ViewChild} from '@angular/core';
import { Directory } from '../Directory';
import { DirectoryService} from '../directory.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  directories: Directory[];
  folderPath: string;
  folderId: number;
  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
  ];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  constructor(private directoryService: DirectoryService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.folderPath = '/assets/images/folder.png';
    this.folderId = +this.route.snapshot.paramMap.get('id');
    this.getDirectories();
  }
  getDirectories(): void {
      const id =  +this.route.snapshot.paramMap.get('id');
      this.directoryService.getDirectory(id).subscribe(data => {
          this.directories = data;
          console.log(this.directories);
      });
  }
  onRightClick($event): void {
      console.log("right click");
  }
}
