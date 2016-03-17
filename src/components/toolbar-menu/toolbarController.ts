///<reference path="../../tsd.d.ts"/>

export default class ToolbarController {
    public toolbarItems: any;
    /*@ngInject*/
    constructor(private $window: ng.IWindowService, private $location: ng.ILocationService) {}

    public onItemClick(item: any) {
        if (item.hasOwnProperty('actionUrl')) {
            this.$location.path(item.actionUrl);
        }
    }
}
