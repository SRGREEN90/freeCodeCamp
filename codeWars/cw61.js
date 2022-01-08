function well(x){
    const good = x.filter((i) => i === "good").length;

    return good === 0
        ? "Fail!"
        : good > 2
            ? "I smell a series!"
            : "Publish!";
}