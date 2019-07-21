import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

    @Input()
    public imageSource: string;   

    @Input("width")
    public imageWidth: number = 100;

    @Input("height")
    public imageHeight: number = 100;

    @Output()
    public imageOver = new EventEmitter<string>(); // Component-ארוע חדש שאנו יוצרים בתוך ה

    @Output()
    public imageLeave = new EventEmitter<undefined>();

    public mouseover(): void {
        // Raising an Event - העלאת ארוע
        this.imageOver.emit(this.imageSource);
    }

    public mouseleave(): void {
        this.imageLeave.emit();
    }
}
