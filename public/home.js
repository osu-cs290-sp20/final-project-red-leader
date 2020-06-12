(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n  <body>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <h1>ABOUT</h1> <!--If I have time I should draw up a nice welcome sign-->\r\n    <p>Hiya! \r\n      Thank you for being here. This is a nice first step for me to flex some\r\n       of my assorted skills, as a wannabe programmer, artist, and overall\r\n        creative mind. If I am lucky this is something I will be able to \r\n        maintain as a decent portfolio, to show my potential.\r\n\r\n        Anyway please take a look around, and have a great day!\r\n\r\n        -TEN\r\n    </p>\r\n\r\n    <h1>MOST RECENT ANNOUNCEMENT</h1> <!--If I have time I should make this into a partial, but for now this should do-->\r\n    <p>\r\n      T E S T I N G\r\n      (this is sweet, these handlebars views are getting compiled as I save them!{without restarting the server!!!})\r\n    </p>\r\n\r\n    <h1>Find me on...</h1>\r\n    <ul>\r\n      <li id=\"link\">Instagram</li>\r\n      <li id=\"link\">Twitter</li>\r\n    </ul>\r\n\r\n  </body>";
},"usePartial":true,"useData":true});
})();