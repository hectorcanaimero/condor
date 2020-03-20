import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  @Input() items: any = [];
  @Input() head: any = [];

  constructor() { }
  ngOnInit(): void { }
}
