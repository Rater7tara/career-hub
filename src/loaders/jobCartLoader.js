import { getJobCart } from "../utilities/fakedb";

const cartJobsLoader = async () => {
    const loadedJobs = await fetch('data2-fea.json');
    const jobs = await loadedJobs.json();

    // if cart data is in database, you have to use async await
    const storedCart = getJobCart();

    const savedCart = [];

    for (const id in storedCart) {
        const addedJob = jobs.find(pd => pd.id === id);
        if (addedJob) {
            const quantity = storedCart[id];
            addedJob.quantity = quantity;
            savedCart.push(addedJob);
        }
    }

    // if you need to send two things
    // return [products, savedCart]
    // another options
    // return { products, cart: savedCart }

    return savedCart;
}

export default cartJobsLoader;