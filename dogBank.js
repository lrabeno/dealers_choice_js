const dog = [
    {id: 1, 
     type: 'Basset Hound', 
     size: "medium", 
     about: 'Basset Hounds are long and have floopy ears!', 
     imgUrl: "https://images.unsplash.com/photo-1516726283839-a493d9f167aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
    },
    {id: 2, 
     type: 'Whippet', 
     size: 'small', 
     about: 'Whippets commonly get mistaken for greyhounds, which makes sense because they/re both super athletic!', 
     imgUrl: "https://images.unsplash.com/photo-1518460140838-62a96df71190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {id: 3, 
     type: 'Bulldog', 
     size: 'medium-small', 
     about: 'Bulldogs are super lazy. They like to sleep all day and are very stubborn', 
     imgUrl: "https://images.unsplash.com/photo-1611611158876-41699b77a059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
    },
    {id: 4, 
     type: 'Lab', 
     size: 'big', 
     about: 'Labs are super loyal and just want to be around their human. They like to eat and can play all day!', 
     imgUrl:"https://images.unsplash.com/photo-1600251408789-51eadd6adba4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
    }
  ];

  const list = () => {
    return [...dog]  // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  };

  const find = (id) => {
    const dogLink = dog.find(dog => dog.id === +id);
    return {...dogLink}; // Again, we copy the post data before returning so the original information is safe.
  }

  module.exports = { list: list, find: find };