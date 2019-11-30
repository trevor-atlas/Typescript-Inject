import {LazyFactory} from '../di/LazyFactory';

export const Inject = (target: any, key: string) => {
    let val = target[key]

    if (delete target[key]) {
        return Object.defineProperty(target, key, {
            get: () => {
                // an ugly cast :(
                // if you know a good way to do this without converting LazyFactory to an object literal please let me know!
                const concrete = (LazyFactory.getInstance() as any)[key];
                if (concrete) {
                    val = concrete();
                }
                return val;
            },
            enumerable: true,
            configurable: true
        });
    }
};
