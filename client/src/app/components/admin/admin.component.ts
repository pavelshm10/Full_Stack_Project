import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    public constructor(private title: Title) { }

    public ngOnInit(): void {
        this.title.setTitle("Northwind | Admin");
    }

}
