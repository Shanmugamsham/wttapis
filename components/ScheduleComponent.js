const countryCodeMap = {
  "China": "CHN",
  "Croatia": "CRO",
};


const Schedule = [{
  "ittfScheduleID": "SCH002",
  "eventName": "WTT Feeder series",
  "image": "https://example.com/images/WTT Feeder series.jpg",
  "dates": {
    "startDate": new Date("May 15, 2024").toJSON(),
    "endDate": new Date("May 20, 2024").toJSON(),
    "week": `${new Date("May 15, 2024").toJSON()} - ${new Date("May 20, 2024").toJSON()}`
},
  "players": {
      "ittfID": "1001",
      "playerGivenName": "WANG",
      "playerFamilyName": "chuquin",
      "country": "China",
      "countryCode": countryCodeMap["China"],
      "ranking": 1,
      "rankingPoints": 7925,
      "matches": {
          "matchID": "M001",
          "opponent": {
              "ittfID": "1002",
              "name": "Fan Zhendong",
              "country": "China",
              "countryCode": countryCodeMap["China"]
          },
          "date": new Date("May 15, 2024").toJSON(),
          "time": "15:15",
          "result": "3-2",
          "status": "Running",
          "stage": "R32",
          "venue": "Infinity Arena"
      }
  }
},
{
  "ittfScheduleID": "SCH003",
  "eventName": "WTT Feeder series",
  "image": "https://example.com/images/WTT Feeder series.jpg",
  "dates": {
      "startDate": new Date("May 21, 2024").toJSON(),
      "endDate": new Date("May 26, 2024").toJSON(),
      "week": `${new Date("May 21, 2024").toJSON()} - ${new Date("May 26, 2024").toJSON()}`
  },
  "players": {
      "ittfID": "1001",
      "playerGivenName": "WANG",
      "playerFamilyName": "chuquin",
      "country": "China",
      "countryCode": countryCodeMap["China"],
      "ranking": 1,
      "rankingPoints": 7925,
      "matches": {
          "matchID": "M001",
          "opponent": {
              "ittfID": "23456",
              "name": "Frane Kojic",
              "country": "Croatia",
              "countryCode": countryCodeMap["CRO"]
          },
          "date": new Date("May 21, 2024").toJSON(),
          "time": "15:15",
          "result": "3-2",
          "status": "Pending",
          "stage": "R64",
          "venue": "Infinity Arena"
      }
  }
},
{
  "ittfScheduleID": "SCH004",
  "eventName": "WTT Feeder series",
  "image": "https://example.com/images/WTT Feeder series.jpg",
  "dates": {
      "startDate": new Date("May 27, 2024").toJSON(),
      "endDate": new Date("May 21, 2024").toJSON(),
      "week": "27 May - 21 May 2024"
  },
  "players": {
      "ittfID": "1001",
      "playerGivenName": "WANG",
      "playerFamilyName": "chuquin",
      "country": "China",
      "countryCode": countryCodeMap["China"],
      "ranking": 1,
      "rankingPoints": 7925,
      "matches": {
          "matchID": "M001",
          "opponent": {
              "ittfID": "1003",
              "name": "Calderano",
              "country": "China",
              "countryCode": countryCodeMap["China"],
          },
          "date": new Date("May 27, 2024").toJSON(),
          "time": "15:15",
          "result": "3-2",
          "status": "Pending",
          "stage": "R64",
          "venue": "Infinity Arena"
      }
  }
},
]



  
exports.ScheduleDetails=async (req, res) => {
    
    try {
      res.status(201).json({success:true,message:"matchschedule get successfully",Schedule});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };

  
  
exports.SchedulePlayerDetails=async (req, res) => {
    const id = req.params.id;
      if (!id) {
        return res.status(404).json({ error: "PlayerID required" });
      }
    try {
        let filterdata=Schedule.filter((d)=>(d.players.ittfID==id))
        console.log(filterdata);
        
      res.status(201).json({success:true,message:`Player ${filterdata[0].players.playerGivenName} matchschedule get successfully`,
        matchcount:filterdata.length,
        filterdata});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };