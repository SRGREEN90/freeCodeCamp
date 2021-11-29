function howMuchILoveYou(nbPetals) {
    variants = ["not at all", "I love you", "a little",

        "a lot", "passionately", "madly"]

    return variants[nbPetals % 6]
}