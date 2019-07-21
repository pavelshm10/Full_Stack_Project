import { Injectable } from '@angular/core';

@Injectable({
     // הזה ברמת כל האפליקציה Service-זהה למצב בו הגדרנו את ה
    providedIn: "root"
})
export class MathService {

    public getAverage(arr: number[]): number {
        let sum = 0;
        for(let val of arr) {
            sum += val;
        }
        return sum / arr.length;
    }
    
}
