function ResultTable(){

    const teams=["oxy","cms","pomona"];

    const meet ={
        "teams": [
          {
            "teamName": "Chapman",
            "mOrF": false,
            "performances": [
              {
                "event": "100 Meters (Men)",
                "result": "10.94",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Wilson, Donovan",
                  "year": "JR-3"
                }
              },
              {
                "event": "200 Meters (Men)",
                "result": "22.37",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Wilson, Donovan",
                  "year": "JR-3"
                }
              },
              {
                "event": "200 Meters (Men)",
                "result": "22.69",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Wong, Nathan",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Men)",
                "result": "49.86",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Wilson, Donovan",
                  "year": "JR-3"
                }
              },
              {
                "event": "400 Meters (Men)",
                "result": "50.33",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Wong, Nathan",
                  "year": "FR-1"
                }
              },
              {
                "event": "10,000 Meters (Men)",
                "result": "34:07.12",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "White, Aiden",
                  "year": "FR-1"
                }
              },
              {
                "event": "110 Hurdles (Men)",
                "result": "15.59",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Crumby, Michael",
                  "year": "FR-1"
                }
              },
              {
                "event": "110 Hurdles (Men)",
                "result": "16.96",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Becker, Matthew",
                  "year": "FR-1"
                }
              },
              {
                "event": "110 Hurdles (Men)",
                "result": "18.71",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Dillon, Jason",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Hurdles (Men)",
                "result": "58.69",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Dillon, Jason",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Hurdles (Men)",
                "result": "1:01.89",
                "rank": 5,
                "points": 4,
                "athlete": {
                  "name": "Crumby, Michael",
                  "year": "FR-1"
                }
              },
              {
                "event": "3000 Steeplechase (Men)",
                "result": "9:24.27",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Hart, Anthony",
                  "year": "FR-1"
                }
              },
              {
                "event": "3000 Steeplechase (Men)",
                "result": "10:08.81",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Anderson, David",
                  "year": "FR-1"
                }
              },
              {
                "event": "4 x 100 Relay (Men)",
                "result": "43.06",
                "rank": 1,
                "points": 10,
                "athletes": "Drake, Wilson, Shen, Potier"
              },
              {
                "event": "4 x 400 Relay (Men)",
                "result": "3:24.71",
                "rank": 1,
                "points": 10,
                "athletes": "Wilson, Shen, Brito, Wong"
              },
              {
                "event": "High Jump (Men)",
                "result": "1.75m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "McMillan, Jesse",
                  "year": "FR-1"
                }
              },
              {
                "event": "High Jump (Men)",
                "result": "1.60m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Bozorgi, Matthew",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Men)",
                "result": "4.90m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "McMillan, Jesse",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Men)",
                "result": "4.10m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Chrstiansen, Arne",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Men)",
                "result": "3.70m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Laszewski, Slade",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Men)",
                "result": "2.60m",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Dalan, Kyle",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Men)",
                "result": "6.38m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Becker, Matthew",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Men)",
                "result": "6.18m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Schwaiger, Daniel",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Men)",
                "result": "5.96m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Desuasido, Alec",
                  "year": "FR-1"
                }
              },
              {
                "event": "Triple Jump (Men)",
                "result": "13.64m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Desuasido, Alec",
                  "year": "FR-1"
                }
              },
              {
                "event": "Triple Jump (Men)",
                "result": "11.37m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Patel, Ohm",
                  "year": "FR-1"
                }
              },
              {
                "event": "Triple Jump (Men)",
                "result": "11.07m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Potier, August",
                  "year": "FR-1"
                }
              },
              {
                "event": "Shot Put (Men)",
                "result": "13.04m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Longley, Sean",
                  "year": "FR-1"
                }
              },
              {
                "event": "Discus (Men)",
                "result": "39.53m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Longley, Sean",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Men)",
                "result": "42.29m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Longley, Sean",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Men)",
                "result": "28.79m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Kish, Owen",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Men)",
                "result": "26.01m",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Endow, Davis",
                  "year": "FR-1"
                }
              },
              {
                "event": "Javelin (Men)",
                "result": "52.05m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Dyckman, Christopher",
                  "year": "FR-1"
                }
              },
              {
                "event": "Javelin (Men)",
                "result": "45.65m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Endow, Davis",
                  "year": "FR-1"
                }
              },
              {
                "event": "Javelin (Men)",
                "result": "43.98m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "McFarlane, Cole",
                  "year": "FR-1"
                }
              },
              {
                "event": "Javelin (Men)",
                "result": "43.62m",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Thompson, Sam",
                  "year": "FR-1"
                }
              },
              {
                "event": "Javelin (Men)",
                "result": "42.28m",
                "rank": 5,
                "points": 4,
                "athlete": {
                  "name": "Paen, Alexander",
                  "year": "FR-1"
                }
              }
            ]
          },
          {
            "teamName": "Chapman",
            "mOrF": true,
            "performances": [
              {
                "event": "100 Meters (Women)",
                "result": "12.53",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Zurasky, Zoe",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Meters (Women)",
                "result": "13.21",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Stiner, Khyra",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Meters (Women)",
                "result": "13.27",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Smith, Kaylee",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Meters (Women)",
                "result": "13.28",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Keehn, Sandra",
                  "year": "FR-1"
                }
              },
              {
                "event": "200 Meters (Women)",
                "result": "25.87",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Kremer, Allison",
                  "year": "FR-1"
                }
              },
              {
                "event": "200 Meters (Women)",
                "result": "26.02",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Zurasky, Zoe",
                  "year": "FR-1"
                }
              },
              {
                "event": "200 Meters (Women)",
                "result": "26.77",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Smith, Kaylee",
                  "year": "FR-1"
                }
              },
              {
                "event": "200 Meters (Women)",
                "result": "27.56",
                "rank": 5,
                "points": 4,
                "athlete": {
                  "name": "Keehn, Sandra",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "59.11",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Kremer, Allison",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "1:01.78",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Trent, Carly",
                  "year": "SO-2"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "1:02.10",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Smith, Kaylee",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "1:02.61",
                "rank": 5,
                "points": 4,
                "athlete": {
                  "name": "Kitnitchiva, Chayanit",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "1:04.57",
                "rank": 7,
                "points": 2,
                "athlete": {
                  "name": "Maric, Katarina",
                  "year": "FR-1"
                }
              },
              {
                "event": "800 Meters (Women)",
                "result": "2:16.41",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Almeida, Kayla",
                  "year": "FR-1"
                }
              },
              {
                "event": "800 Meters (Women)",
                "result": "2:18.66",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Mirro, Maddie",
                  "year": "FR-1"
                }
              },
              {
                "event": "800 Meters (Women)",
                "result": "2:25.58",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Diaz, Jordan",
                  "year": "FR-1"
                }
              },
              {
                "event": "1500 Meters (Women)",
                "result": "4:43.60",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Mirro, Maddie",
                  "year": "FR-1"
                }
              },
              {
                "event": "1500 Meters (Women)",
                "result": "4:53.14",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Almeida, Kayla",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Hurdles (Women)",
                "result": "16.19",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Stiner, Khyra",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Hurdles (Women)",
                "result": "16.71",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Kodjababian, Ella",
                  "year": "FR-1"
                }
              },
              {
                "event": "100 Hurdles (Women)",
                "result": "18.24",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Shilon, Adva",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Hurdles (Women)",
                "result": "1:07.93",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Maric, Katarina",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Hurdles (Women)",
                "result": "1:08.09",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Stiner, Khyra",
                  "year": "FR-1"
                }
              },
              {
                "event": "4 x 100 Relay (Women)",
                "result": "49.17",
                "rank": 1,
                "points": 10,
                "athletes": "Stiner, Smith, Kremer, Zurasky"
              },
              {
                "event": "4 x 400 Relay (Women)",
                "result": "4:01.28",
                "rank": 1,
                "points": 10,
                "athletes": "Kremer, Smith, Almeida, Trent"
              },
              {
                "event": "High Jump (Women)",
                "result": "1.55m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Shilon, Adva",
                  "year": "FR-1"
                }
              },
              {
                "event": "High Jump (Women)",
                "result": "1.52m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Zurasky, Zoe",
                  "year": "FR-1"
                }
              },
              {
                "event": "High Jump (Women)",
                "result": "1.45m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Thompson, Skylar",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Women)",
                "result": "3.07m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Shilon, Adva",
                  "year": "FR-1"
                }
              },
              {
                "event": "Pole Vault (Women)",
                "result": "2.45m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Thompson, Skylar",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Women)",
                "result": "4.84m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Kodjababian, Ella",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Women)",
                "result": "4.72m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Zurasky, Zoe",
                  "year": "FR-1"
                }
              },
              {
                "event": "Long Jump (Women)",
                "result": "4.62m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Ramirez, Lizbeth",
                  "year": "FR-1"
                }
              },
              {
                "event": "Triple Jump (Women)",
                "result": "9.68m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Zurasky, Zoe",
                  "year": "FR-1"
                }
              },
              {
                "event": "Triple Jump (Women)",
                "result": "9.63m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Kodjababian, Ella",
                  "year": "FR-1"
                }
              },
              {
                "event": "Shot Put (Women)",
                "result": "10.17m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Girardi, Maija",
                  "year": "SO-2"
                }
              },
              {
                "event": "Discus (Women)",
                "result": "27.21m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Johnson, Promise",
                  "year": "SO-2"
                }
              },
              {
                "event": "Javelin (Women)",
                "result": "34.80m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Girardi, Maija",
                  "year": "SO-2"
                }
              },
              {
                "event": "Javelin (Women)",
                "result": "18.83m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Shilon, Adva",
                  "year": "FR-1"
                }
              }
            ]
          },
          {
            "teamName": "Caltech",
            "mOrF": true,
            "performances": [
              {
                "event": "200 Meters (Women)",
                "result": "27.54",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Randall, Lily",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "59.15",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Trautner, Margaret",
                  "year": "SR-4"
                }
              },
              {
                "event": "400 Meters (Women)",
                "result": "1:03.12",
                "rank": 6,
                "points": 3,
                "athlete": {
                  "name": "Randall, Lily",
                  "year": "FR-1"
                }
              },
              {
                "event": "800 Meters (Women)",
                "result": "2:08.43",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Trautner, Margaret",
                  "year": "SR-4"
                }
              },
              {
                "event": "1500 Meters (Women)",
                "result": "4:27.35",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Trautner, Margaret",
                  "year": "SR-4"
                }
              },
              {
                "event": "5000 Meters (Women)",
                "result": "17:55.36",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Dalfonzo, Sophia",
                  "year": "FR-1"
                }
              },
              {
                "event": "5000 Meters (Women)",
                "result": "18:23.45",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Hu, Claire",
                  "year": "SR-4"
                }
              },
              {
                "event": "5000 Meters (Women)",
                "result": "18:51.50",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Garriques, Lauren",
                  "year": "JR-3"
                }
              },
              {
                "event": "5000 Meters (Women)",
                "result": "19:22.33",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Chu, Katy",
                  "year": "SO-2"
                }
              },
              {
                "event": "10,000 Meters (Women)",
                "result": "37:54.39",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Hu, Claire",
                  "year": "SR-4"
                }
              },
              {
                "event": "10,000 Meters (Women)",
                "result": "38:10.84",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Dalfonzo, Sophia",
                  "year": "FR-1"
                }
              },
              {
                "event": "4 x 100 Relay (Women)",
                "result": "55.29",
                "rank": 2,
                "points": 8,
                "athletes": "Elam, Randall, Ceniceros, Robertson"
              },
              {
                "event": "4 x 400 Relay (Women)",
                "result": "4:10.91",
                "rank": 2,
                "points": 8,
                "athletes": "Randall, Garriques, Ceniceros, Trautner"
              },
              {
                "event": "Pole Vault (Women)",
                "result": "2.30m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Elam, Sophia",
                  "year": "FR-1"
                }
              },
              {
                "event": "Shot Put (Women)",
                "result": "10.56m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Robertson, Megan",
                  "year": "SO-2"
                }
              },
              {
                "event": "Shot Put (Women)",
                "result": "9.93m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Pan, Rucheng",
                  "year": "FR-1"
                }
              },
              {
                "event": "Discus (Women)",
                "result": "35.77m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Roberston, Megan",
                  "year": "SO-2"
                }
              },
              {
                "event": "Discus (Women)",
                "result": "27.18m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Hu, Emily",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Women)",
                "result": "43.90m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Roberston, Megan",
                  "year": "SO-2"
                }
              },
              {
                "event": "Hammer (Women)",
                "result": "24.02m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Pan, Rucheng",
                  "year": "FR-1"
                }
              }
            ]
          },
          {
            "teamName": "Caltech",
            "mOrF": false,
            "performances": [
              {
                "event": "400 Meters (Men)",
                "result": "51.48",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Saha, Josh",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Meters (Men)",
                "result": "51.50",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Jiang, Roy",
                  "year": "FR-1"
                }
              },
              {
                "event": "800 Meters (Men)",
                "result": "1:57.87",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Rodriguez, Kellen",
                  "year": "SR-4"
                }
              },
              {
                "event": "10,000 Meters (Men)",
                "result": "32:17.11",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Litvin, Joey",
                  "year": "SO-2"
                }
              },
              {
                "event": "400 Hurdles (Men)",
                "result": "56.30",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Shepard, Cason",
                  "year": "FR-1"
                }
              },
              {
                "event": "400 Hurdles (Men)",
                "result": "57.67",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Seebeck, Jerome",
                  "year": "SR-4"
                }
              },
              {
                "event": "400 Hurdles (Men)",
                "result": "58.67",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Saha, Josh",
                  "year": "FR-1"
                }
              },
              {
                "event": "4 x 400 Relay (Men)",
                "result": "3:30.57",
                "rank": 2,
                "points": 8,
                "athletes": "Jiang, Seebeck, Saha, Shepard"
              },
              {
                "event": "Shot Put (Men)",
                "result": "12.35m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Amelinez-Robles, Daniel",
                  "year": "FR-1"
                }
              },
              {
                "event": "Shot Put (Men)",
                "result": "10.58m",
                "rank": 3,
                "points": 6,
                "athlete": {
                  "name": "Johnson, Ezra",
                  "year": "SO-2"
                }
              },
              {
                "event": "Shot Put (Men)",
                "result": "10.58m",
                "rank": 4,
                "points": 5,
                "athlete": {
                  "name": "Lanzendorf, Lucas",
                  "year": "FR-1"
                }
              },
              {
                "event": "Discus (Men)",
                "result": "41.48m",
                "rank": 1,
                "points": 10,
                "athlete": {
                  "name": "Amelinez-Robles, Daniel",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Men)",
                "result": "39.96m",
                "rank": 2,
                "points": 8,
                "athlete": {
                  "name": "Amelinez-Robles, Daniel",
                  "year": "FR-1"
                }
              },
              {
                "event": "Hammer (Men)",
                "result": "24.72m",
                "rank": 5,
                "points": 4,
                "athlete": {
                  "name": "Lanzendorf, Lucas",
                  "year": "FR-1"
                }
              }
            ]
          }
        ],
        "duel": false
      };

    const numTeams=meet.teams.length;
    console.log(numTeams);
    
    const teamHeaderFactory=()=>{
        return(meet.teams.map(t=>{
            return (
                <th className="bg-blue-100 border text-left px-8 py-4"> {t.teamName}{t.mOrF ? " (women)":" (men)" }</th>
            )
        }))
    }

    const teamResults=(num)=>{
        return(meet.teams[num].performances.map(p=>{
            return(
                <tr>
                    <th className ="border-slate-500">{p.event}{p.result}{p.rank}{null==p.athlete ? p.athletes: p.athlete.name}</th>
                </tr>
            )
        }))
    }


    const hundredPerformances=()=>{
        return(meet.teams.map(t=>{
            return (t.performances.map(p=>{
               
                    return(
                        <tr>
                            <th className ="border-slate-500">{p.event}{p.result}{p.rank}{null==p.athlete ? p.athletes: p.athlete.name}</th>
                        </tr>
                    )}))
        }))
    }

    return(
        <table className="shadow-lg bg-white border border-slate-500">
            <tr>
                <th className="bg-blue-100 border text-left px-8 py-4">Event</th>
                {teamHeaderFactory()}
            </tr>
            <tr>
                <td rowSpan="3">100m</td>
                {hundredPerformances()}
            </tr>
            
            <tr>
                <td rowSpan="3">200m</td>
            </tr>
        </table>
    )

}
export default ResultTable;