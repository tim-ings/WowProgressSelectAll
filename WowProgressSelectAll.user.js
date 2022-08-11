// ==UserScript==
// @name         WowProgress - Select All
// @namespace    https://tim-ings.com/
// @version      1.1
// @description  Adds a select all characters button to the guild update page
// @author       Arwic-Frostmourne
// @match        https://www.wowprogress.com/update_progress/guild/*
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

(function() {
    console.log("Loaded 'Warcraft Logs Guild Update Select All' by Arwic");
    var select10 = document.getElementById("select10");
    var selectAll = document.createElement("a");
    selectAll.setAttribute("class", "innerLink");
    selectAll.setAttribute("href", "#");
    selectAll.appendChild(document.createTextNode("Select All"));
    selectAll.addEventListener("click", function () {
        var guildCharChecks = document.querySelectorAll(".guild_char_list input");
        for (var i = 0; i < guildCharChecks.length; i++) {
            guildCharChecks[i].checked = true;
        }
    });
    select10.parentNode.appendChild(selectAll);
})();
