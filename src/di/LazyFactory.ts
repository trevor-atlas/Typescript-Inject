export class LazyFactory {

    // this is where we store our singleton reference to this class instance
    private static instance: LazyFactory;

    // hide constructor, must use getInstance
    private constructor() {}

    // if there is not yet an instance of this class, create it. Otherwise return that instance
    public static getInstance(): LazyFactory {
        if (!LazyFactory.instance) {
            LazyFactory.instance = new LazyFactory();
        }
        return LazyFactory.instance;
    }

    public myService() {
        if (process.env.ENV === 'production') {
            return new (require('../services/MyService')).MyService();
        }
        return new (require('../services/MockMyService')).MockMyService();
    }

    public baseURL() {
        if (process.env.ENV === 'production') {
            return 'prod.myapi.com';
        }
        return 'stage.myapi.com';
    }
}