function friend(friends){
    var myFriends = friends.filter((word) => {
        return word.length === 4
    });
      return myFriends
  }