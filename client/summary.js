Template.summary.helpers({
  fullAltitudeLoadMins() {
    return AutoForm.getFieldValue('fullAltitudeLoadMins', 'newDz');
  },
  acJumpersIn() {
    return AutoForm.getFieldValue('acJumpersIn', 'newDz');
  },
  jumpsPerYear() {
    return AutoForm.getFieldValue('jumpsPerYear', 'newDz');
  },
  jumpDaysPerYear() {
    return AutoForm.getFieldValue('jumpDaysPerYear', 'newDz');
  },
  tandemsPerYear() {
    return AutoForm.getFieldValue('tandemsPerYear', 'newDz');
  },
  fieldValue(field) {
    return AutoForm.getFieldValue(field, 'newDz');
  },

  loadsPerYear() {
    return loadsPerYear();
  },
  flightHoursPerYear() {
    return flightHoursPerYear();
  },
  averageFlightHoursPerJumpDay() {
    var jumpDaysPerYear = AutoForm.getFieldValue('jumpDaysPerYear', 'newDz');
    return Math.round(flightHoursPerYear()/jumpDaysPerYear);
  },
  memberfeeTotal() {
    return memberFeeTurnOver();
  },
  fixedCostsTotal() {
    return fixedCostsTotal();
  },
  slotCost() {
    return slotCost();
  },
  licenseJumpsTurnOver() {
    return licenseJumpsTurnOver();
  },
  licenseJumpsCosts() {
    var jumpsPerYear = AutoForm.getFieldValue('jumpsPerYear', 'newDz');
    return jumpsPerYear * slotCost();
  },
  licenseJumpsRevenue() {
    var jumpsPerYear = AutoForm.getFieldValue('jumpsPerYear', 'newDz');
    return licenseJumpsTurnOver() - (jumpsPerYear * slotCost());
  },
  tandemJumpsTurnOver() {
    return tandemJumpsTurnOver();
  },
  tandemJumpsCosts() {
    var tandemsPerYear = AutoForm.getFieldValue('tandemsPerYear', 'newDz');
    return tandemsPerYear * tandemJumpCost();
  },
  tandemJumpsRevenue() {
    var tandemsPerYear = AutoForm.getFieldValue('tandemsPerYear', 'newDz');
    return tandemJumpsTurnOver() - (tandemsPerYear * tandemJumpCost());
  },
  capacityPerHour() {
    var jumpers = AutoForm.getFieldValue('acJumpersIn', 'newDz');
    var loadtime = AutoForm.getFieldValue('fullAltitudeLoadMins', 'newDz');
    return Math.round(
      60 / loadtime * jumpers);
  },
  turnOverTotal() {
    return turnOverTotal();
  },
  revenueTotal() {
    return turnOverTotal() - costsTotal();
  },
  costsTotal() {
    return costsTotal();
  },
  costsTotalMinusFixedCosts() {
    return costsTotal() - fixedCostsTotal();
  },
  revenueTotalMinusFixedCosts() {
    var value = turnOverTotal() - costsTotal() - fixedCostsTotal();
    var valueClass = 'success';
    if (value > 0) {
      valueClass = 'success';
    } else {
      valueClass = 'danger';
    }
    return {
      value: turnOverTotal() - costsTotal() - fixedCostsTotal(),
      class: valueClass
    };
  }
});

function flightHoursPerYear() {
    var loadtime = AutoForm.getFieldValue('fullAltitudeLoadMins', 'newDz');
    return Math.round((loadtime/60)*loadsPerYear());
}

function loadsPerYear() {
  var jumpsPerYear = AutoForm.getFieldValue('jumpsPerYear', 'newDz');
  var tandemsPerYear = AutoForm.getFieldValue('tandemsPerYear', 'newDz');
  var acJumpersIn = AutoForm.getFieldValue('acJumpersIn', 'newDz');
  return Math.round(
    (jumpsPerYear + (tandemsPerYear * 3)) / acJumpersIn
  );
}

function fixedCostsTotal() {
  var dzCosts = AutoForm.getFieldValue('fixedDzCosts', 'newDz');
  var acCosts = AutoForm.getFieldValue('acCostPerYear', 'newDz');
  return Math.round(dzCosts + acCosts);
}

function turnOverTotal() {
  return memberFeeTurnOver() + tandemJumpsTurnOver() + licenseJumpsTurnOver();
}

function costsTotal() {
  var jumpsPerYear = AutoForm.getFieldValue('jumpsPerYear', 'newDz');
  var tandemsPerYear = AutoForm.getFieldValue('tandemsPerYear', 'newDz');
  return (tandemsPerYear * tandemJumpCost()) + (jumpsPerYear * slotCost());
}

function memberFeeTurnOver() {
  var members = AutoForm.getFieldValue('members', 'newDz');
  var memberFee = AutoForm.getFieldValue('memberFee', 'newDz');
  return Math.round(members * memberFee);
}

function slotCost() {
  var jumpPrice = AutoForm.getFieldValue('jumpPrice4K', 'newDz');
  var flightHour = AutoForm.getFieldValue('acCostPerFlightHour', 'newDz');
  var flightMinute = flightHour / 60;
  var jumpers = AutoForm.getFieldValue('acJumpersIn', 'newDz');
  var loadtime = AutoForm.getFieldValue('fullAltitudeLoadMins', 'newDz');
  var compensationPilot = AutoForm.getFieldValue('compensationPilot', 'newDz');
  return Math.round(
    (flightMinute * loadtime + compensationPilot) / jumpers);
}

function tandemJumpsTurnOver() {
  var tandemPrice = AutoForm.getFieldValue('jumpPriceTandem', 'newDz');
  var tandemsPerYear = AutoForm.getFieldValue('tandemsPerYear', 'newDz');
  return Math.round(tandemPrice * tandemsPerYear);
}

function licenseJumpsTurnOver() {
  var jumpPrice = AutoForm.getFieldValue('jumpPrice4K', 'newDz');
  var jumpsPerYear = AutoForm.getFieldValue('jumpsPerYear', 'newDz');
  return Math.round(jumpPrice * jumpsPerYear);
}

function tandemJumpCost() {
  var slots = slotCost() * 3; // customer + ti + camera;
  var compensationRig = AutoForm.getFieldValue('compensationRig', 'newDz');
  var compensationCamera = AutoForm.getFieldValue('compensationCamera', 'newDz');
  var compensationTI = AutoForm.getFieldValue('compensationTI', 'newDz');
  var compensationPacker = AutoForm.getFieldValue('compensationPacker', 'newDz');
  return Math.round(
    slots + compensationPacker + compensationTI + compensationCamera + compensationRig);
}