const fap = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        fap.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
        fap.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

export { fap };