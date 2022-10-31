function ResultTable({meetResults}){

    const teams=["oxy","cms","pomona"];

    const meet ={
      "mensTeams": [
        {
          "teamName": "Caltech",
          "womens": false,
          "scoreMap": {
            "400 Meters (Men)": 11,
            "10,000 Meters (Men)": 10,
            "800 Meters (Men)": 10,
            "400 Hurdles (Men)": 24,
            "Discus (Men)": 10,
            "Hammer (Men)": 12,
            "4 x 400 Relay (Men)": 8,
            "Shot Put (Men)": 19
          },
          "totalPoints": 104,
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
        },
        {
          "teamName": "Chapman",
          "womens": false,
          "scoreMap": {
            "400 Meters (Men)": 18,
            "Pole Vault (Men)": 29,
            "100 Meters (Men)": 10,
            "Javelin (Men)": 33,
            "Shot Put (Men)": 10,
            "10,000 Meters (Men)": 8,
            "Triple Jump (Men)": 24,
            "High Jump (Men)": 18,
            "Long Jump (Men)": 24,
            "400 Hurdles (Men)": 9,
            "Discus (Men)": 8,
            "4 x 100 Relay (Men)": 10,
            "Hammer (Men)": 21,
            "3000 Steeplechase (Men)": 18,
            "200 Meters (Men)": 18,
            "4 x 400 Relay (Men)": 10,
            "High Hurdles (Men)": 24
          },
          "totalPoints": 292,
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
              "event": "High Hurdles (Men)",
              "result": "15.59",
              "rank": 1,
              "points": 10,
              "athlete": {
                "name": "Crumby, Michael",
                "year": "FR-1"
              }
            },
            {
              "event": "High Hurdles (Men)",
              "result": "16.96",
              "rank": 2,
              "points": 8,
              "athlete": {
                "name": "Becker, Matthew",
                "year": "FR-1"
              }
            },
            {
              "event": "High Hurdles (Men)",
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
        }
      ],
      "womensTeams": [
        {
          "teamName": "Chapman",
          "womens": true,
          "scoreMap": {
            "Triple Jump (Women)": 18,
            "800 Meters (Women)": 19,
            "Shot Put (Women)": 8,
            "Javelin (Women)": 18,
            "High Jump (Women)": 24,
            "High Hurdles (Women)": 24,
            "100 Meters (Women)": 29,
            "Long Jump (Women)": 24,
            "400 Meters (Women)": 27,
            "400 Hurdles (Women)": 18,
            "Pole Vault (Women)": 18,
            "Discus (Women)": 8,
            "4 x 100 Relay (Women)": 10,
            "4 x 400 Relay (Women)": 10,
            "200 Meters (Women)": 28,
            "1500 Meters (Women)": 14
          },
          "totalPoints": 297,
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
              "event": "High Hurdles (Women)",
              "result": "16.19",
              "rank": 1,
              "points": 10,
              "athlete": {
                "name": "Stiner, Khyra",
                "year": "FR-1"
              }
            },
            {
              "event": "High Hurdles (Women)",
              "result": "16.71",
              "rank": 2,
              "points": 8,
              "athlete": {
                "name": "Kodjababian, Ella",
                "year": "FR-1"
              }
            },
            {
              "event": "High Hurdles (Women)",
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
          "womens": true,
          "scoreMap": {
            "400 Meters (Women)": 11,
            "Pole Vault (Women)": 6,
            "Discus (Women)": 16,
            "10,000 Meters (Women)": 18,
            "800 Meters (Women)": 10,
            "5000 Meters (Women)": 29,
            "Shot Put (Women)": 16,
            "Hammer (Women)": 18,
            "4 x 100 Relay (Women)": 8,
            "4 x 400 Relay (Women)": 8,
            "200 Meters (Women)": 5,
            "1500 Meters (Women)": 10
          },
          "totalPoints": 155,
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
        }
      ],
      "duel": false
    }

    meet.mensTeams.sort((a,b)=>
      parseInt(b.totalPoints)-  parseInt(a.totalPoints)
    );

    meet.womensTeams.sort((a,b)=>
      parseInt(b.totalPoints)-  parseInt(a.totalPoints)
    );
    
    const teamHeaderFactory=(mens)=>{
      const gender=null;
      if(mens=="mens"){
        gender=meet.mensTeams
      }else{
        gender=meet.womensTeams
      }
        return(gender.map(t=>{
            return (
                <th className="bg-blue-100 text-xs border text-left px-8 py-4"> {t.teamName}{t.mOrF ? " (women)":" (men)" }</th>
            )
        }))
    }

    const eventPoints=(team)=>{
      return(team.scoreMap.map(e=>{
        return(
          <td>{e.value}</td>
        )
      }))
    }

    const getMenOrWomen=(scoreMap, event)=>{
      if(scoreMap[event+" (Men)"]==null && scoreMap[event+" (Women)"]==null){
        return "-";
      }else if(scoreMap[event+" (Men)"]!=null){
        return (scoreMap[event+" (Men)"]);
      }else if(scoreMap[event+" (Women)"]!=null) {
        return (scoreMap[event+" (Women)"]);
      }else{
        return "-"
      }
    }

    const events=["100 Meters","200 Meters","400 Meters","800 Meters","1500 Meters",
    "5000 Meters","10,000 Meters", "High Hurdles", "400 Hurdles", "3000 Steeple",
    "4 x 100 Relay","4 x 400 Relay","High Jump"  ,"Pole Vault","Long Jump","Triple Jump","Shot Put",
    "Discus","Hammer","Javelin" ];

    const eventResultFactory=(team)=>{
      return events.map(e=>{
        return(
          <td className="text-xs py-2 px-1 text-center tracking-tight" >{getMenOrWomen(team.scoreMap, e)}</td>
        )
      })
    }

    const filterPerformancesByEvent=(performances, event)=>{
      let result=[];
      for(let i=0; i<performances.length; i++){
        if(performances[i].event==event){
          result.push(performances[i]);
        }
      }
      return result;
    }

    const getMenOrWomenDetailed=(team, event)=>{
      let filteredPsMen=filterPerformancesByEvent(team.performances, event+" (Men)");
      let filteredPsWomen=filterPerformancesByEvent(team.performances, event+" (Women)");
      //console.log(filteredPsMen);
      //console.log(filteredPsWomen);

      if(team.scoreMap[event+" (Men)"]==null && team.scoreMap[event+" (Women)"]==null){
        return "-";
      }else if(team.scoreMap[event+" (Men)"]!=null){

        let result= (team.scoreMap[event+" (Men)"])+"~";

        for(let i=0; i<filteredPsMen.length; i++){
          if(i<=8){
            if(filteredPsMen[i].rank==1){
              filteredPsMen[i].rank='🥇';
            }
            else if(filteredPsMen[i].rank==2){
              filteredPsMen[i].rank='🥈';
            }
            else if(filteredPsMen[i].rank==3){
              filteredPsMen[i].rank='🥉';
            }else{
              filteredPsMen[i].rank=filteredPsMen[i].rank+".";
            }
            result+=filteredPsMen[i].rank+" "+filteredPsMen[i].result+"~";
          }else{
            break;
          }
        }

        return result;

      }else if(team.scoreMap[event+" (Women)"]!=null) {

        let result= (team.scoreMap[event+" (Women)"])+"~";

        for(let i=0; i<filteredPsWomen.length; i++){
          if(i<=8){
            if(filteredPsWomen[i].rank==1){
              filteredPsWomen[i].rank='🥇';
            }
            else if(filteredPsMen[i].rank==2){
              filteredPsWomen[i].rank='🥈';
            }
            else if(filteredPsMen[i].rank==3){
              filteredPsWomen[i].rank='🥉';
            }else{
              filteredPsWomen[i].rank=filteredPsWomen[i].rank+".";
            }
            result+=filteredPsWomen[i].rank+" "+filteredPsWomen[i].result+"~";
          }else{
            break;
          }
        }

        return result;
      }else{
        return "-"
      }
    }

    const eventResultFactoryDetailed=(team)=>{
      return events.map(e=>{
        let results= getMenOrWomenDetailed(team, e);
        let resultArray= results.split("~");
        return(
          <td className="text-xs py-2 px-0.5 text-left justify-start truncate" >
            <div className="group flex flex-row relative">
              <h5 className=" text-opacity-5 text-xl font-bold text-slate-500 absolute top-0 left-3 right-0
              group-hover:text-opacity-100 p-0">{getMenOrWomen(team.scoreMap, e)}</h5>
            <div className="flex flex-col ">
             
              <ul className="group-hover:opacity-10">
                <li className="z-50">{resultArray[1]}</li>
                <li className="z-50">{resultArray[2]}</li>
                <li className="z-50">{resultArray[3]}</li>
              </ul>

            </div>
            </div>
          </td>
        )
      })
    }

    const eventHeaderFactory=()=>{
      return events.map(e=>{
        return(
          <th className="text-xs py-2 px-0 tracking-tighter" >{e}</th>
        )
      })
    }

    const getMedals=(t)=>{
    if(t===meet.mensTeams[0] || t===meet.womensTeams[0]){
      return(
        <td className ="max-w-min flex-none text-xs even:bg-slate-700 odd:bg-slate-600 text-center py-2 px-1">
          <div className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 font-bold rounded-full px-1 py-2 w-8">
            {t.totalPoints}
          </div>
        </td>
      )
    }else if(t===meet.mensTeams[1]|| t===meet.womensTeams[1]){
      return(
        <td className ="max-w-min flex-none text-xs text-center even:bg-slate-700 odd:bg-slate-600  py-2 px-1">
          <div className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 font-bold rounded-full px-1 py-2 w-8">
            {t.totalPoints}
          </div>
        </td>
      )
    }else if(t===meet.mensTeams[2] || t===meet.womensTeams[2]){
      return(
        <td className ="max-w-min flex-none text-xs text-center even:bg-slate-700  py-2 px-1">
          <div className="bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 font-bold rounded-full px-1 py-2 w-8">
            {t.totalPoints}
          </div>
        </td>
      )
    }
  }

  const teamResultsDetailed=()=>{
    return(meet.mensTeams.map(t=>{
     
        return(
            <tr className="even:bg-slate-200 odd:bg-white align-top">
                <th className ="text-xs  bg-slate-700 text-white py-2 px-0">{t.teamName}
                  <p className="text-xs font-light text-slate-400">{t.womens ? " (women)":" (men)" }</p>
                </th>
                {getMedals(t)}
                {/* <td className ="sm:text-xs py-2 px-1">{t.totalPoints}</td> */}
               
                {/* <td>{getMenOrWomen(t.scoreMap,"400 Meters")}</td> */}
                {eventResultFactoryDetailed(t)}
             
                
            </tr>
        )
    }))
}

    

    const teamResults=()=>{
        return(meet.mensTeams.map(t=>{
         
            return(
                <tr className="even:bg-slate-200 odd:bg-white">
                    <th className =" text-sm bg-slate-700 text-white py-2 px-1">{t.teamName}
                      <p className=" text-sm  font-light bg-slate-700 text-slate-400">{t.womens ? " (women)":" (men)" }</p>
                    </th>
                    {getMedals(t)}
                    {/* <td className ="sm:text-xs py-2 px-1">{t.totalPoints}</td> */}
                   
                    {/* <td>{getMenOrWomen(t.scoreMap,"400 Meters")}</td> */}
                    {eventResultFactory(t)}
                 
                    
                </tr>
            )
        }))
    }

  

    const teamWResults=()=>{
      return(meet.womensTeams.map(t=>{
          return(
              <tr className="even:bg-slate-200 odd:bg-white">
                  <th className =" text-sm  bg-slate-700 text-white  py-2 px-1">{t.teamName}
                    <p className=" text-sm  font-light text-slate-400">{t.womens ? " (women)":" (men)" }</p>
                  </th>
                  {getMedals(t)}
                  {/* <td className ="sm:text-xs py-2 px-1">{t.totalPoints}</td> */}
                 
                  {/* <td>{getMenOrWomen(t.scoreMap,"400 Meters")}</td> */}
                  {eventResultFactory(t)}
               
                  
              </tr>
          )
      }))
  }


    // const hundredPerformances=()=>{
    //     return(meet.teams.map(t=>{
    //         return (t.performances.map(p=>{
               
    //                 return(
    //                     <tr>
    //                         <th className ="border-slate-500">{p.event}{p.result}{p.rank}{null==p.athlete ? p.athletes: p.athlete.name}</th>
    //                     </tr>
    //                 )}))
    //     }))
    // }

    return(
      <div className="flex flex-col m-2 spacing-y-4">
        <table className="shadow-lg bg-white border border-slate-500 table-auto rounded-sm mb-4">
          <tbody>

              <tr className="bg-slate-700 text-slate-200">
                <th className="text-sm">Teams</th>
                <th className="text-sm ">Total Points</th>
                {eventHeaderFactory()}
              </tr>
            
              <tr className="bg-slate-600 text-slate-200">
                <th colSpan="22">Men</th>
              </tr>
              {teamResults()}
              <tr className="bg-slate-600 text-slate-200">
                <th colSpan="22">Women</th>
              </tr>
             
              {teamWResults()}
             
          </tbody>  
        </table>

        <table className="shadow-lg bg-white border border-slate-500 table-fixed rounded-sm mb-4">
          <tbody className="text-sm tracking-tighter">

              <tr className="bg-slate-700 text-slate-200">
                <th >Teams</th>
                <th className="w-8">Total Points</th>
                {eventHeaderFactory()}
              </tr>
            
              <tr className="bg-slate-600 text-slate-200">
                <th className= "bg-slate-700" colSpan="2"></th>
                <th colSpan="20">Men</th>
              </tr>
              {teamResultsDetailed()}
             
              <tr className="bg-slate-600 text-slate-200">
                <th className= "bg-slate-700" colSpan="2"></th>
                <th colSpan="22">Women</th>
              </tr> 
             
                {teamWResults()}
             
          </tbody>  
        </table>

        
      </div>
    )

}
export default ResultTable;