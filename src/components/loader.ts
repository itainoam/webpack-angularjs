import Greeter from './greeter/greeterDirective.ts';
import toolbarMenuLoader from './toolbar-menu/loader';
import dataTableLoader from './data-table/loader';

export default (module: ng.IModule) => {
    module.directive('miqGreeter', Greeter.Factory());
    toolbarMenuLoader(module);
    dataTableLoader(module);
}
