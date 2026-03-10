'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let result = {};
  let stateCopy = { ...state };
  let actionsCopy = { ...actionsCopy };

  for (const action of actionsCopy) {
    switch (action.type) {
      case 'addProperties': {
        addProperties(stateCopy.extraData);
        break;
      }
      case 'removeProperties': {
        removeProperties(stateCopy.keysToRemove);
        break;
      }
      case 'clear': {
        clear(stateCopy.clear);
        break;
      }
    }
  }
}

function addProperties(action) {
  for (const add in action) {
    Object.assign(state, add.extraData);
  }
}
function removeProperties(action) {
  for (const remove in action.keysToRemove) {
    delete state[remove];
  }
}
function clear(action) {
  for (const clear in action) {
    delete state[clear];
  }
}

module.exports = transformStateWithClones;
