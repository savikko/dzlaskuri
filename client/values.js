Template.values.helpers({
    defaultValues: function() {
        var id = FlowRouter.getParam('id');
        var valueDoc = {};
        if (id == null) {
            valueDoc = {
                memberFee: 75,
                members: 50,
                fixedDzCosts: 15000,
                jumpDaysPerYear: 80,
                jumpPrice4K: 28,
                jumpPriceTandem: 400,
                compensationTI: 50,
                compensationCamera: 25,
                compensationRig: 25,
                compensationPilot: 0,
                compensationPacker: 10,
                jumpsPerYear: 2500,
                tandemsPerYear: 50,
                acCostPerYear: 7500,
                acCostPerFlightHour: 200,
                fullAltitudeLoadMins: 28,
                acJumpersIn: 4
            }
        } else {
            valueDoc = Dz.findOne(id)
        }
        return valueDoc;
    },
    fieldValue(field) {
        return AutoForm.getFieldValue(field, 'newDz');
    },
});


AutoForm.hooks({
    newDz: {
        // Called when any operation succeeds, where operation will be
        // "insert", "update", "submit", or the method name.
        onSuccess: function(operation, result, template) {
            window.location.href = '/' + result;
        },
        onError: function(formType, error) {
            console.log(error);
        }
    }
});