import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    public constructor(private title: Title, private mathService: MathService) { }

    public ngOnInit(): void {
        this.title.setTitle("Northwind | Orders");
    }

    public testAverage(): void {
        let arr = [50.70, 64.30, 89.25, 120.87];
        let avg = this.mathService.getAverage(arr);
        alert("Average: " + avg);
    }

}
