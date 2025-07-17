// Example product data (you can replace/add more from your JSON)
const productData = [
  {
    C: "S0M1-DU2E-8FV0",
    E: "SN-PLT01-250718-0001",
    G: "Air"
  },
  {
    C: "K5Y7-RP7K-0DA0",
    E: "SN-PLT01-250718-0002",
    G: "Zoom"
  },
  {
    C: "S0Q4-KC0H-7XT4",
    E: "SN-PLT01-250718-0003",
    G: "React"
  },
  {
    C: "V9I8-SK2V-3OR6",
    E: "SN-PLT01-250718-0004",
    G: "Fly"
  },
  {
    C: "P4O9-LS7Z-0YF4",
    E: "SN-PLT01-250718-0005",
    G: "Flex"
  },
  {
    C: "V4Z3-YB6I-3ZH1",
    E: "SN-PLT01-250718-0006",
    G: "Vapor"
  },
  {
    C: "R6R1-YL7C-0LB8",
    E: "SN-PLT01-250718-0007",
    G: "Alpha"
  },
  {
    C: "D0I7-JB0I-8WS0",
    E: "SN-PLT01-250718-0008",
    G: "Nova"
  },
  {
    C: "F0R4-PI7W-5VT7",
    E: "SN-PLT01-250718-0009",
    G: "Ultra"
  },
  {
    C: "A6F3-HI1X-3CL1",
    E: "SN-PLT01-250718-0010",
    G: "Jordan"
  },
  {
    C: "C9K5-LZ2U-7SW3",
    E: "SN-PLT01-250718-0011",
    G: "Air"
  },
  {
    C: "A9F3-AU3F-1OT7",
    E: "SN-PLT01-250718-0012",
    G: "Zoom"
  },
  {
    C: "J9C9-WJ6Q-6FP5",
    E: "SN-PLT01-250718-0013",
    G: "React"
  },
  {
    C: "G6G6-WQ3W-3EQ9",
    E: "SN-PLT01-250718-0014",
    G: "Fly"
  },
  {
    C: "H6T6-TY2N-1EJ4",
    E: "SN-PLT01-250718-0015",
    G: "Flex"
  },
  {
    C: "M8U6-RC1E-7QT8",
    E: "SN-PLT01-250718-0016",
    G: "Vapor"
  },
  {
    C: "U1M2-KA0F-2UF9",
    E: "SN-PLT01-250718-0017",
    G: "Alpha"
  },
  {
    C: "J4H9-HU1V-3PH4",
    E: "SN-PLT01-250718-0018",
    G: "Nova"
  },
  {
    C: "H6E1-EY7C-6FK2",
    E: "SN-PLT01-250718-0019",
    G: "Ultra"
  },
  {
    C: "U8G3-KG3K-1FI7",
    E: "SN-PLT01-250718-0020",
    G: "Jordan"
  },
  {
    C: "W4A4-IV6A-4BL9",
    E: "SN-PLT01-250718-0021",
    G: "Air"
  },
  {
    C: "R1R3-VV1O-1LT9",
    E: "SN-PLT01-250718-0022",
    G: "Zoom"
  },
  {
    C: "K9F7-ZX1Z-6YD8",
    E: "SN-PLT01-250718-0023",
    G: "React"
  },
  {
    C: "M8J8-DP9D-7NY2",
    E: "SN-PLT01-250718-0024",
    G: "Fly"
  },
  {
    C: "X6U1-MT2W-1KQ0",
    E: "SN-PLT01-250718-0025",
    G: "Flex"
  },
  {
    C: "T5F2-AL0H-2ZS0",
    E: "SN-PLT01-250718-0026",
    G: "Vapor"
  },
  {
    C: "J0M1-XI7U-9AC9",
    E: "SN-PLT01-250718-0027",
    G: "Alpha"
  },
  {
    C: "C1M6-DC8F-0EB5",
    E: "SN-PLT01-250718-0028",
    G: "Nova"
  },
  {
    C: "C9T3-OG1P-0IP6",
    E: "SN-PLT01-250718-0029",
    G: "Ultra"
  },
  {
    C: "B2T0-UE3Q-6QV9",
    E: "SN-PLT01-250718-0030",
    G: "Jordan"
  },
  {
    C: "E3I3-TX9L-8LV6",
    E: "SN-PLT01-250718-0031",
    G: "Air"
  },
  {
    C: "L6E9-EM4O-6VZ7",
    E: "SN-PLT01-250718-0032",
    G: "Zoom"
  },
  {
    C: "Q4D4-GK2S-9PQ1",
    E: "SN-PLT01-250718-0033",
    G: "React"
  },
  {
    C: "I8G1-DD6R-3TT7",
    E: "SN-PLT01-250718-0034",
    G: "Fly"
  },
  {
    C: "H5R0-NV3G-9EU2",
    E: "SN-PLT01-250718-0035",
    G: "Flex"
  },
  {
    C: "X0N6-EN5D-6NK6",
    E: "SN-PLT01-250718-0036",
    G: "Vapor"
  },
  {
    C: "K4U8-MK3H-2CM5",
    E: "SN-PLT01-250718-0037",
    G: "Alpha"
  },
  {
    C: "E8E5-LK4O-6KF2",
    E: "SN-PLT01-250718-0038",
    G: "Nova"
  },
  {
    C: "R3M6-LN6L-3XA2",
    E: "SN-PLT01-250718-0039",
    G: "Ultra"
  },
  {
    C: "X8L4-YU0I-4GA9",
    E: "SN-PLT01-250718-0040",
    G: "Jordan"
  },
  {
    C: "N3O1-JI9M-5JQ1",
    E: "SN-PLT01-250718-0041",
    G: "Air"
  },
  {
    C: "U3H4-QQ1C-8QF8",
    E: "SN-PLT01-250718-0042",
    G: "Zoom"
  },
  {
    C: "F1T6-ZS3N-3AK1",
    E: "SN-PLT01-250718-0043",
    G: "React"
  },
  {
    C: "Y4N8-SF7E-1YR7",
    E: "SN-PLT01-250718-0044",
    G: "Fly"
  },
  {
    C: "L5N8-NN3Y-1PZ7",
    E: "SN-PLT01-250718-0045",
    G: "Flex"
  },
  {
    C: "T6Q9-WX8P-7LI5",
    E: "SN-PLT01-250718-0046",
    G: "Vapor"
  },
  {
    C: "A4M5-YC1M-8IV7",
    E: "SN-PLT01-250718-0047",
    G: "Alpha"
  },
  {
    C: "L6E8-XA7L-1VI5",
    E: "SN-PLT01-250718-0048",
    G: "Nova"
  },
  {
    C: "N4Y4-MI0A-8CI4",
    E: "SN-PLT01-250718-0049",
    G: "Ultra"
  },
  {
    C: "U8H0-PL5L-9EX0",
    E: "SN-PLT01-250718-0050",
    G: "Jordan"
  },
  {
    C: "K4H1-EQ9P-8VY7",
    E: "SN-PLT01-250718-0051",
    G: "Air"
  },
  {
    C: "U7H7-JQ6R-3RB6",
    E: "SN-PLT01-250718-0052",
    G: "Zoom"
  },
  {
    C: "S0H5-QD3V-2MW7",
    E: "SN-PLT01-250718-0053",
    G: "React"
  },
  {
    C: "F3B3-HR1P-3YR9",
    E: "SN-PLT01-250718-0054",
    G: "Fly"
  },
  {
    C: "I5F7-ST2H-7EH9",
    E: "SN-PLT01-250718-0055",
    G: "Flex"
  },
  {
    C: "Y1I3-IV2M-8EN4",
    E: "SN-PLT01-250718-0056",
    G: "Vapor"
  },
  {
    C: "M9D7-BD1D-1YS1",
    E: "SN-PLT01-250718-0057",
    G: "Alpha"
  },
  {
    C: "S2A0-KT6T-9OT2",
    E: "SN-PLT01-250718-0058",
    G: "Nova"
  },
  {
    C: "Y2C0-IJ9R-2OP5",
    E: "SN-PLT01-250718-0059",
    G: "Ultra"
  },
  {
    C: "D2I6-XQ8R-6VY9",
    E: "SN-PLT01-250718-0060",
    G: "Jordan"
  },
  {
    C: "Z1A6-VD0Z-8QB5",
    E: "SN-PLT01-250718-0061",
    G: "Air"
  },
  {
    C: "T8A9-JF7R-5DH1",
    E: "SN-PLT01-250718-0062",
    G: "Zoom"
  },
  {
    C: "X2K6-RF8M-1RZ4",
    E: "SN-PLT01-250718-0063",
    G: "React"
  },
  {
    C: "E7G5-BW9R-9EV4",
    E: "SN-PLT01-250718-0064",
    G: "Fly"
  },
  {
    C: "I0Y5-WZ0J-1DL6",
    E: "SN-PLT01-250718-0065",
    G: "Flex"
  },
  {
    C: "J4Q6-ED6I-1TM1",
    E: "SN-PLT01-250718-0066",
    G: "Vapor"
  },
  {
    C: "H3Q4-DQ9A-9JC1",
    E: "SN-PLT01-250718-0067",
    G: "Alpha"
  },
  {
    C: "K9B0-ZG4N-8QK3",
    E: "SN-PLT01-250718-0068",
    G: "Nova"
  },
  {
    C: "X4P6-GE4H-1OO6",
    E: "SN-PLT01-250718-0069",
    G: "Ultra"
  },
  {
    C: "E8S1-JD9C-7JK7",
    E: "SN-PLT01-250718-0070",
    G: "Jordan"
  },
  {
    C: "G9W8-CK1C-0FO8",
    E: "SN-PLT01-250718-0071",
    G: "Air"
  },
  {
    C: "F7X7-ZV4M-5NB5",
    E: "SN-PLT01-250718-0072",
    G: "Zoom"
  },
  {
    C: "H5D3-GV7Z-0FJ8",
    E: "SN-PLT01-250718-0073",
    G: "React"
  },
  {
    C: "P7T2-RY9D-2ZK8",
    E: "SN-PLT01-250718-0074",
    G: "Fly"
  },
  {
    C: "W4V7-VF2X-8PL1",
    E: "SN-PLT01-250718-0075",
    G: "Flex"
  },
  {
    C: "E7V6-JN3E-7PG8",
    E: "SN-PLT01-250718-0076",
    G: "Vapor"
  },
  {
    C: "X5A0-CJ2J-0KU2",
    E: "SN-PLT01-250718-0077",
    G: "Alpha"
  },
  {
    C: "I9X7-FK7D-9XW9",
    E: "SN-PLT01-250718-0078",
    G: "Nova"
  },
  {
    C: "H7R9-GP3G-3JP4",
    E: "SN-PLT01-250718-0079",
    G: "Ultra"
  },
  {
    C: "C3E4-LZ2N-3GK2",
    E: "SN-PLT01-250718-0080",
    G: "Jordan"
  },
  {
    C: "B9O2-KX9A-0WQ7",
    E: "SN-PLT01-250718-0081",
    G: "Air"
  },
  {
    C: "I8V0-CS8P-8TO4",
    E: "SN-PLT01-250718-0082",
    G: "Zoom"
  },
  {
    C: "V1D4-HD4Y-7NJ4",
    E: "SN-PLT01-250718-0083",
    G: "React"
  },
  {
    C: "H9W7-HX5C-6TS4",
    E: "SN-PLT01-250718-0084",
    G: "Fly"
  },
  {
    C: "O2C1-SO8Z-6PG5",
    E: "SN-PLT01-250718-0085",
    G: "Flex"
  },
  {
    C: "E5X4-DT9J-6LP7",
    E: "SN-PLT01-250718-0086",
    G: "Vapor"
  },
  {
    C: "K8H0-MI0X-3JE7",
    E: "SN-PLT01-250718-0087",
    G: "Alpha"
  },
  {
    C: "I0U4-XT9N-4FU7",
    E: "SN-PLT01-250718-0088",
    G: "Nova"
  },
  {
    C: "S8N4-OA6D-3HZ1",
    E: "SN-PLT01-250718-0089",
    G: "Ultra"
  },
  {
    C: "S0W2-ES5Y-5JM8",
    E: "SN-PLT01-250718-0090",
    G: "Jordan"
  },
  {
    C: "Q1H5-KU6L-4PX3",
    E: "SN-PLT01-250718-0091",
    G: "Air"
  },
  {
    C: "R6D0-CK9A-5KJ3",
    E: "SN-PLT01-250718-0092",
    G: "Zoom"
  },
  {
    C: "B7W7-PW9N-2MF9",
    E: "SN-PLT01-250718-0093",
    G: "React"
  },
  {
    C: "Z1D8-WV6V-2BJ4",
    E: "SN-PLT01-250718-0094",
    G: "Fly"
  },
  {
    C: "L6G4-YX2G-1OH6",
    E: "SN-PLT01-250718-0095",
    G: "Flex"
  },
  {
    C: "S7P4-WQ1H-3PC1",
    E: "SN-PLT01-250718-0096",
    G: "Vapor"
  },
  {
    C: "Z7K4-CO6F-1ID3",
    E: "SN-PLT01-250718-0097",
    G: "Alpha"
  },
  {
    C: "B9K5-IV8P-1SP2",
    E: "SN-PLT01-250718-0098",
    G: "Nova"
  },
  {
    C: "V6Q9-EN0E-9DF5",
    E: "SN-PLT01-250718-0099",
    G: "Ultra"
  },
  {
    C: "T9U9-CZ4J-6RC4",
    E: "SN-PLT01-250718-0100",
    G: "Jordan"
  },
  {
    C: "U7O1-QZ1L-7ZW4",
    E: "SN-PLT01-250718-0101",
    G: "Air"
  },
  {
    C: "C5Z4-RY0Y-1ML4",
    E: "SN-PLT01-250718-0102",
    G: "Zoom"
  },
  {
    C: "O0I4-IP6Q-8TA7",
    E: "SN-PLT01-250718-0103",
    G: "React"
  },
  {
    C: "C1P0-ZU2M-4YZ7",
    E: "SN-PLT01-250718-0104",
    G: "Fly"
  },
  {
    C: "U2D2-WP4G-7ZX0",
    E: "SN-PLT01-250718-0105",
    G: "Flex"
  },
  {
    C: "Z5C6-TN6B-0JO3",
    E: "SN-PLT01-250718-0106",
    G: "Vapor"
  },
  {
    C: "B3Q2-JO2S-3FJ0",
    E: "SN-PLT01-250718-0107",
    G: "Alpha"
  },
  {
    C: "P0P5-UQ0M-3SO8",
    E: "SN-PLT01-250718-0108",
    G: "Nova"
  },
  {
    C: "I3F1-HG2C-3FE4",
    E: "SN-PLT01-250718-0109",
    G: "Ultra"
  },
  {
    C: "Y5G0-OH7Z-3CU1",
    E: "SN-PLT01-250718-0110",
    G: "Jordan"
  },
  {
    C: "B2Z4-DI5P-9HE7",
    E: "SN-PLT01-250718-0111",
    G: "Air"
  },
  {
    C: "O4E2-PS1R-5KL3",
    E: "SN-PLT01-250718-0112",
    G: "Zoom"
  },
  {
    C: "E6P9-FH2E-9PK3",
    E: "SN-PLT01-250718-0113",
    G: "React"
  },
  {
    C: "U0F8-XV1P-8TI9",
    E: "SN-PLT01-250718-0114",
    G: "Fly"
  },
  {
    C: "C1Q3-IH5Q-1NM7",
    E: "SN-PLT01-250718-0115",
    G: "Flex"
  },
  {
    C: "C3P8-YW0C-1QV9",
    E: "SN-PLT01-250718-0116",
    G: "Vapor"
  },
  {
    C: "J8A5-PR1V-3JT4",
    E: "SN-PLT01-250718-0117",
    G: "Alpha"
  },
  {
    C: "I0Y4-HD9C-2ZU5",
    E: "SN-PLT01-250718-0118",
    G: "Nova"
  },
  {
    C: "W2Y0-ZQ9Q-0WO0",
    E: "SN-PLT01-250718-0119",
    G: "Ultra"
  },
  {
    C: "O8I9-ST6E-1DB3",
    E: "SN-PLT01-250718-0120",
    G: "Jordan"
  },
  {
    C: "X3Q2-NC4J-3BL4",
    E: "SN-PLT01-250718-0121",
    G: "Air"
  },
  {
    C: "P9Q9-XA0U-9MD2",
    E: "SN-PLT01-250718-0122",
    G: "Zoom"
  },
  {
    C: "S1D0-SM6T-4LX3",
    E: "SN-PLT01-250718-0123",
    G: "React"
  },
  {
    C: "R9R8-AF9U-9WJ9",
    E: "SN-PLT01-250718-0124",
    G: "Fly"
  },
  {
    C: "A5S1-UQ4A-6FI5",
    E: "SN-PLT01-250718-0125",
    G: "Flex"
  },
  {
    C: "L5I0-MK5V-4WS7",
    E: "SN-PLT01-250718-0126",
    G: "Vapor"
  },
  {
    C: "N7W8-XS4H-9OC0",
    E: "SN-PLT01-250718-0127",
    G: "Alpha"
  },
  {
    C: "O1D9-VI4D-8LL5",
    E: "SN-PLT01-250718-0128",
    G: "Nova"
  },
  {
    C: "C5K0-NJ5C-1GT9",
    E: "SN-PLT01-250718-0129",
    G: "Ultra"
  },
  {
    C: "N3P7-LY1P-2KT4",
    E: "SN-PLT01-250718-0130",
    G: "Jordan"
  },
  {
    C: "I3P0-OZ5N-1TJ2",
    E: "SN-PLT01-250718-0131",
    G: "Air"
  },
  {
    C: "H9C1-BF0V-4KZ9",
    E: "SN-PLT01-250718-0132",
    G: "Zoom"
  },
  {
    C: "N8F2-XW4D-4UL1",
    E: "SN-PLT01-250718-0133",
    G: "React"
  },
  {
    C: "P8F4-OW6M-2GG9",
    E: "SN-PLT01-250718-0134",
    G: "Fly"
  },
  {
    C: "S5O2-WZ5E-8ZL0",
    E: "SN-PLT01-250718-0135",
    G: "Flex"
  },
  {
    C: "N5J7-AH7L-7ZL1",
    E: "SN-PLT01-250718-0136",
    G: "Vapor"
  },
  {
    C: "F8E2-WA0U-6QL1",
    E: "SN-PLT01-250718-0137",
    G: "Alpha"
  },
  {
    C: "P9F5-OM2C-5SY9",
    E: "SN-PLT01-250718-0138",
    G: "Nova"
  },
  {
    C: "T4L9-HJ7N-6VL2",
    E: "SN-PLT01-250718-0139",
    G: "Ultra"
  },
  {
    C: "V9V9-VE1I-6WQ8",
    E: "SN-PLT01-250718-0140",
    G: "Jordan"
  },
  {
    C: "H2T5-UP5H-4HR1",
    E: "SN-PLT01-250718-0141",
    G: "Air"
  },
  {
    C: "Q2V4-DC6S-7AR2",
    E: "SN-PLT01-250718-0142",
    G: "Zoom"
  },
  {
    C: "W7R7-IV3R-5VE8",
    E: "SN-PLT01-250718-0143",
    G: "React"
  },
  {
    C: "H1E0-XS8A-2OD6",
    E: "SN-PLT01-250718-0144",
    G: "Fly"
  },
  {
    C: "N3N6-WG5X-5FA0",
    E: "SN-PLT01-250718-0145",
    G: "Flex"
  },
  {
    C: "Z9F6-GZ9O-5MM4",
    E: "SN-PLT01-250718-0146",
    G: "Vapor"
  },
  {
    C: "J6Q0-PU3G-6QW5",
    E: "SN-PLT01-250718-0147",
    G: "Alpha"
  },
  {
    C: "X3N6-GW2L-4PO4",
    E: "SN-PLT01-250718-0148",
    G: "Nova"
  },
  {
    C: "S2Q2-SI0Q-6KH5",
    E: "SN-PLT01-250718-0149",
    G: "Ultra"
  },
  {
    C: "P9N6-MW4W-1FU6",
    E: "SN-PLT01-250718-0150",
    G: "Jordan"
  },
  {
    C: "O1U1-DU9H-4LZ3",
    E: "SN-PLT01-250718-0151",
    G: "Air"
  },
  {
    C: "V5Q3-UP4M-2JA5",
    E: "SN-PLT01-250718-0152",
    G: "Zoom"
  },
  {
    C: "F3A0-OC7I-9UV4",
    E: "SN-PLT01-250718-0153",
    G: "React"
  },
  {
    C: "G5W0-PA2D-0KM7",
    E: "SN-PLT01-250718-0154",
    G: "Fly"
  },
  {
    C: "Y8Q3-VJ4E-7KV8",
    E: "SN-PLT01-250718-0155",
    G: "Flex"
  },
  {
    C: "O6T5-HG8B-2BF8",
    E: "SN-PLT01-250718-0156",
    G: "Vapor"
  },
  {
    C: "P8N9-UA3C-9ZH1",
    E: "SN-PLT01-250718-0157",
    G: "Alpha"
  },
  {
    C: "H2Z2-XK1G-7RW7",
    E: "SN-PLT01-250718-0158",
    G: "Nova"
  },
  {
    C: "D7F3-JD5W-0LI4",
    E: "SN-PLT01-250718-0159",
    G: "Ultra"
  },
  {
    C: "Y9V0-UN2L-7MT3",
    E: "SN-PLT01-250718-0160",
    G: "Jordan"
  },
  {
    C: "P5S0-BT9I-9XK0",
    E: "SN-PLT01-250718-0161",
    G: "Air"
  },
  {
    C: "G8F1-VX4R-4BQ2",
    E: "SN-PLT01-250718-0162",
    G: "Zoom"
  },
  {
    C: "W4G5-KY9H-7IH0",
    E: "SN-PLT01-250718-0163",
    G: "React"
  },
  {
    C: "V2X8-QV0E-8SE7",
    E: "SN-PLT01-250718-0164",
    G: "Fly"
  },
  {
    C: "W7E5-UB5J-6CU2",
    E: "SN-PLT01-250718-0165",
    G: "Flex"
  },
  {
    C: "I9B5-YH7N-1AU2",
    E: "SN-PLT01-250718-0166",
    G: "Vapor"
  },
  {
    C: "D7P1-GI4G-7NZ0",
    E: "SN-PLT01-250718-0167",
    G: "Alpha"
  },
  {
    C: "V8T9-CF8U-4JF7",
    E: "SN-PLT01-250718-0168",
    G: "Nova"
  },
  {
    C: "T7M2-AA1Y-5KX1",
    E: "SN-PLT01-250718-0169",
    G: "Ultra"
  },
  {
    C: "G1K4-VE1M-3TB0",
    E: "SN-PLT01-250718-0170",
    G: "Jordan"
  },
  {
    C: "W4P7-KN2D-0BU1",
    E: "SN-PLT01-250718-0171",
    G: "Air"
  },
  {
    C: "Q7M0-LJ1D-2SM5",
    E: "SN-PLT01-250718-0172",
    G: "Zoom"
  },
  {
    C: "U9L2-RS6V-1YF7",
    E: "SN-PLT01-250718-0173",
    G: "React"
  },
  {
    C: "N9P3-MN7U-0VW9",
    E: "SN-PLT01-250718-0174",
    G: "Fly"
  },
  {
    C: "W2W7-NQ8U-5EI1",
    E: "SN-PLT01-250718-0175",
    G: "Flex"
  },
  {
    C: "H7V0-ET7C-6VV2",
    E: "SN-PLT01-250718-0176",
    G: "Vapor"
  },
  {
    C: "X5O5-QB0I-0KG0",
    E: "SN-PLT01-250718-0177",
    G: "Alpha"
  },
  {
    C: "T4T3-WP5I-1HG5",
    E: "SN-PLT01-250718-0178",
    G: "Nova"
  },
  {
    C: "D4W0-SF1I-0EO8",
    E: "SN-PLT01-250718-0179",
    G: "Ultra"
  },
  {
    C: "K0R4-HH4G-6RX8",
    E: "SN-PLT01-250718-0180",
    G: "Jordan"
  },
  {
    C: "S4N7-AZ1W-3PB3",
    E: "SN-PLT01-250718-0181",
    G: "Air"
  },
  {
    C: "G9H6-GU4U-2NL2",
    E: "SN-PLT01-250718-0182",
    G: "Zoom"
  },
  {
    C: "B2E3-NP8E-0RF9",
    E: "SN-PLT01-250718-0183",
    G: "React"
  },
  {
    C: "U8P3-NF5K-5BE5",
    E: "SN-PLT01-250718-0184",
    G: "Fly"
  },
  {
    C: "A3L2-EW3P-9OV3",
    E: "SN-PLT01-250718-0185",
    G: "Flex"
  },
  {
    C: "Y0K0-DX4T-0ZZ2",
    E: "SN-PLT01-250718-0186",
    G: "Vapor"
  },
  {
    C: "B4P7-QY6I-4DY7",
    E: "SN-PLT01-250718-0187",
    G: "Alpha"
  },
  {
    C: "A2X7-GU3Q-7RZ2",
    E: "SN-PLT01-250718-0188",
    G: "Nova"
  },
  {
    C: "M9G4-MI1D-6SP2",
    E: "SN-PLT01-250718-0189",
    G: "Ultra"
  },
  {
    C: "Z3W5-EO1L-8JV5",
    E: "SN-PLT01-250718-0190",
    G: "Jordan"
  },
  {
    C: "E5B8-HW6Z-3VB4",
    E: "SN-PLT01-250718-0191",
    G: "Air"
  },
  {
    C: "R6H3-KB2T-7WQ5",
    E: "SN-PLT01-250718-0192",
    G: "Zoom"
  },
  {
    C: "R1U3-BF8A-5XD1",
    E: "SN-PLT01-250718-0193",
    G: "React"
  },
  {
    C: "X0U3-FJ6R-3TY2",
    E: "SN-PLT01-250718-0194",
    G: "Fly"
  },
  {
    C: "Q2Y3-EL7Z-0IP7",
    E: "SN-PLT01-250718-0195",
    G: "Flex"
  },
  {
    C: "A9Z7-IX1C-7NG1",
    E: "SN-PLT01-250718-0196",
    G: "Vapor"
  },
  {
    C: "C9A6-LP2M-1OQ1",
    E: "SN-PLT01-250718-0197",
    G: "Alpha"
  },
  {
    C: "F5F6-AA5H-1MU7",
    E: "SN-PLT01-250718-0198",
    G: "Nova"
  },
  {
    C: "E0X5-ES2O-4MH7",
    E: "SN-PLT01-250718-0199",
    G: "Ultra"
  },
  {
    C: "M1C2-VO2F-7FR9",
    E: "SN-PLT01-250718-0200",
    G: "Jordan"
  },
  {
    C: "L0V9-MG9V-2JN0",
    E: "SN-PLT01-250718-0201",
    G: "Air"
  },
  {
    C: "T4Z4-AZ5W-5KM4",
    E: "SN-PLT01-250718-0202",
    G: "Zoom"
  },
  {
    C: "Q5C4-RG2H-6PR2",
    E: "SN-PLT01-250718-0203",
    G: "React"
  },
  {
    C: "Y4K6-BX2E-0NS3",
    E: "SN-PLT01-250718-0204",
    G: "Fly"
  },
  {
    C: "X7Q7-ET8J-3LF7",
    E: "SN-PLT01-250718-0205",
    G: "Flex"
  },
  {
    C: "P2K2-KB9D-3QO2",
    E: "SN-PLT01-250718-0206",
    G: "Vapor"
  },
  {
    C: "Q2D3-IZ2N-0LQ6",
    E: "SN-PLT01-250718-0207",
    G: "Alpha"
  },
  {
    C: "Q5I7-ZU0O-9ZW1",
    E: "SN-PLT01-250718-0208",
    G: "Nova"
  },
  {
    C: "Z8P4-DM4P-6SB3",
    E: "SN-PLT01-250718-0209",
    G: "Ultra"
  },
  {
    C: "O8Q0-TQ2P-0ZL9",
    E: "SN-PLT01-250718-0210",
    G: "Jordan"
  },
  {
    C: "A2J0-YA8I-0AP9",
    E: "SN-PLT01-250718-0211",
    G: "Air"
  },
  {
    C: "D3E5-HX1N-3IP9",
    E: "SN-PLT01-250718-0212",
    G: "Zoom"
  },
  {
    C: "S2Y5-LQ8T-3DA2",
    E: "SN-PLT01-250718-0213",
    G: "React"
  },
  {
    C: "L5K8-QD7E-8CL0",
    E: "SN-PLT01-250718-0214",
    G: "Fly"
  },
  {
    C: "C6C0-VO3J-8QQ4",
    E: "SN-PLT01-250718-0215",
    G: "Flex"
  },
  {
    C: "X0G2-XH5T-3ZF5",
    E: "SN-PLT01-250718-0216",
    G: "Vapor"
  },
  {
    C: "W0R3-IO1J-9FC1",
    E: "SN-PLT01-250718-0217",
    G: "Alpha"
  },
  {
    C: "O1O4-AH0T-6GB9",
    E: "SN-PLT01-250718-0218",
    G: "Nova"
  },
  {
    C: "D0G8-OP6Q-6WD3",
    E: "SN-PLT01-250718-0219",
    G: "Ultra"
  },
  {
    C: "G2Z0-LZ0X-3KK3",
    E: "SN-PLT01-250718-0220",
    G: "Jordan"
  },
  {
    C: "C8I3-OG4K-8DA8",
    E: "SN-PLT01-250718-0221",
    G: "Air"
  },
  {
    C: "A1X4-CO4X-1GT7",
    E: "SN-PLT01-250718-0222",
    G: "Zoom"
  },
  {
    C: "J3Z1-XQ5K-8FM5",
    E: "SN-PLT01-250718-0223",
    G: "React"
  },
  {
    C: "L3C9-IK7O-5TG1",
    E: "SN-PLT01-250718-0224",
    G: "Fly"
  },
  {
    C: "K0Y8-HG5Y-0HN0",
    E: "SN-PLT01-250718-0225",
    G: "Flex"
  },
  {
    C: "S5N1-DX7Z-8AO6",
    E: "SN-PLT01-250718-0226",
    G: "Vapor"
  },
  {
    C: "K9P2-MX8K-8OW6",
    E: "SN-PLT01-250718-0227",
    G: "Alpha"
  },
  {
    C: "V0O7-MD4H-3JG6",
    E: "SN-PLT01-250718-0228",
    G: "Nova"
  },
  {
    C: "U4X6-OX3M-4HA9",
    E: "SN-PLT01-250718-0229",
    G: "Ultra"
  },
  {
    C: "P0T4-ZL3F-7AU1",
    E: "SN-PLT01-250718-0230",
    G: "Jordan"
  },
  {
    C: "Z4S6-XC7T-1JV3",
    E: "SN-PLT01-250718-0231",
    G: "Air"
  },
  {
    C: "D7W0-JF3Y-2WV6",
    E: "SN-PLT01-250718-0232",
    G: "Zoom"
  },
  {
    C: "R9I2-RV6G-6DY0",
    E: "SN-PLT01-250718-0233",
    G: "React"
  },
  {
    C: "L5D9-UF4P-1PA4",
    E: "SN-PLT01-250718-0234",
    G: "Fly"
  },
  {
    C: "T6Q8-JS0G-9YO7",
    E: "SN-PLT01-250718-0235",
    G: "Flex"
  },
  {
    C: "R3E3-VS3C-3XZ6",
    E: "SN-PLT01-250718-0236",
    G: "Vapor"
  },
  {
    C: "Z4C8-EU3X-2KR0",
    E: "SN-PLT01-250718-0237",
    G: "Alpha"
  },
  {
    C: "J7H0-UK8B-7SE9",
    E: "SN-PLT01-250718-0238",
    G: "Nova"
  },
  {
    C: "I0W8-EY8E-5UP9",
    E: "SN-PLT01-250718-0239",
    G: "Ultra"
  },
  {
    C: "A7Y3-VR1R-4NJ0",
    E: "SN-PLT01-250718-0240",
    G: "Jordan"
  },
  {
    C: "C2H2-JR5T-9OJ1",
    E: "SN-PLT01-250718-0241",
    G: "Air"
  },
  {
    C: "D6L6-JS1V-7DW6",
    E: "SN-PLT01-250718-0242",
    G: "Zoom"
  },
  {
    C: "J0W3-YA8A-7PR2",
    E: "SN-PLT01-250718-0243",
    G: "React"
  },
  {
    C: "O8P5-SV7O-0HC0",
    E: "SN-PLT01-250718-0244",
    G: "Fly"
  },
  {
    C: "I5Y9-UX3H-8GZ7",
    E: "SN-PLT01-250718-0245",
    G: "Flex"
  },
  {
    C: "E6M0-RJ5O-9FP9",
    E: "SN-PLT01-250718-0246",
    G: "Vapor"
  },
  {
    C: "L1B5-HX5Q-0RP5",
    E: "SN-PLT01-250718-0247",
    G: "Alpha"
  },
  {
    C: "A0K6-XK5R-3HE1",
    E: "SN-PLT01-250718-0248",
    G: "Nova"
  },
  {
    C: "D5X9-GN6P-4NQ6",
    E: "SN-PLT01-250718-0249",
    G: "Ultra"
  },
  {
    C: "H8K5-BG8B-1SB4",
    E: "SN-PLT01-250718-0250",
    G: "Jordan"
  },
  {
    C: "H4I9-KR1X-0TV6",
    E: "SN-PLT01-250718-0251",
    G: "Air"
  },
  {
    C: "R9D3-UK5Q-4US4",
    E: "SN-PLT01-250718-0252",
    G: "Zoom"
  },
  {
    C: "M8K4-BM2V-5WW9",
    E: "SN-PLT01-250718-0253",
    G: "React"
  },
  {
    C: "N4E2-RJ4C-8YL9",
    E: "SN-PLT01-250718-0254",
    G: "Fly"
  },
  {
    C: "L9M7-RY3W-5JO2",
    E: "SN-PLT01-250718-0255",
    G: "Flex"
  },
  {
    C: "P1O4-IF8Y-7HB9",
    E: "SN-PLT01-250718-0256",
    G: "Vapor"
  },
  {
    C: "I7O3-EF4R-7CW3",
    E: "SN-PLT01-250718-0257",
    G: "Alpha"
  },
  {
    C: "S0G3-XR9Z-6DP3",
    E: "SN-PLT01-250718-0258",
    G: "Nova"
  },
  {
    C: "F3O2-SP7L-0QA5",
    E: "SN-PLT01-250718-0259",
    G: "Ultra"
  },
  {
    C: "S5S0-BO4K-5EN0",
    E: "SN-PLT01-250718-0260",
    G: "Jordan"
  },
  {
    C: "G8Z6-WF6Q-0XY0",
    E: "SN-PLT01-250718-0261",
    G: "Air"
  },
  {
    C: "P8L1-GZ8G-8BJ9",
    E: "SN-PLT01-250718-0262",
    G: "Zoom"
  },
  {
    C: "N5W9-HV5Q-5CE1",
    E: "SN-PLT01-250718-0263",
    G: "React"
  },
  {
    C: "D5E2-MS7O-9WJ0",
    E: "SN-PLT01-250718-0264",
    G: "Fly"
  },
  {
    C: "G3N6-ZQ3V-2CC5",
    E: "SN-PLT01-250718-0265",
    G: "Flex"
  },
  {
    C: "N5S6-BB6O-1LA7",
    E: "SN-PLT01-250718-0266",
    G: "Vapor"
  },
  {
    C: "C8T7-PT1T-5MU8",
    E: "SN-PLT01-250718-0267",
    G: "Alpha"
  },
  {
    C: "K3N6-ZT3F-9LD8",
    E: "SN-PLT01-250718-0268",
    G: "Nova"
  },
  {
    C: "Z5Z9-ZD1B-8AB2",
    E: "SN-PLT01-250718-0269",
    G: "Ultra"
  },
  {
    C: "K0R1-QU9X-5OB6",
    E: "SN-PLT01-250718-0270",
    G: "Jordan"
  },
  {
    C: "M0K0-ZR0C-8HS0",
    E: "SN-PLT01-250718-0271",
    G: "Air"
  },
  {
    C: "R2E0-RJ2P-5UM0",
    E: "SN-PLT01-250718-0272",
    G: "Zoom"
  },
  {
    C: "T1I1-TX6Y-3OV1",
    E: "SN-PLT01-250718-0273",
    G: "React"
  },
  {
    C: "K3C3-AN5Q-1PX8",
    E: "SN-PLT01-250718-0274",
    G: "Fly"
  },
  {
    C: "N3K3-VK2X-4LO2",
    E: "SN-PLT01-250718-0275",
    G: "Flex"
  },
  {
    C: "H5W5-ZJ2T-7XO7",
    E: "SN-PLT01-250718-0276",
    G: "Vapor"
  },
  {
    C: "R8W4-OI3O-8OD7",
    E: "SN-PLT01-250718-0277",
    G: "Alpha"
  },
  {
    C: "J1E9-DA8W-2VR9",
    E: "SN-PLT01-250718-0278",
    G: "Nova"
  },
  {
    C: "I7O8-MF0T-6JL1",
    E: "SN-PLT01-250718-0279",
    G: "Ultra"
  },
  {
    C: "Z7G4-UA7T-7NF2",
    E: "SN-PLT01-250718-0280",
    G: "Jordan"
  },
  {
    C: "B6L9-LM8Z-5KR1",
    E: "SN-PLT01-250718-0281",
    G: "Air"
  },
  {
    C: "F4G5-EL7L-0BM9",
    E: "SN-PLT01-250718-0282",
    G: "Zoom"
  },
  {
    C: "O2F8-ZI8Y-1ET4",
    E: "SN-PLT01-250718-0283",
    G: "React"
  },
  {
    C: "Y2K6-LC8L-9AS7",
    E: "SN-PLT01-250718-0284",
    G: "Fly"
  },
  {
    C: "K2J5-KB6B-4ZI3",
    E: "SN-PLT01-250718-0285",
    G: "Flex"
  },
  {
    C: "S9Q5-EI6U-9HQ2",
    E: "SN-PLT01-250718-0286",
    G: "Vapor"
  },
  {
    C: "Y8A1-AM5B-5VW5",
    E: "SN-PLT01-250718-0287",
    G: "Alpha"
  },
  {
    C: "V7M0-BV9T-2YV4",
    E: "SN-PLT01-250718-0288",
    G: "Nova"
  },
  {
    C: "D8H8-DB6E-7YC8",
    E: "SN-PLT01-250718-0289",
    G: "Ultra"
  },
  {
    C: "Z3N9-GK7L-3CI5",
    E: "SN-PLT01-250718-0290",
    G: "Jordan"
  },
  {
    C: "U3I8-UK8R-2ZM5",
    E: "SN-PLT01-250718-0291",
    G: "Air"
  },
  {
    C: "V5M9-GS3S-6IZ9",
    E: "SN-PLT01-250718-0292",
    G: "Zoom"
  },
  {
    C: "V9Y6-CA4S-2SQ7",
    E: "SN-PLT01-250718-0293",
    G: "React"
  },
  {
    C: "L8L0-OS5R-6NQ2",
    E: "SN-PLT01-250718-0294",
    G: "Fly"
  },
  {
    C: "W0A1-UO8J-8CC2",
    E: "SN-PLT01-250718-0295",
    G: "Flex"
  },
  {
    C: "X3F9-ER5N-7WL6",
    E: "SN-PLT01-250718-0296",
    G: "Vapor"
  },
  {
    C: "E7Q7-YX1V-6DR3",
    E: "SN-PLT01-250718-0297",
    G: "Alpha"
  },
  {
    C: "I1U4-IR0H-8ZN2",
    E: "SN-PLT01-250718-0298",
    G: "Nova"
  },
  {
    C: "S9U9-IO1P-3OZ7",
    E: "SN-PLT01-250718-0299",
    G: "Ultra"
  },
  {
    C: "N8P6-PM4H-0KS4",
    E: "SN-PLT01-250718-0300",
    G: "Jordan"
  },
  {
    C: "Z9I8-VR5F-6SF6",
    E: "SN-PLT01-250718-0301",
    G: "Air"
  },
  {
    C: "R4V1-ND8W-6WD5",
    E: "SN-PLT01-250718-0302",
    G: "Zoom"
  },
  {
    C: "I8E3-NE0X-5IG6",
    E: "SN-PLT01-250718-0303",
    G: "React"
  },
  {
    C: "Y1C6-JE8F-6ZZ0",
    E: "SN-PLT01-250718-0304",
    G: "Fly"
  },
  {
    C: "T4U6-GR1G-0EN1",
    E: "SN-PLT01-250718-0305",
    G: "Flex"
  },
  {
    C: "U9B8-BJ8C-5WE6",
    E: "SN-PLT01-250718-0306",
    G: "Vapor"
  },
  {
    C: "A9L1-HI3F-5JD2",
    E: "SN-PLT01-250718-0307",
    G: "Alpha"
  },
  {
    C: "O1X1-LM4I-6OB6",
    E: "SN-PLT01-250718-0308",
    G: "Nova"
  },
  {
    C: "P5B7-OU8A-8IC3",
    E: "SN-PLT01-250718-0309",
    G: "Ultra"
  },
  {
    C: "X5Y0-XC8E-0MV7",
    E: "SN-PLT01-250718-0310",
    G: "Jordan"
  },
  {
    C: "S4B0-SL4V-6DC7",
    E: "SN-PLT01-250718-0311",
    G: "Air"
  },
  {
    C: "K6T0-HC5X-0OH9",
    E: "SN-PLT01-250718-0312",
    G: "Zoom"
  },
  {
    C: "Y1F3-HA1M-6EA3",
    E: "SN-PLT01-250718-0313",
    G: "React"
  },
  {
    C: "P3E7-HV3P-1FA7",
    E: "SN-PLT01-250718-0314",
    G: "Fly"
  },
  {
    C: "R5O3-BB3T-1CL2",
    E: "SN-PLT01-250718-0315",
    G: "Flex"
  },
  {
    C: "Y5O0-MK9E-0QY1",
    E: "SN-PLT01-250718-0316",
    G: "Vapor"
  },
  {
    C: "R5H8-VD8O-1EM5",
    E: "SN-PLT01-250718-0317",
    G: "Alpha"
  },
  {
    C: "O6S1-BH1A-9CE2",
    E: "SN-PLT01-250718-0318",
    G: "Nova"
  },
  {
    C: "I2D1-JG4N-6VY0",
    E: "SN-PLT01-250718-0319",
    G: "Ultra"
  },
  {
    C: "E5K4-EH9H-2IH7",
    E: "SN-PLT01-250718-0320",
    G: "Jordan"
  },
  {
    C: "B5L8-XW3Y-6IE2",
    E: "SN-PLT01-250718-0321",
    G: "Air"
  },
  {
    C: "V3F7-GK8V-1WW0",
    E: "SN-PLT01-250718-0322",
    G: "Zoom"
  },
  {
    C: "E4H9-CP8M-4GS3",
    E: "SN-PLT01-250718-0323",
    G: "React"
  },
  {
    C: "I7T5-VX4N-4NM2",
    E: "SN-PLT01-250718-0324",
    G: "Fly"
  },
  {
    C: "S2H8-EN9A-7QT9",
    E: "SN-PLT01-250718-0325",
    G: "Flex"
  },
  {
    C: "V9T7-OZ1B-7NG1",
    E: "SN-PLT01-250718-0326",
    G: "Vapor"
  },
  {
    C: "H7H9-QN5H-0VV9",
    E: "SN-PLT01-250718-0327",
    G: "Alpha"
  },
  {
    C: "S1F0-XH8A-5GF7",
    E: "SN-PLT01-250718-0328",
    G: "Nova"
  },
  {
    C: "V7F4-VR3O-9LS3",
    E: "SN-PLT01-250718-0329",
    G: "Ultra"
  },
  {
    C: "K8C2-PB5W-5SJ6",
    E: "SN-PLT01-250718-0330",
    G: "Jordan"
  },
  {
    C: "F3R8-QG3I-3QL1",
    E: "SN-PLT01-250718-0331",
    G: "Air"
  },
  {
    C: "Z2K2-IL5T-4NC9",
    E: "SN-PLT01-250718-0332",
    G: "Zoom"
  },
  {
    C: "Q0M1-PC6T-2JB6",
    E: "SN-PLT01-250718-0333",
    G: "React"
  },
  {
    C: "M5L7-CD0J-5SW0",
    E: "SN-PLT01-250718-0334",
    G: "Fly"
  },
  {
    C: "D1Y0-VB1Z-5DE2",
    E: "SN-PLT01-250718-0335",
    G: "Flex"
  },
  {
    C: "A9X6-CM8W-3LS9",
    E: "SN-PLT01-250718-0336",
    G: "Vapor"
  },
  {
    C: "W3F6-MU6J-9IP3",
    E: "SN-PLT01-250718-0337",
    G: "Alpha"
  },
  {
    C: "U0G3-TQ3L-4TS7",
    E: "SN-PLT01-250718-0338",
    G: "Nova"
  },
  {
    C: "P0X4-UF0G-1QI6",
    E: "SN-PLT01-250718-0339",
    G: "Ultra"
  },
  {
    C: "B7C2-NF6O-5XT9",
    E: "SN-PLT01-250718-0340",
    G: "Jordan"
  },
  {
    C: "N7Y2-DB7Q-0ZO9",
    E: "SN-PLT01-250718-0341",
    G: "Air"
  },
  {
    C: "L3B0-UA7M-8YV3",
    E: "SN-PLT01-250718-0342",
    G: "Zoom"
  },
  {
    C: "N8S2-TM5T-8MH1",
    E: "SN-PLT01-250718-0343",
    G: "React"
  },
  {
    C: "K0G3-PW7H-3JL2",
    E: "SN-PLT01-250718-0344",
    G: "Fly"
  },
  {
    C: "M4J2-FC0O-7WW6",
    E: "SN-PLT01-250718-0345",
    G: "Flex"
  },
  {
    C: "G9V7-CW5P-7KJ8",
    E: "SN-PLT01-250718-0346",
    G: "Vapor"
  },
  {
    C: "S4P3-FK5F-3JK9",
    E: "SN-PLT01-250718-0347",
    G: "Alpha"
  },
  {
    C: "F2Q8-KR6S-1YC3",
    E: "SN-PLT01-250718-0348",
    G: "Nova"
  },
  {
    C: "A9E0-TO2M-2XV8",
    E: "SN-PLT01-250718-0349",
    G: "Ultra"
  },
  {
    C: "Q7G5-KB2K-1WR1",
    E: "SN-PLT01-250718-0350",
    G: "Jordan"
  },
  {
    C: "Z6R7-BE3P-3IG0",
    E: "SN-PLT01-250718-0351",
    G: "Air"
  },
  {
    C: "J7A5-YR1Z-3AA3",
    E: "SN-PLT01-250718-0352",
    G: "Zoom"
  },
  {
    C: "E6U0-LK1Y-0LK5",
    E: "SN-PLT01-250718-0353",
    G: "React"
  },
  {
    C: "O5Z7-VC7L-6BC2",
    E: "SN-PLT01-250718-0354",
    G: "Fly"
  },
  {
    C: "V4Y7-RT4Y-0VQ2",
    E: "SN-PLT01-250718-0355",
    G: "Flex"
  },
  {
    C: "G6C4-NR7Y-3EH2",
    E: "SN-PLT01-250718-0356",
    G: "Vapor"
  },
  {
    C: "K1B0-DR7S-1MP9",
    E: "SN-PLT01-250718-0357",
    G: "Alpha"
  },
  {
    C: "C9V8-ZB3A-8PP4",
    E: "SN-PLT01-250718-0358",
    G: "Nova"
  },
  {
    C: "Y6E0-IY2N-8ZX8",
    E: "SN-PLT01-250718-0359",
    G: "Ultra"
  },
  {
    C: "T4E7-NV2Q-9AN7",
    E: "SN-PLT01-250718-0360",
    G: "Jordan"
  },
  {
    C: "Y3C2-DN7E-8ES1",
    E: "SN-PLT01-250718-0361",
    G: "Air"
  },
  {
    C: "E8A7-UF8G-6AG2",
    E: "SN-PLT01-250718-0362",
    G: "Zoom"
  },
  {
    C: "D8F2-KO9T-9PK5",
    E: "SN-PLT01-250718-0363",
    G: "React"
  },
  {
    C: "H2Z8-BO3D-5VF3",
    E: "SN-PLT01-250718-0364",
    G: "Fly"
  },
  {
    C: "L8M2-QB4H-6AJ6",
    E: "SN-PLT01-250718-0365",
    G: "Flex"
  },
  {
    C: "E4X7-QH4K-2YL7",
    E: "SN-PLT01-250718-0366",
    G: "Vapor"
  },
  {
    C: "K7X2-ZE0E-0DU7",
    E: "SN-PLT01-250718-0367",
    G: "Alpha"
  },
  {
    C: "N3D0-LN2E-4JT4",
    E: "SN-PLT01-250718-0368",
    G: "Nova"
  },
  {
    C: "H2X5-UA9S-3MI4",
    E: "SN-PLT01-250718-0369",
    G: "Ultra"
  },
  {
    C: "M4V9-GM5G-8NY5",
    E: "SN-PLT01-250718-0370",
    G: "Jordan"
  },
  {
    C: "X9D4-TM4U-3ZG9",
    E: "SN-PLT01-250718-0371",
    G: "Air"
  },
  {
    C: "N0J8-XA0I-3ET1",
    E: "SN-PLT01-250718-0372",
    G: "Zoom"
  },
  {
    C: "V7P9-MK9P-2GC7",
    E: "SN-PLT01-250718-0373",
    G: "React"
  },
  {
    C: "A4T1-XO9H-3FX0",
    E: "SN-PLT01-250718-0374",
    G: "Fly"
  },
  {
    C: "X5T1-EL1S-3ZF8",
    E: "SN-PLT01-250718-0375",
    G: "Flex"
  },
  {
    C: "F4C2-DO5Y-7RN4",
    E: "SN-PLT01-250718-0376",
    G: "Vapor"
  },
  {
    C: "Z8B6-GM0M-2TY0",
    E: "SN-PLT01-250718-0377",
    G: "Alpha"
  },
  {
    C: "K9K8-HK9T-4GE5",
    E: "SN-PLT01-250718-0378",
    G: "Nova"
  },
  {
    C: "R5X1-ET4C-6JL8",
    E: "SN-PLT01-250718-0379",
    G: "Ultra"
  },
  {
    C: "Y8V9-TP7K-8GN4",
    E: "SN-PLT01-250718-0380",
    G: "Jordan"
  },
  {
    C: "O0X4-QN4D-7RK1",
    E: "SN-PLT01-250718-0381",
    G: "Air"
  },
  {
    C: "S0J8-RO0D-7DB8",
    E: "SN-PLT01-250718-0382",
    G: "Zoom"
  },
  {
    C: "Y4L2-VM3L-0XA7",
    E: "SN-PLT01-250718-0383",
    G: "React"
  },
  {
    C: "F6I9-AJ9O-4LH9",
    E: "SN-PLT01-250718-0384",
    G: "Fly"
  },
  {
    C: "J7E3-JJ6B-5DV4",
    E: "SN-PLT01-250718-0385",
    G: "Flex"
  },
  {
    C: "C3O6-QM4A-4WW7",
    E: "SN-PLT01-250718-0386",
    G: "Vapor"
  },
  {
    C: "K6D6-HA7U-5WT2",
    E: "SN-PLT01-250718-0387",
    G: "Alpha"
  },
  {
    C: "Z9O0-HU5L-1OL2",
    E: "SN-PLT01-250718-0388",
    G: "Nova"
  },
  {
    C: "J0E5-XR9B-1HC3",
    E: "SN-PLT01-250718-0389",
    G: "Ultra"
  },
  {
    C: "J6S9-HF3F-4HT7",
    E: "SN-PLT01-250718-0390",
    G: "Jordan"
  },
  {
    C: "O9X5-EB8H-6AN2",
    E: "SN-PLT01-250718-0391",
    G: "Air"
  },
  {
    C: "D9H5-AY4L-2GN9",
    E: "SN-PLT01-250718-0392",
    G: "Zoom"
  },
  {
    C: "R6L7-FI2K-3QD9",
    E: "SN-PLT01-250718-0393",
    G: "React"
  },
  {
    C: "S3E7-CY1S-1VX5",
    E: "SN-PLT01-250718-0394",
    G: "Fly"
  },
  {
    C: "Q7T8-NU0E-6OJ2",
    E: "SN-PLT01-250718-0395",
    G: "Flex"
  },
  {
    C: "S2J4-YC7K-6ES3",
    E: "SN-PLT01-250718-0396",
    G: "Vapor"
  },
  {
    C: "I5J1-WM7A-6CE7",
    E: "SN-PLT01-250718-0397",
    G: "Alpha"
  },
  {
    C: "L6W6-FB3W-0AK1",
    E: "SN-PLT01-250718-0398",
    G: "Nova"
  },
  {
    C: "R8S0-TW8P-3BM9",
    E: "SN-PLT01-250718-0399",
    G: "Ultra"
  },
  {
    C: "L2W0-DB0K-9DC9",
    E: "SN-PLT01-250718-0400",
    G: "Jordan"
  },
  {
    C: "F9Y5-WT5C-0DR1",
    E: "SN-PLT01-250718-0401",
    G: "Air"
  },
  {
    C: "L6X5-JG7U-7WB1",
    E: "SN-PLT01-250718-0402",
    G: "Zoom"
  },
  {
    C: "K3P0-NY5W-4YB6",
    E: "SN-PLT01-250718-0403",
    G: "React"
  },
  {
    C: "E3H9-KR5I-2EO7",
    E: "SN-PLT01-250718-0404",
    G: "Fly"
  },
  {
    C: "D6E6-HW4X-7SR8",
    E: "SN-PLT01-250718-0405",
    G: "Flex"
  },
  {
    C: "B9L7-ZD2X-7LO1",
    E: "SN-PLT01-250718-0406",
    G: "Vapor"
  },
  {
    C: "Q1U2-JK8Z-0VL8",
    E: "SN-PLT01-250718-0407",
    G: "Alpha"
  },
  {
    C: "C3S5-EY2U-2VF5",
    E: "SN-PLT01-250718-0408",
    G: "Nova"
  },
  {
    C: "E1C7-PB0N-7CM9",
    E: "SN-PLT01-250718-0409",
    G: "Ultra"
  },
  {
    C: "A1V4-EK6Q-7LO9",
    E: "SN-PLT01-250718-0410",
    G: "Jordan"
  },
  {
    C: "B8Z4-SX8M-2SM3",
    E: "SN-PLT01-250718-0411",
    G: "Air"
  },
  {
    C: "X5X6-YF1S-9XD7",
    E: "SN-PLT01-250718-0412",
    G: "Zoom"
  },
  {
    C: "S5R2-GH8M-5ZH5",
    E: "SN-PLT01-250718-0413",
    G: "React"
  },
  {
    C: "C3P1-RI4C-3JR0",
    E: "SN-PLT01-250718-0414",
    G: "Fly"
  },
  {
    C: "Q5A7-ES9M-0KB1",
    E: "SN-PLT01-250718-0415",
    G: "Flex"
  },
  {
    C: "Q2P2-GS7D-8RD4",
    E: "SN-PLT01-250718-0416",
    G: "Vapor"
  },
  {
    C: "H3L5-NK2M-4WS6",
    E: "SN-PLT01-250718-0417",
    G: "Alpha"
  },
  {
    C: "G2F5-YX3I-5HE9",
    E: "SN-PLT01-250718-0418",
    G: "Nova"
  },
  {
    C: "K2S3-SF7V-6MO5",
    E: "SN-PLT01-250718-0419",
    G: "Ultra"
  },
  {
    C: "F2Y6-BJ2Z-8PX6",
    E: "SN-PLT01-250718-0420",
    G: "Jordan"
  },
  {
    C: "E0C3-ZU1V-0DF8",
    E: "SN-PLT01-250718-0421",
    G: "Air"
  },
  {
    C: "D4V9-EI3R-1VD1",
    E: "SN-PLT01-250718-0422",
    G: "Zoom"
  },
  {
    C: "H1E8-ZV6B-7NL8",
    E: "SN-PLT01-250718-0423",
    G: "React"
  },
  {
    C: "F9T2-CY3H-0IU3",
    E: "SN-PLT01-250718-0424",
    G: "Fly"
  },
  {
    C: "M7N0-FK0I-7ZG8",
    E: "SN-PLT01-250718-0425",
    G: "Flex"
  },
  {
    C: "L7Q0-OI3F-0JT4",
    E: "SN-PLT01-250718-0426",
    G: "Vapor"
  },
  {
    C: "D7A7-CD5S-6SY9",
    E: "SN-PLT01-250718-0427",
    G: "Alpha"
  },
  {
    C: "H8L4-BG4W-0NP3",
    E: "SN-PLT01-250718-0428",
    G: "Nova"
  },
  {
    C: "L2T7-JT8Q-1AY6",
    E: "SN-PLT01-250718-0429",
    G: "Ultra"
  },
  {
    C: "E9Y5-TR5M-8UU5",
    E: "SN-PLT01-250718-0430",
    G: "Jordan"
  },
  {
    C: "D1L4-PT2B-5HI0",
    E: "SN-PLT01-250718-0431",
    G: "Air"
  },
  {
    C: "Z0Y0-TC1K-5NR9",
    E: "SN-PLT01-250718-0432",
    G: "Zoom"
  },
  {
    C: "M8Y9-UX6X-0SG2",
    E: "SN-PLT01-250718-0433",
    G: "React"
  },
  {
    C: "W9X1-WZ7N-4AL2",
    E: "SN-PLT01-250718-0434",
    G: "Fly"
  },
  {
    C: "S0Y8-OJ0K-8VK7",
    E: "SN-PLT01-250718-0435",
    G: "Flex"
  },
  {
    C: "T4P4-PD6E-6IM9",
    E: "SN-PLT01-250718-0436",
    G: "Vapor"
  },
  {
    C: "N2E1-KB1C-2BP5",
    E: "SN-PLT01-250718-0437",
    G: "Alpha"
  },
  {
    C: "E6C5-LU9P-8KE4",
    E: "SN-PLT01-250718-0438",
    G: "Nova"
  },
  {
    C: "B9B0-IO7H-7IH7",
    E: "SN-PLT01-250718-0439",
    G: "Ultra"
  }
];

