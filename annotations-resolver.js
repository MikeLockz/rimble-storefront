const { utils } = require('react-docgen');
const { default: resolveHOC } = require('react-docgen/dist/utils/resolveHOC');

// From: https://github.com/Jmeyering/react-docgen-annotation-resolver/blob/master/src/index.js
// See: https://github.com/styled-components/styled-components/issues/945

module.exports = function(ast, recast) {
  const components = [];
  const types = recast.types.namedTypes;

  const exportTagged = path => {
    /**
     * If an export doesn't have leading comments, we can simply continue
     */
    const leadingComments = path.value.leadingComments;
    if (!leadingComments) {
      return false;
    }

    // Search for the @component tag in any export.
    const isTagged = leadingComments.reduce(
      (acc, comment) =>
        acc === true || comment.value.indexOf("@component") !== -1,
      [],
    );

    if (!isTagged) {
      return false;
    }

    const definitions = utils.resolveExportDeclaration(path, types);

    definitions.forEach(definition => {
      if (definition && components.indexOf(definition) === -1) {
        components.push(utils.resolveToValue(resolveHOC(definition)));
      }
    });

    return false;
  };

  recast.visit(ast, {
    visitFunctionDeclaration: false,
    visitFunctionExpression: false,
    visitClassDeclaration: false,
    visitClassExpression: false,
    visitIfStatement: false,
    visitWithStatement: false,
    visitSwitchStatement: false,
    visitCatchCause: false,
    visitWhileStatement: false,
    visitDoWhileStatement: false,
    visitForStatement: false,
    visitForInStatement: false,

    visitExportDeclaration: exportTagged,
    visitExportNamedDeclaration: exportTagged,
    visitExportDefaultDeclaration: exportTagged,
  });

  return components;
}
