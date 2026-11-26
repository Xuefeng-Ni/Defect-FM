window.DEFECT_GRAPHS = {
  "mvtec-screw": {
    "source": "MVTEC",
    "paths": [
      [
        {
          "head": "screw",
          "tail": "appearance surface",
          "relation": "ensurring assembly feasibility",
          "weight": 0.8530855774879456
        },
        {
          "head": "appearance surface",
          "tail": "thread top",
          "relation": "improper material preparation process",
          "weight": 0.8814260959625244
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/mvtec-screw.png",
    "nodeCenters": {
      "screw": [
        1252,
        768
      ],
      "appearance surface": [
        2384,
        2134
      ],
      "thread top": [
        742,
        2992
      ]
    }
  },
  "aebad-s-aerospace-engine-blades": {
    "source": "AeBAD-S",
    "paths": [
      [
        {
          "head": "aerospace engine blades",
          "tail": "airfoil surface",
          "relation": "high aerodynamic efficiency",
          "weight": 0.27448326349258423
        },
        {
          "head": "airfoil surface",
          "tail": "fracture",
          "relation": "accidental collision",
          "weight": 0.09821534901857376
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/aebad-s-aerospace-engine-blades.png",
    "nodeCenters": {
      "aerospace engine blades": [
        4328,
        1040
      ],
      "airfoil surface": [
        2436,
        2144
      ],
      "fracture": [
        968,
        452
      ]
    }
  },
  "csddv3-engine-cylinder-block": {
    "source": "CSDDv3",
    "paths": [
      [
        {
          "head": "engine cylinder block",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.4574481248855591
        },
        {
          "head": "casting surface",
          "tail": "defect",
          "relation": "improper casting process",
          "weight": 0.4223693311214447
        }
      ],
      [
        {
          "head": "engine cylinder block",
          "tail": "machined surface",
          "relation": "closely fitting with other components",
          "weight": 0.37341415882110596
        },
        {
          "head": "machined surface",
          "tail": "defect",
          "relation": "improper milling process",
          "weight": 0.4183286130428314
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/csddv3-engine-cylinder-block.png",
    "nodeCenters": {
      "engine cylinder block": [
        3078,
        452
      ],
      "casting surface": [
        4328,
        2764
      ],
      "defect": [
        1768,
        3788
      ],
      "machined surface": [
        440,
        1304
      ]
    }
  },
  "ec-electronic-ceramics": {
    "source": "EC",
    "paths": [
      [
        {
          "head": "electronic ceramics",
          "tail": "critical surface",
          "relation": "ensuring electrical performance and packaging reliability",
          "weight": 0.08422428369522095
        },
        {
          "head": "critical surface",
          "tail": "breakage",
          "relation": "improper sintering process",
          "weight": 0.03872283920645714
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/ec-electronic-ceramics.png",
    "nodeCenters": {
      "electronic ceramics": [
        3888,
        3092
      ],
      "critical surface": [
        2352,
        1832
      ],
      "breakage": [
        440,
        1912
      ]
    }
  },
  "3cad-aluminum-pc": {
    "source": "3CAD",
    "paths": [
      [
        {
          "head": "aluminum pc",
          "tail": "critical surface",
          "relation": "ensuring aesthetics and durability",
          "weight": 0.030359609052538872
        },
        {
          "head": "critical surface",
          "tail": "bump",
          "relation": "improper machining process",
          "weight": 0.03901107609272003
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/3cad-aluminum-pc.png",
    "nodeCenters": {
      "aluminum pc": [
        440,
        1816
      ],
      "critical surface": [
        2424,
        1880
      ],
      "bump": [
        536,
        2740
      ]
    }
  },
  "mec-motor-end-cover": {
    "source": "MEC",
    "paths": [
      [
        {
          "head": "motor end cover",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.4352843165397644
        },
        {
          "head": "casting surface",
          "tail": "dirt",
          "relation": "improper cleaning process",
          "weight": 0.5301624536514282
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/mec-end-cover-dirt.png",
    "nodeCenters": {
      "motor end cover": [
        2788,
        772
      ],
      "casting surface": [
        604,
        3014
      ],
      "dirt": [
        1886,
        3788
      ]
    }
  },
  "enb-nozzle-limiter-support": {
    "source": "ENB",
    "paths": [
      [
        {
          "head": "nozzle limiter support",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.804668664932251
        },
        {
          "head": "casting surface",
          "tail": "dirt",
          "relation": "improper cleaning process",
          "weight": 0.07511837780475616
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/enb-nozzle-limiter-support.png",
    "nodeCenters": {
      "nozzle limiter support": [
        3148,
        706
      ],
      "casting surface": [
        2120,
        2000
      ],
      "dirt": [
        1738,
        452
      ]
    }
  },
  "hss-iad-example": {
    "source": "HSS-IAD",
    "paths": [
      [
        {
          "head": "engine cylinder block",
          "tail": "machined surface",
          "relation": "closely fitting with other components",
          "weight": 0.7460009455680847
        },
        {
          "head": "machined surface",
          "tail": "defect",
          "relation": "improper milling process",
          "weight": 0.8109040856361389
        }
      ],
      [
        {
          "head": "engine cylinder block",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.7228848934173584
        },
        {
          "head": "casting surface",
          "tail": "defect",
          "relation": "improper casting process",
          "weight": 0.8029483556747437
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/hss-iad-example.png",
    "nodeCenters": {
      "engine cylinder block": [
        440,
        1788
      ],
      "machined surface": [
        3072,
        452
      ],
      "defect": [
        4330,
        2416
      ],
      "casting surface": [
        1712,
        3788
      ]
    }
  },
  "ms-example": {
    "source": "Boda_motor_shell",
    "paths": [
      [
        {
          "head": "motor shell",
          "tail": "machined surface",
          "relation": "closely fitting with other components",
          "weight": 0.8723099827766418
        },
        {
          "head": "machined surface",
          "tail": "scratch",
          "relation": "improper milling process",
          "weight": 0.8842927813529968
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/ms-example.png",
    "nodeCenters": {
      "motor shell": [
        2908,
        2560
      ],
      "machined surface": [
        1596,
        2032
      ],
      "scratch": [
        3924,
        1018
      ]
    }
  },
  "neu-det-example": {
    "source": "NEU_DET",
    "paths": [
      [
        {
          "head": "hot-rolled steel strip",
          "tail": "planar surface",
          "relation": "ensuring appearance quality",
          "weight": 0.8288219571113586
        },
        {
          "head": "planar surface",
          "tail": "scratch",
          "relation": "improper equipment maintenance process",
          "weight": 0.8407922387123108
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/neu-det-example.png",
    "nodeCenters": {
      "hot-rolled steel strip": [
        2386,
        3788
      ],
      "planar surface": [
        2360,
        1976
      ],
      "scratch": [
        1108,
        452
      ]
    }
  },
  "csdd-example": {
    "source": "CSDD",
    "paths": [
      [
        {
          "head": "machined surface",
          "tail": "scratch",
          "relation": "improper milling process",
          "weight": 0.3695884943008423
        }
      ],
      [
        {
          "head": "engine cylinder block",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.8314958810806274
        },
        {
          "head": "casting surface",
          "tail": "spot",
          "relation": "improper casting process",
          "weight": 0.8406434655189514
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/csdd-example.png",
    "note": "The source graph links machined surface to scratch. It provides no edge from the engine cylinder block to that surface.",
    "nodeCenters": {
      "machined surface": [
        3928,
        814
      ],
      "scratch": [
        812,
        452
      ],
      "engine cylinder block": [
        2284,
        3788
      ],
      "casting surface": [
        2546,
        1834
      ],
      "spot": [
        4330,
        3264
      ]
    }
  },
  "isaeb-example": {
    "source": "ISAEB",
    "paths": [
      [
        {
          "head": "aerospace engine blades",
          "tail": "airfoil surface",
          "relation": "high aerodynamic efficiency",
          "weight": 0.580373227596283
        },
        {
          "head": "airfoil surface",
          "tail": "defect",
          "relation": "accidental collision",
          "weight": 0.9060201644897461
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/isaeb-example.png",
    "nodeCenters": {
      "aerospace engine blades": [
        440,
        1832
      ],
      "airfoil surface": [
        3008,
        452
      ],
      "defect": [
        4330,
        3788
      ]
    }
  },
  "miad-example": {
    "source": "MIAD",
    "paths": [
      [
        {
          "head": "wind turbine blade",
          "tail": "aerodynamic surface",
          "relation": "ensuring aerodynamic performance",
          "weight": 0.377235472202301
        },
        {
          "head": "aerodynamic surface",
          "tail": "crack",
          "relation": "operational loads and fatigue",
          "weight": 0.8358303904533386
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/miad-example.png",
    "nodeCenters": {
      "wind turbine blade": [
        440,
        2512
      ],
      "aerodynamic surface": [
        3052,
        452
      ],
      "crack": [
        4330,
        3788
      ]
    }
  },
  "msdd-example": {
    "source": "MSDD",
    "paths": [
      [
        {
          "head": "brake master cylinder",
          "tail": "casting surface",
          "relation": "good structural strength and sealing performance",
          "weight": 0.06501935422420502
        },
        {
          "head": "casting surface",
          "tail": "inclusion",
          "relation": "improper pouring process",
          "weight": 0.9191172122955322
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/msdd-example.png",
    "nodeCenters": {
      "brake master cylinder": [
        3200,
        3644
      ],
      "casting surface": [
        2192,
        1740
      ],
      "inclusion": [
        868,
        3454
      ]
    }
  },
  "aedd-example": {
    "source": "AEDD",
    "paths": [
      [
        {
          "head": "aerospace engine blisk",
          "tail": "airfoil surface",
          "relation": "high aerodynamic efficiency",
          "weight": 0.7999940514564514
        },
        {
          "head": "airfoil surface",
          "tail": "scratch",
          "relation": "improper milling process",
          "weight": 0.7163564562797546
        }
      ],
      [
        {
          "head": "aerospace engine blisk",
          "tail": "disc flow path face",
          "relation": "high structural strength",
          "weight": 0.7966016530990601
        },
        {
          "head": "disc flow path face",
          "tail": "damage",
          "relation": "accidental collision",
          "weight": 0.7674118876457214
        }
      ]
    ],
    "productMatch": false,
    "image": "assets/graphs/aedd-blisk-inspection.png",
    "nodeCenters": {
      "aerospace engine blisk": [
        2524,
        1076
      ],
      "airfoil surface": [
        3252,
        2082
      ],
      "scratch": [
        4054,
        3788
      ],
      "disc flow path face": [
        2232,
        2460
      ],
      "damage": [
        440,
        2296
      ]
    }
  },
  "real-iad-end-cap": {
    "source": "Real-IAD_end_cap",
    "paths": [
      [
        {
          "head": "end cup",
          "tail": "appearance surface",
          "relation": "ensuring functional safety",
          "weight": 0.7976337671279907
        },
        {
          "head": "appearance surface",
          "tail": "scratch",
          "relation": "improper stamping process",
          "weight": 0.8086915612220764
        }
      ]
    ],
    "productMatch": true,
    "note": "The original graph labels the end cap as “end cup”.",
    "image": "assets/graphs/real-iad-end-cap.png",
    "nodeCenters": {
      "end cup": [
        3860,
        932
      ],
      "appearance surface": [
        2188,
        2092
      ],
      "scratch": [
        1874,
        3788
      ]
    }
  }
};
