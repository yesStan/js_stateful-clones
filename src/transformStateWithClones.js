'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let stateCopy = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        // Object.assign(stateCopy, action.extraData);
        stateCopy = { ...stateCopy, ...action.extraData };
        result.push({ ...stateCopy });
        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete stateCopy[key];
        }
        result.push({ ...stateCopy });
        break;
      }

      case 'clear': {
        result.push((stateCopy = {}));
        break;
      }
    }
  }

  return result;
}

module.exports = transformStateWithClones;
