// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Blida', function (err, temp) {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log('Success', temp);
//     }
// });

// function getTempPromise (location){
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);

//     });
// }

// getTempPromise('Blida').then(function (temp) {
//     console.log('Promise success', temp);
// }, function (err) {
//     console.log('Promise error', err);
// });

// Challenge Area 

function addPromise (a, b) {
    return new Promise (function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
        } else {
        reject("You need to enter a valid number");
        }
    });
}

addPromise(18,8).then(function (result) {
    console.log('Success', result);
}, function (error) {
    console.log('Error', error);
});

addPromise('Zerf', 9).then(function (result) {
    console.log('This should not show up');
}, function (err) {
    console.log('This should appear');
});