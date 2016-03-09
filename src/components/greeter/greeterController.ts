///<reference path="../../tsd.d.ts"/>

import {MiQIgreetingService} from '../../services/greeterService';
export default class GreeterController {
    public greetings: string;
    /*@ngInject*/
    constructor(private MiqGreeter: MiQIgreetingService) {
        this.greetings = this.MiqGreeter.getGreting();
    }

}
