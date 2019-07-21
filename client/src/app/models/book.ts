export class Book<TFrontCover, TBackCover> {

    public front: TFrontCover;
    public back: TBackCover;

    public constructor(front: TFrontCover, back: TBackCover) {
        this.front = front;
        this.back = back;
    }

}