// ✅ Clean productData
productData = productData.filter(item =>
  item.C && item.E && item.G && item.C !== "Scratch codes"
);

productData.forEach(item => {
  item.C = item.C.trim().toUpperCase();
});

function verifyCode() {
  const inputBox = document.getElementById("scratchInput");
  const input = inputBox.value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");
  const lock = document.getElementById("lockIcon");

  // Reset UI
  resultDiv.className = '';
  resultDiv.innerHTML = '';
  lock.classList.remove("unlocked");
  lock.classList.add("locked");

  // Add verifying class and animation
  resultDiv.classList.add('verifying');
  resultDiv.innerHTML = `🔍 <em>Verifying code...</em>`;

  // Simulate verification delay
  setTimeout(() => {
    const match = productData.find(item => item.C === input);

    if (match) {
      resultDiv.className = 'success';
      resultDiv.innerHTML = `
        ✅ <strong>Authentic Product</strong><br><br>
        <b>Model:</b> ${match.G}<br>
        <b>Serial Number:</b> ${match.E}
      `;

      // Unlock animation
      lock.classList.remove("locked");
      lock.classList.add("unlocked");
    } else {
      resultDiv.className = 'error';
      resultDiv.innerHTML = `
        ❌ <strong>Invalid or Fake Scratch Code</strong>
      `;
    }
  }, 1000);
}
