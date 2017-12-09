# Firebase 101

```
import * as firebase from 'firebase';

const config = {
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXm",
    databaseURL: "XXXXXXXXm",
    projectId: "expXXXXXXXXXXXXXXX39",
    storageBucket: "expXXXXXXXXXXXXXXXXom",
    messagingSenderId: "XXXXXXXXX"
};
firebase.initializeApp(config);

const database = firebase.database();
```

### SET OR INSERT INTO DB
```
database.ref().set({
    name: "Ashish",
    age: 10,
    attributes: {
        height: 12,
        width: 13
    }
})
```

### REMOVE FROM DB
```
database.ref('attributes/width').remove();
```

### UPDATE FROM DB
Takes always an object
```
database.ref().update({
    name: "Ashish Verma",
    age: 26,
    'attributes/height': 33 // to remove field with update or set - value is null
})
```

### READ FROM DB

**METHOD 1** -> Get Value only Once
```
database.ref()
    .once('value')
    .then((snapshot) => console.log(snapshot.val()))
    .catch((e) => console.log('error', e));
```

**METHOD 2** -> Subscribe to changes

when any value gets changed - returns **all**
```
database.ref()
    .on('value',
        (snapshot) => console.log(snapshot.val()), 
        (e) => { console.log("Error", e) }
    )
```

when any child is deleted - returns deleted one
```
database.ref()
    .on('child_removed',
        (snapshot) => console.log(snapshot.val()), 
        (e) => { console.log("Error", e) }
    )
```

when any child is changed - returns **changed one**
```
database.ref()
    .on('child_changed',
        (snapshot) => console.log(snapshot.val()), 
        (e) => { console.log("Error", e) }
    )
```

when any child is added - returns **new children plus the existing ones**
```
database.ref()
    .on('child_added',
        (snapshot) => console.log(snapshot.val()), 
        (e) => { console.log("Error", e) }
    )
```

**METHOD 2.1** -> Un-Subscribe All changes
```
database.ref().off()
```

**METHOD 2.2** -> Un-Subscribe Some changes
```
const onValueChange = database.ref()
    .on('value', (snapshot) => {
        console.log(snapshot.val())
    }, (e) => { console.log("Error", e) })

setTimeout(() => {
    console.log(onValueChange);
    database.ref().off('value', onValueChange);
    database.ref('attributes/height').set(25);
}, 5000)
```

### Storing List
**Firebase doesnt support Arrays**

So to deal with it we can use something like

```
database.ref('notes').push({
    title: 'Learn Firebase',
    body: 'realtime DB is cool!'
})
```

This command creates the object under **random key** insides notes.

```
notes
    -L-uxrYE5LSUGBgbhBjl
        body: "realtime DB is cool!"
        title: "Learn Firebase"
```