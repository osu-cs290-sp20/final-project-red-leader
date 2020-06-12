(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['images'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n  <body>\r\n    <!--Read in information for this page from a JSON file\r\n    containing an array where each element contains the following\r\n    file: path to image\r\n    title: tile of image\r\n    date: date\r\n    entry: blog post for image\r\n    Journal Entry:--> \r\n    <div id=\"base-container\">\r\n\r\n        <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":21}}}) : helper)))
    + "</h1>\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"file") || (depth0 != null ? lookupProperty(depth0,"file") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file","hash":{},"data":data,"loc":{"start":{"line":13,"column":18},"end":{"line":13,"column":26}}}) : helper)))
    + "\" alt=\"...\"/>\r\n\r\n    </div>\r\n\r\n    <div id=\"journal-container hidden\">\r\n\r\n      <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":18}}}) : helper)))
    + "</h2>\r\n      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"entry") || (depth0 != null ? lookupProperty(depth0,"entry") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"entry","hash":{},"data":data,"loc":{"start":{"line":20,"column":9},"end":{"line":20,"column":18}}}) : helper)))
    + "</p>\r\n\r\n    </div>\r\n  </body>";
},"useData":true});
})();