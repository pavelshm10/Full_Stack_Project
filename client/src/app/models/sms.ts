export class SMS<TMessage> { // Generics

    public phone: string;
    public message: TMessage;

    public constructor(phone: string, message: TMessage) {
        this.phone = phone;
        this.message = message;
    }

    public send(): void {
        alert("Sending " + this.message + " to " + this.phone);
    }

    public getMessage() : TMessage {
        return this.message;
    }
}