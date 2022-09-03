import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  links: Link[] = [];
  title: string = ""

  constructor() { }

  ngOnInit(): void {
    this.links = [new Link("Health", "health"), new Link("Show business", "business"), new Link("Events", "events")];
    this.title = "News of the week"
  }

}
