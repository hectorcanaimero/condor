import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.scss']
})
export class MidiaComponent implements OnInit {

  @Input() items: any = [];

  constructor() { }

  ngOnInit(): void {  }

}
