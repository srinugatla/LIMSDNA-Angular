import { Component,OnInit } from '@angular/core';
import GroupService  from "../Service/group.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  groups:Array<string>;
  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService.getAllGroup().subscribe(data => {
      this.groups = data;
    });
  }
}
