
/*!
 * migrate - Migration
 * Copyright (c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Expose `Migration`.
 */

module.exports = Migration;

const wrapper = promise => next => new Promise((resolve, reject) => {
  promise().then(() => {
    resolve(next());
  }).catch((err) => {
    reject(next(err));
  });
});

function Migration(title, up, down) {
  this.title = title;
  this.up = wrapper(up);
  this.down = wrapper(down);
}