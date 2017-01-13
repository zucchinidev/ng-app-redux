const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://127.0.0.1:27017/appstore';

const connecting = () => {
  let executor = (resolve, reject) => {
    mongoClient.connect(url, (err, db) => err ? reject(err) : resolve(db));
  };

  return new Promise(executor);
};

const colConnecting = (collectionName) => {
  return new Promise((resolve, reject) => {
    mongoClient.connect(url, (err, db) => err ? reject(err) : resolve(db.collection(collectionName)));
  });
};

const finding = (collectionName, query, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      query._id = new ObjectID(id);
    }
    colConnecting(collectionName)
      .then(collectionDb => {
        collectionDb.find(query).toArray((err, result) => err ? reject(err) : resolve(result));
      })
      .catch(err => reject(err));
  });
};

const inserting = (collectionName, document) => {
  return new Promise((resolve, reject) => {
    colConnecting(collectionName)
      .then(collectionDb => {
        let callback = (err, result) => err ? reject(err) : resolve(result);
        collectionDb.insert(document, callback)
      })
      .catch(err => reject(err));
  });
};

const updating = (collectionName, query, id, document) => {
  return new Promise((resolve, reject) => {
    if (id) {
      query._id = new ObjectID(id);
    }
    let callback = (err, result) => err ? reject(err) : resolve(result);
    colConnecting(collectionName)
      .then(collectionDb => collectionDb.update(query, document, callback))
      .catch(err => reject(err));

  });
};

const deleting = (collectionName, query, id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      query._id = new ObjectID(id);
    }
    colConnecting(collectionName)
      .then(collectionDb => collectionDb.deleteOne(query, (err, result) => err ? reject(err) : resolve(result)))
      .catch(err => reject(err));
  });
};

const aggregating = (collectionName, query) => {
  return new Promise((resolve, reject) => {
    colConnecting(collectionName)
      .then(collectionDb => collectionDb.aggregate(query).toArray((err, result) => err ? reject(err) : resolve(result)))
      .catch(err => reject(err));
  });
};


module.exports = {
  connecting: connecting,
  colConnecting: colConnecting,
  finding: finding,
  inserting: inserting,
  updating: updating,
  deleting: deleting,
  aggregating: aggregating
};