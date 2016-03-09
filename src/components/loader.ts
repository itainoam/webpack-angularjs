import Greeter from './greeter/greeterDirective.ts';

export default (module: ng.IModule) => {
    module.directive('miqGreeter', Greeter.Factory());
}
