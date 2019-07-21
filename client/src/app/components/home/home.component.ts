import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    public currentDiscount: number;
    public currentDate: Date;
    public minPrice: number;
    public imageWidth: number;
    public isWinter: boolean;
    public vegetables: string[];
    public grapesColor: string;
    public login: String;
    public dynamicBananaClass: { [cssClass: string]: boolean }; // string: boolean...

    @ViewChild("homeImage")
    public homeImageRef: ElementRef<HTMLImageElement>;

    // Title בשם Service הזרקה של
    public constructor(private title: Title) {  } // sessionStorage.setItem("isLoggedIn","false");

    public ngOnInit(): void {
       
        this.title.setTitle("Market | Home");
        
        // this.currentDiscount = 7; // Get discount from server.
        // this.currentDate = new Date(); // Set the current date and time.
        // this.minPrice = 50;
        // this.imageWidth = 300;
        // this.dynamicBananaClass = { "yellowBanana": true, "bolded": true, "underlined": false };
        // const month = new Date().getMonth() + 1;
        // this.isWinter = month >= 12 || month <= 3;
        // this.vegetables = ["Tomatoes", "Carrots", "Onions", "Potatoes"];
        // this.grapesColor = "Red";
       
    }

    public ngOnDestroy(): void { // מתבצעת בהריסת הרכיב  
    }


    // public increase(): void {
    //     this.imageWidth += 10;
    // }

    // public decrease(): void {
    //     this.imageWidth -= 10;
    // }

    // public reset(): void {
    //     this.imageWidth = 300;
    // }

    // public details(img: HTMLImageElement): void {
    //     alert(img.width + " X " + img.height + "\n" +
    //         this.homeImageRef.nativeElement.width + " X " +
    //         this.homeImageRef.nativeElement.height);
    // }
}
