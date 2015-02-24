// ==UserScript==
// @name          V1 SFDC Linker
// @description	  Create links to SFDC from V1
// @include       https://www11.v1host.com/VentyxProd/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// @author        rf5860
// ==/UserScript==
// Style
var targetDiv = $('label:contains("SFDCCaseNumber:")').parent().find('div.value');
var caseNumber = targetDiv.html();
targetDiv.html('<a href="http://litsfvm1/sfcaselookup/default.aspx?Case=' + caseNumber + '">' + caseNumber + '</a>');
