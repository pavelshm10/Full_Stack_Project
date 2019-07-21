import { Directive, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[colored]' // שעלינו לכתוב בתגית Directive-שם ה
})
export class ColoredDirective implements OnInit {

    @HostBinding("style.color")
    public color: string;

    @Input("colored") // colored = the selector
    public ms: number;

    public constructor() { }

    public ngOnInit(): void {
        if (this.ms) {
            setInterval(() => this.color = this.getRandomColor(), this.ms);
        }
        else {
            this.color = this.getRandomColor();
        }
    }

    private getRandomColor(): string {
        const red = Math.floor(256 * Math.random());
        const green = Math.floor(256 * Math.random());
        const blue = Math.floor(256 * Math.random());
        const color = `rgb(${red},${green},${blue})`;
        return color;
    }
}
