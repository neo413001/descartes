var Graph = function(data) {

  //add a comment here
	//add another comment here
  this.config = JSON.parse(data.configuration);
  this.config = JSON.parse(data.configuration);
  this.overrides = JSON.parse(data.overrides) || {};
  this.target = (typeof this.overrides.target !== 'undefined') ? this.overrides.target : this.config.target;

  this.targets = function() {
    return this.target.map(function(t) { return {name: t} });
  };

  this.updateTargets = function(text) {
    this.target = text;
  };

  this.mergedConfig = function() {
    return $.extend({}, this.config, this.overrides, {targets: this.targets()});
  };
}
