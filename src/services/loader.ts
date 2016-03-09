import Greeter from './greeterService';
export default (module: ng.IModule) => {
    module.provider('MiqGreeter', Greeter);
}
