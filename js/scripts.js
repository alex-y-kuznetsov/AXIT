'use strict'

var tabButtonOne = document.querySelector('#tab-btn1');
var tabButtonTwo = document.querySelector('#tab-btn2');
var tabButtonThree = document.querySelector('#tab-btn3');
var tabButton = document.querySelector('.tab-button');
var tabs = document.querySelector('.tab');
var tabOne = document.querySelector('.tab1');
var tabTwo = document.querySelector('.tab2');
var tabThree = document.querySelector('.tab3');

tabButtonOne.addEventListener('click', function() {
  if (tabOne.classList.contains('tab-invisible')) {
    tabTwo.classList.add('tab-invisible');
    tabThree.classList.add('tab-invisible');
    tabOne.classList.remove('tab-invisible');
    tabButtonOne.classList.add('tab-button-active');
    tabButtonTwo.classList.remove('tab-button-active');
    tabButtonThree.classList.remove('tab-button-active');
  } else if (!tabButtonOne.classList.contains('tab-button-active')) {
    tabOne.classList.add('tab-invisible')
  };
});

tabButtonTwo.addEventListener('click', function() {
  if (tabTwo.classList.contains('tab-invisible')) {
    tabOne.classList.add('tab-invisible');
    tabThree.classList.add('tab-invisible');
    tabTwo.classList.remove('tab-invisible');
    tabButtonTwo.classList.add('tab-button-active');
    tabButtonOne.classList.remove('tab-button-active');
    tabButtonThree.classList.remove('tab-button-active');
  } else if (!tabButtonTwo.classList.contains('tab-button-active')) {
    tabTwo.classList.add('tab-invisible')
  };
});

tabButtonThree.addEventListener('click', function() {
  if (tabThree.classList.contains('tab-invisible')) {
    tabOne.classList.add('tab-invisible');
    tabTwo.classList.add('tab-invisible');
    tabThree.classList.remove('tab-invisible');
    tabButtonThree.classList.add('tab-button-active');
    tabButtonOne.classList.remove('tab-button-active');
    tabButtonTwo.classList.remove('tab-button-active');
  } else if (!tabButtonThree.classList.contains('tab-button-active')) {
    tabThree.classList.add('tab-invisible')
  };
});
