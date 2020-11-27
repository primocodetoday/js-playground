"use strict";
// Intersection types
function useTool(tool) {
    tool.cut();
    tool.slice();
}
var swissArmyKnife = {
    slice: function () {
        return "slice!";
    },
    cut: function () {
        return "cut!";
    },
};
useTool(swissArmyKnife);
