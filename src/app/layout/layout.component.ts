import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarLeftComponent } from "./sidebar-left/sidebar-left.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, SidebarLeftComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle('IndieWorks | Dashboard');
  }
}
