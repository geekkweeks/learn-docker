const connectToDB = () => {
    const dummyPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        });
    })
}

export default connectToDB;