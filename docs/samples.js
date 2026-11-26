window.DEFECT_SAMPLES = [
  {
    "id": "mvtec-screw",
    "src": "assets/mvtec-screw.png",
    "thumb": "assets/mvtec-screw-thumb.jpg",
    "record": {
      "dataset": "MVTec",
      "split": "val",
      "image": {
        "file_name": "screw_thread_top_006.png",
        "height": 1024,
        "width": 1024,
        "id": 4897,
        "component": "screw",
        "surface": [
          "appearance surface"
        ]
      },
      "defect": [
        "thread top"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "id": 1734,
          "label": "thread top",
          "bbox": [
            259,
            614,
            124,
            125
          ],
          "category_id": 35
        }
      ],
      "predictions": [
        {
          "label": "thread top",
          "bbox": [
            261.34454345703125,
            614.036376953125,
            121.03240966796875,
            125.14202880859375
          ],
          "score": 0.6391011476516724
        }
      ],
      "inference": {
        "checkpoint": "model_MvTec_finetune.pth",
        "threshold": 0.3,
        "nms_iou": 0.5
      }
    },
    "previousIds": [
      "mvtec-toothbrush",
      "mvtec-cable"
    ]
  },
  {
    "id": "real-iad-end-cap",
    "src": "assets/real-iad-end-cap.jpg",
    "thumb": "assets/real-iad-end-cap-thumb.jpg",
    "record": {
      "dataset": "Real-IAD",
      "split": "test",
      "image": {
        "id": 528,
        "file_name": "images/end_cap_test/end_cap_0117_NG_HS_C1_20231011100812.jpg",
        "width": 1024,
        "height": 1024,
        "product_category": "end_cap",
        "component": "connector",
        "surface": [
          "mounting surface"
        ]
      },
      "defect": [
        "scratch"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "id": 238,
          "label": "scratch",
          "bbox": [
            245,
            547,
            173,
            204
          ],
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "scratch",
          "bbox": [
            242.88262939453125,
            545.5821533203125,
            172.400634765625,
            202.2696533203125
          ],
          "score": 0.875712513923645
        }
      ],
      "inference": {
        "checkpoint": "model_REAL-IAD.pth",
        "threshold": 0.3,
        "nms_iou": 0.5
      }
    },
    "previousIds": [
      "real-iad-fire-hood",
      "real-iad-connector"
    ]
  },
  {
    "id": "aebad-s-aerospace-engine-blades",
    "src": "assets/aebad-s-aerospace-engine-blades.png",
    "thumb": "assets/aebad-s-aerospace-engine-blades-thumb.jpg",
    "record": {
      "dataset": "AeBAD-S",
      "split": "test",
      "image": {
        "file_name": "IMG_9682.png",
        "height": 3024,
        "width": 3024,
        "id": "IMG_9682",
        "component": "aerospace engine blades",
        "surface": [
          "airfoil surface"
        ]
      },
      "defect": [
        "fracture"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "fracture",
          "bbox": [
            1059,
            1016,
            567,
            504
          ],
          "id": 26,
          "category_id": 3
        }
      ],
      "predictions": [
        {
          "label": "fracture",
          "bbox": [
            1065.8677978515625,
            1001.0407104492188,
            558.8143310546875,
            513.4653930664062
          ],
          "score": 0.9161203503608704
        }
      ],
      "inference": {
        "checkpoint": "model_AeBAD-S_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "csddv3-engine-cylinder-block",
    "src": "assets/csddv3-engine-cylinder-block.jpg",
    "thumb": "assets/csddv3-engine-cylinder-block-thumb.jpg",
    "record": {
      "dataset": "CSDDv3",
      "split": "test",
      "image": {
        "file_name": "2022-02-23_15_38_57_373-3_3_1.jpg",
        "height": 1024,
        "width": 1024,
        "id": "2022-02-23_15_38_57_373-3_3_1",
        "component": "engine cylinder block",
        "surface": [
          "machined surface",
          "casting surface"
        ]
      },
      "defect": [
        "defect"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "defect",
          "bbox": [
            687,
            351,
            88,
            32
          ],
          "id": 340,
          "category_id": 1
        },
        {
          "label": "defect",
          "bbox": [
            11,
            17,
            69,
            65
          ],
          "id": 341,
          "category_id": 1
        },
        {
          "label": "defect",
          "bbox": [
            745,
            569,
            33,
            34
          ],
          "id": 342,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "defect",
          "bbox": [
            684.1100463867188,
            348.3775634765625,
            87.96484375,
            36.1019287109375
          ],
          "score": 0.9634772539138794
        },
        {
          "label": "defect",
          "bbox": [
            10.86878490447998,
            19.84337615966797,
            68.32902240753174,
            59.01336669921875
          ],
          "score": 0.961676836013794
        },
        {
          "label": "defect",
          "bbox": [
            741.240234375,
            569.2305297851562,
            36.02581787109375,
            33.351318359375
          ],
          "score": 0.9605583548545837
        }
      ],
      "inference": {
        "checkpoint": "model_CSDDv3_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    },
    "previousId": "csdd-engine-cylinder-block"
  },
  {
    "id": "ec-electronic-ceramics",
    "src": "assets/ec-electronic-ceramics.png",
    "thumb": "assets/ec-electronic-ceramics-thumb.jpg",
    "record": {
      "dataset": "EC",
      "split": "test",
      "image": {
        "file_name": "CCD1_Breakage_025.png",
        "height": 1080,
        "width": 1440,
        "id": "CCD1_Breakage_025",
        "component": "electronic ceramics",
        "surface": [
          "critical surface"
        ]
      },
      "defect": [
        "breakage"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "breakage",
          "bbox": [
            686,
            309,
            279,
            183
          ],
          "id": 482,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "breakage",
          "bbox": [
            697.1415405273438,
            306.6326904296875,
            273.7138671875,
            180.76840209960938
          ],
          "score": 0.8908799886703491
        }
      ],
      "inference": {
        "checkpoint": "model_EC_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "3cad-aluminum-pc",
    "src": "assets/3cad-aluminum-pc.png",
    "thumb": "assets/3cad-aluminum-pc-thumb.jpg",
    "record": {
      "dataset": "3CAD",
      "split": "test",
      "image": {
        "file_name": "Aluminum_Pc_bump_000018.png",
        "height": 1024,
        "width": 1024,
        "id": "Aluminum_Pc_bump_000018",
        "component": "aluminum pc",
        "surface": [
          "critical surface"
        ]
      },
      "defect": [
        "bump"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "bump",
          "bbox": [
            600,
            899,
            25,
            71
          ],
          "id": 1681,
          "category_id": 2
        }
      ],
      "predictions": [
        {
          "label": "bump",
          "bbox": [
            601.94873046875,
            902.0037841796875,
            20.2901611328125,
            66.775390625
          ],
          "score": 0.9408833384513855
        }
      ],
      "inference": {
        "checkpoint": "model_3CAD_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    },
    "previousId": "enb-nozzle-limiter-support"
  },
  {
    "id": "mec-motor-end-cover",
    "src": "assets/mec-end-cover-dirt.png",
    "thumb": "assets/mec-end-cover-dirt-thumb.jpg",
    "record": {
      "dataset": "MEC",
      "split": "test",
      "image": {
        "file_name": "SevenCamear_7_325-08-01_15-12-16_part1.png",
        "height": 1636,
        "width": 2740,
        "id": "SevenCamear_7_325-08-01_15-12-16_part1",
        "component": "motor end cover",
        "surface": [
          "machined surface",
          "casting surface",
          "threaded hole"
        ]
      },
      "defect": [
        "dirt"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "dirt",
          "bbox": [
            1416,
            941,
            357,
            694
          ],
          "id": 3113,
          "category_id": 5
        }
      ],
      "predictions": [
        {
          "label": "dirt",
          "bbox": [
            1397.83056640625,
            926.2377319335938,
            401.095703125,
            709.7622680664062
          ],
          "score": 0.6872960925102234
        }
      ],
      "inference": {
        "checkpoint": "model_MEC_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "enb-nozzle-limiter-support",
    "src": "assets/enb-nozzle-limiter-support.png",
    "thumb": "assets/enb-nozzle-limiter-support-thumb.jpg",
    "record": {
      "dataset": "ENB",
      "split": "test",
      "image": {
        "file_name": "pose11_Pose11-1500-15-41-35_522_May.bmp",
        "height": 1040,
        "width": 1320,
        "id": 35,
        "component": "nozzle limiter support",
        "surface": [
          "machined surface",
          "casting surface",
          "threaded hole"
        ]
      },
      "defect": [
        "dirt"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "dirt",
          "bbox": [
            484,
            80,
            200,
            275
          ],
          "id": 20,
          "category_id": 5
        }
      ],
      "predictions": [
        {
          "label": "dirt",
          "bbox": [
            480.0176086425781,
            81.1734848022461,
            208.00442504882812,
            285.3270950317383
          ],
          "score": 0.8243012428283691
        }
      ],
      "inference": {
        "checkpoint": "model_ENB_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "hss-iad-example",
    "src": "assets/hss-iad-example.jpg",
    "thumb": "assets/hss-iad-example-thumb.jpg",
    "record": {
      "dataset": "HSS-IAD",
      "split": "test",
      "image": {
        "file_name": "2022-02-23_16_09_21_080-3_3_1.jpg",
        "height": 1024,
        "width": 1024,
        "id": "2022-02-23_16_09_21_080-3_3_1",
        "component": "engine cylinder block",
        "surface": [
          "machined surface",
          "casting surface"
        ]
      },
      "defect": [
        "defect"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "defect",
          "bbox": [
            1000,
            248,
            11,
            11
          ],
          "id": 3,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "defect",
          "bbox": [
            999.2858276367188,
            247.52040100097656,
            10.91595458984375,
            11.582168579101562
          ],
          "score": 0.8918206691741943
        }
      ],
      "inference": {
        "checkpoint": "model_HSSIAD.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "ms-example",
    "src": "assets/ms-example.png",
    "thumb": "assets/ms-example-thumb.jpg",
    "record": {
      "dataset": "MS",
      "split": "test",
      "image": {
        "file_name": "Image_20260130105125924.bmp",
        "height": 1142,
        "width": 1334,
        "id": "Image_20260130105125924",
        "component": "motor shell",
        "surface": [
          "machined surface",
          "casting surface",
          "threaded hole"
        ]
      },
      "defect": [
        "scratch"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "scratch",
          "bbox": [
            665,
            217,
            18,
            20
          ],
          "id": 121,
          "category_id": 3
        }
      ],
      "predictions": [
        {
          "label": "scratch",
          "bbox": [
            664.3390502929688,
            216.67462158203125,
            17.56689453125,
            20.0048828125
          ],
          "score": 0.7193031311035156
        }
      ],
      "inference": {
        "checkpoint": "model_MS_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "neu-det-example",
    "src": "assets/neu-det-example.jpg",
    "thumb": "assets/neu-det-example-thumb.jpg",
    "record": {
      "dataset": "NEU-DET",
      "split": "test",
      "image": {
        "file_name": "scratches_299.jpg",
        "height": 200,
        "width": 200,
        "id": "scratches_299",
        "component": "hot-rolled steel strip",
        "surface": [
          "planar surface"
        ]
      },
      "defect": [
        "scratch"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "scratch",
          "bbox": [
            2,
            135,
            198,
            51
          ],
          "id": 843,
          "category_id": 4
        }
      ],
      "predictions": [
        {
          "label": "scratch",
          "bbox": [
            0.7399439811706543,
            136.60060119628906,
            198.0732274055481,
            50.69596862792969
          ],
          "score": 0.8512139320373535
        }
      ],
      "inference": {
        "checkpoint": "model_NEU-DET.pth",
        "threshold": 0.4,
        "nms_iou": 0.5,
        "test_short_edge": 200
      }
    }
  },
  {
    "id": "csdd-example",
    "src": "assets/csdd-example.jpg",
    "thumb": "assets/csdd-example-thumb.jpg",
    "record": {
      "dataset": "CSDD",
      "split": "test",
      "image": {
        "file_name": "0287.jpg",
        "height": 3648,
        "width": 3648,
        "id": "0287",
        "component": "engine cylinder block",
        "surface": [
          "machined surface",
          "casting surface"
        ]
      },
      "defect": [
        "scratch",
        "spot"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "scratch",
          "bbox": [
            1689,
            2862,
            107,
            89
          ],
          "id": 1514,
          "category_id": 1
        },
        {
          "label": "scratch",
          "bbox": [
            1398,
            1577,
            104,
            132
          ],
          "id": 1515,
          "category_id": 1
        },
        {
          "label": "scratch",
          "bbox": [
            2406,
            1519,
            97,
            87
          ],
          "id": 1516,
          "category_id": 1
        },
        {
          "label": "spot",
          "bbox": [
            1023,
            1722,
            26,
            28
          ],
          "id": 1517,
          "category_id": 2
        },
        {
          "label": "scratch",
          "bbox": [
            1785,
            2266,
            30,
            57
          ],
          "id": 1518,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "scratch",
          "bbox": [
            2406.3642578125,
            1515.024169921875,
            96.14794921875,
            89.3773193359375
          ],
          "score": 0.8954922556877136
        },
        {
          "label": "scratch",
          "bbox": [
            1396.0859375,
            1575.44775390625,
            105.827392578125,
            128.9393310546875
          ],
          "score": 0.8935120105743408
        },
        {
          "label": "scratch",
          "bbox": [
            1689.5484619140625,
            2861.35498046875,
            112.0704345703125,
            81.558349609375
          ],
          "score": 0.8323577642440796
        },
        {
          "label": "scratch",
          "bbox": [
            1783.8033447265625,
            2263.102783203125,
            29.935791015625,
            59.934326171875
          ],
          "score": 0.826788067817688
        },
        {
          "label": "spot",
          "bbox": [
            1021.1792602539062,
            1714.2493896484375,
            27.10211181640625,
            34.12158203125
          ],
          "score": 0.8076186180114746
        }
      ],
      "inference": {
        "checkpoint": "model_CSDD_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "isaeb-example",
    "src": "assets/isaeb-blade-60.jpg",
    "thumb": "assets/isaeb-blade-60-thumb.jpg",
    "record": {
      "dataset": "ISAEB",
      "split": "test",
      "image": {
        "file_name": "60.jpg",
        "height": 720,
        "width": 960,
        "id": 60,
        "component": "aerospace engine blades",
        "surface": [
          "airfoil surface"
        ]
      },
      "defect": [
        "defect"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "defect",
          "bbox": [
            68,
            21,
            476,
            321
          ],
          "id": 11,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "defect",
          "bbox": [
            69.43611145019531,
            19.07182502746582,
            490.97923278808594,
            325.3928050994873
          ],
          "score": 0.9630319476127625
        }
      ],
      "inference": {
        "checkpoint": "model_ISAEB_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "miad-example",
    "src": "assets/miad-example.png",
    "thumb": "assets/miad-example-thumb.jpg",
    "record": {
      "dataset": "MIAD",
      "split": "test",
      "image": {
        "file_name": "crack_002461.png",
        "height": 512,
        "width": 512,
        "id": "crack_002461",
        "component": "wind turbine blade",
        "surface": [
          "aerodynamic surface"
        ]
      },
      "defect": [
        "crack"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "crack",
          "bbox": [
            150,
            339,
            131,
            104
          ],
          "id": 102,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "crack",
          "bbox": [
            149.095458984375,
            338.3999938964844,
            131.4951171875,
            104.9676513671875
          ],
          "score": 0.9683204889297485
        }
      ],
      "inference": {
        "checkpoint": "model_MIAD_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "msdd-example",
    "src": "assets/msdd-example.jpg",
    "thumb": "assets/msdd-example-thumb.jpg",
    "record": {
      "dataset": "MSDD",
      "split": "test",
      "image": {
        "file_name": "20240204_152830_Gige[1]b.jpg",
        "height": 640,
        "width": 640,
        "id": "20240204_152830_Gige[1]b",
        "component": "brake master cylinder",
        "surface": [
          "casting surface"
        ]
      },
      "defect": [
        "inclusion"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "inclusion",
          "bbox": [
            4,
            240,
            31,
            21
          ],
          "id": 363,
          "category_id": 1
        }
      ],
      "predictions": [
        {
          "label": "inclusion",
          "bbox": [
            4.5169854164123535,
            237.89273071289062,
            31.247491359710693,
            22.4432373046875
          ],
          "score": 0.8869337439537048
        }
      ],
      "inference": {
        "checkpoint": "model_MSDD_finetune.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  },
  {
    "id": "aedd-example",
    "src": "assets/aedd-blisk-inspection.jpg",
    "thumb": "assets/aedd-blisk-inspection-thumb.jpg",
    "record": {
      "dataset": "AEDD",
      "split": "val",
      "image": {
        "file_name": "17.jpg",
        "height": 2488,
        "width": 3264,
        "id": "17",
        "component": "aerospace engine blisk",
        "surface": [
          "airfoil surface",
          "disc flow path face"
        ]
      },
      "defect": [
        "scratch",
        "damage"
      ],
      "bbox_format": "xywh (pixels)",
      "annotations": [
        {
          "label": "scratch",
          "bbox": [
            1410,
            1026,
            653,
            367
          ],
          "id": 13,
          "category_id": 0
        },
        {
          "label": "damage",
          "bbox": [
            2505,
            2106,
            282,
            206
          ],
          "id": 14,
          "category_id": 2
        }
      ],
      "predictions": [
        {
          "label": "scratch",
          "bbox": [
            1387.5137939453125,
            1020.2377319335938,
            651.273681640625,
            356.23529052734375
          ],
          "score": 0.8730626702308655
        },
        {
          "label": "damage",
          "bbox": [
            2508.880126953125,
            2092.76220703125,
            293.696533203125,
            214.6826171875
          ],
          "score": 0.840124785900116
        }
      ],
      "inference": {
        "checkpoint": "model_AEDD.pth",
        "threshold": 0.4,
        "nms_iou": 0.5
      }
    }
  }
];
