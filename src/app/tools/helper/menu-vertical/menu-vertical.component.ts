import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss']
})
export class MenuVerticalComponent implements OnInit {

  @Input() items: any = [];
  @Input() type: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
