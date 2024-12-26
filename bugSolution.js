```javascript
// Correct usage of $inc operator with checks for existing field
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
  $inc:{field:value},
  $setOnInsert:{field:0}
});
```