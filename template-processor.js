function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
    return this.template.replace(/{{(.*?)}}/g, function(match, prop) {
        return dictionary.hasOwnProperty(prop) ? dictionary[prop] : '';
    });
};

