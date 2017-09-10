

import { storageRef } from '../src/config/firebase'

// import { firebase } from '../src/config/firebase'
// var mountainsRef = storageRef.child('../downImg/wolf.jpg');

// let storageRef = firebase.storage().ref("bench_filename")
// storageRef.put('../downImg/wolf.jpg')



// Create a child reference
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'

// Child references can also take paths delimited by '/'
var spaceRef = storageRef.child('../images/wolf.jpg');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"