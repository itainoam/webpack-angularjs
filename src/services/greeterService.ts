export interface MiQIgreetingService {
    getGreting(): string;
}

export default class GreetingService implements ng.IServiceProvider {
    private greetings: string;
    public $get(): MiQIgreetingService {
        return {
            getGreting: () => this.greetingsFromService()
        };
    };

    public greetingsFromService(): string {
        return this.greetings + ' from Service itself, you can even enable bower linking?';
    }

    public setGreetings(greetings): void {
        this.greetings = greetings;
    }
}
