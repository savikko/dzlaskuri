Template.layout.onRendered(function() {
    var instance = this;
    var id = FlowRouter.getParam('id');
    var subscription = instance.subscribe('dz', id);
});

Template.layout.events({
  'click #lang_fi' : function () {
      TAPi18n.setLanguage('fi');
  },
  'click #lang_en' : function () {
      TAPi18n.setLanguage('en');
  }
});