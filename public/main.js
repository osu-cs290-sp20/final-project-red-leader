(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <title>THIS EXISTS NOW</title>\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scaled=1\">\r\n    \r\n    <link href=\"https://fonts.googleapis.com/css?family=Righteous\" rel=\"stylesheet\">\r\n    \r\n    <link rel=\"stylesheet\" href=\"/style.css\" media=\"screen\">\r\n\r\n   <script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js\"></script>\r\n\r\n    <script src=\"../../public/main.js\"charset=\"utf-8\" defer></script>  \r\n\r\n    <script src=\"../../public/header.js\"charset=\"utf-8\" defer></script>  \r\n\r\n    <script src=\"../../public/images.js\"charset=\"utf-8\" defer></script>\r\n    \r\n    <script src=\"../../public/journal.js\"charset=\"utf-8\" defer></script>\r\n\r\n    <script src=\"../../public/404.js\"charset=\"utf-8\" defer></script>\r\n    \r\n    <script src=\"../../public/home.js\"charset=\"utf-8\" defer></script>\r\n\r\n    <script src=\"../../public/artblog.js\"charset=\"utf-8\" defer></script>\r\n    \r\n    <script src=\"../../public/comission.js\"charset=\"utf-8\" defer></script>\r\n    \r\n    <script src=\"../../public/newsletter.js\"charset=\"utf-8\" defer></script>\r\n\r\n    <script src=\"../index.js\" charset=\"utf-8\" defer></script>\r\n\r\n  </head>\r\n\r\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":37,"column":2},"end":{"line":37,"column":12}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</html>";
},"useData":true});
})();