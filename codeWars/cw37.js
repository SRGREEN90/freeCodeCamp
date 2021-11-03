class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minFromArray = args[0];
        for (let i = 0; i < args.length; i++)
            if (args[i] < minFromArray) {
                minFromArray = args[i]
            }
        return minFromArray;
    }
}