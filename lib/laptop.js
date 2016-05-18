'use strict';

// Laptop obeject

let laptop = {
  status: 'off',
  screenSizeInInches: 13,
  ramSizeInGB: 8,
  hardDriveInGB: 250,
  software: [
    'Spotify',
    'MS Office',
    'iTunes',
    'Atom',
    'OS X'
  ],
  togglePower: function () {
    if (this.status === 'on') {
      this.status = 'off';
    } else {
      this.status = 'on';
    };
    console.log('My laptop is now ' + this.status) ;
  }
};

// Add some software to my laptop
let installSoftware = function (softwareName) {
  laptop.software[laptop.software.length] = softwareName;
};

// Remove some software from my laptop
let uninstallSoftware = function(softwareName, replacementSoftware) {
  laptop.software[laptop.software.indexOf(softwareName)] = replacementSoftware;
};


module.exports = () =>
  true;
