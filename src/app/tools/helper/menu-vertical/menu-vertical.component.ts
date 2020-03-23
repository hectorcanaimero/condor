import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss']
})
export class MenuVerticalComponent implements OnInit {

  @Input() items: any = [];
  @Input() type: boolean = false;
  @Input() screen: string = 'dark';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.items);
    }, 1000);
    this.type = false;
  }

}
