import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SMS } from 'src/app/models/sms';
import { Book } from 'src/app/models/book';
import { stringify } from 'querystring';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    public constructor(private title: Title) { }

    public ngOnInit(): void {
        this.title.setTitle("Northwind | Contact Us");
    }

    public sendSMS(): void {
        let sms1 = new SMS<string>("0529865412", "Hello");
        sms1.send();
        // sms1.message = 123; // Error.

        let sms2: SMS<number>;
        sms2 = new SMS<number>("052-9658954", 123456);
        sms2.send();

        let sms3: SMS<Date> = new SMS<Date>("054-8956542", new Date());
        sms3.send();

        let b = new Book<string, number>("Angular is Fun", 99.99);
        alert(b.front + ", Price: " + b.back);
    }

}
