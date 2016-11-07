Template.layout.onRendered(function() {
    console.log('onrendered running');
    var instance = this;
    var id = FlowRouter.getParam('id');
    var subscription = instance.subscribe('dz', id);
});
