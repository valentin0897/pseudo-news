import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  title: string = ""

  constructor() { }

  ngOnInit(): void {
    this.title = "News of the week"
  }

}
