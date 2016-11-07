Dz = new Mongo.Collection('dz');

Schemas.Dz = new SimpleSchema({
  memberFee: {
    type: Number,
    label: "Jäsenmaksu",
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 5,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  members: {
    type: Number,
    label: "Jäseniä",
    max: 1000,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 10,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  fixedDzCosts: {
    type: Number,
    label: "Kiinteät kulut",
    max: 50000,
    min: 5000,
    autoform: {
      type: "noUiSlider",
      step: 500,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  jumpDaysPerYear: {
    type: Number,
    label: "Hyppypäiviä / vuosi",
    max: 365,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  jumpPrice4K: {
    type: Number,
    label: "Hyppylipun hinta / 4000m",
    max: 35,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  jumpPriceTandem: {
    type: Number,
    label: "Hyppylipun hinta / Tandem",
    max: 600,
    min: 300,
    autoform: {
      type: "noUiSlider",
      step: 10,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  compensationTI: {
    type: Number,
    label: "Korvaus / Tandemmesu",
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  compensationCamera: {
    type: Number,
    label: "Korvaus / Kuvaaja",
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  compensationPacker: {
    type: Number,
    label: "Korvaus / tandempakkaaja",
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  compensationRig: {
    type: Number,
    label: "Korvaus / Tandemkamat",
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  compensationPilot: {
    type: Number,
    label: "Korvaus / Pilotti / poka",
    max: 50,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  jumpsPerYear: {
    type: Number,
    label: "Lisenssihyppyjä / vuosi",
    max: 15000,
    min: 500,
    autoform: {
      type: "noUiSlider",
      step: 100,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  tandemsPerYear: {
    type: Number,
    label: "Tandemeita / vuosi",
    max: 1000,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 10,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  acCostPerYear: {
    type: Number,
    label: "Lentokoneen kiinteät kulut",
    max: 20000,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 500,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  acCostPerFlightHour: {
    type: Number,
    label: "Lennon kulu / h",
    max: 500,
    min: 100,
    autoform: {
      type: "noUiSlider",
      step: 10,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  fullAltitudeLoadMins: {
    type: Number,
    label: "Poka-aika 4000m (maasta-maahan)",
    max: 45,
    min: 5,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  acJumpersIn: {
    type: Number,
    label: "Hyppääjiä kyytiin",
    max: 30,
    min: 3,
    autoform: {
      type: "noUiSlider",
      step: 1,
      noUiSliderOptions: {
        tooltips: true,
        format: {
          from: function(value) {
            return parseInt(value);
          },
          to: function(value) {
            return parseInt(value);
          }
        }
      },
      noUiSlider_pipsOptions: {
        mode: 'range',
        density: 1
      }
    }
  },
  updatedAt: { // Date when Dz was update
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        this.unset();
      } else {
        return new Date;
      }
    }
  }
});

Dz.attachSchema(Schemas.Dz);

Dz.allow({
  'insert': function(userId, doc) {
      return true;
  },
  'update': function(userId, doc) {
      return false;
  },
});