///<reference path="../../tsd.d.ts"/>

import GreeterController from './greeterController';

export default class Greeter implements ng.IDirective {
    public controller: any = GreeterController;
    public controllerAs: string = 'vm';
    public template = require<string>('./greeter.html');

    public static Factory = () => {
        let directive: ng.IDirectiveFactory = () => new Greeter();
        directive.$inject = [];
        return directive;
    };
}
