(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['comission'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"portfolio"),depth0,{"name":"portfolio","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<body>\r\n    \r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"header"),depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<h1>Since this is my portfolio...</h1>\r\n<p>Why not trying to comission me if you like what you see here, which contains some more of older work.</p>\r\n\r\n<h1>Pixel Art</h1>\r\n<p>Some of these are actually being used for a game in development by a friend of mine!</p>\r\n<p>(I should add a link to the relevant site to this sometime.)</p>\r\n\r\n<div id=\"pixel-art-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"vgs") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n<h1>Digital Art</h1>\r\n\r\n<div id=\"digital-art-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"digiarts") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "")
    + "</div>\r\n\r\n<h2>Lastly, this site!</h2>\r\n<h3>If you like how this site looks, I may be able to help you with a thing or two for your very own site!</h3>\r\n<h3>And likely for much cheaper than someone else since I'm a scrub and I gotta start somewhere.</h3>\r\n\r\n<h1>Contact Me</h1>\r\n<p>this.exists.now.dev@gmail.com</p>\r\n\r\n</body>";
},"usePartial":true,"useData":true});
})();