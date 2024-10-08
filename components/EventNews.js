const countryCodeMap = {
  "China": "CHN",
    "Croatia": "CRO",
    "Japan": "JPN",
    "Brazil": "BRA",
    "Sweden": "SWE",
    "Turkey": "TUR",
};

const events=[
    {
      "eventID": "E001",
      "eventName": "saudi smash 2024",
      "location": "China",
      "countryCode": countryCodeMap["China"],
      "dates": {
        "startDate": new Date("May 1, 2024").toJSON(),
        "endDate": new Date("May 11, 2024").toJSON(),
      },
      "image": "https://example.com/images/saudi smash.jpg",
      "link":"https://www.saudismash.com/home",
      "prizeMoney": "2,000,0000"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "China",
        "countryCode": countryCodeMap["China"],
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": new Date("May 12, 2024").toJSON(),
          "endDate": new Date("May 15, 2024").toJSON(),
        },
        "prizeMoney": "22,500"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "China",
        "countryCode": countryCodeMap["China"],
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": new Date("May 11, 2024").toJSON(),
          "endDate": new Date("May 17, 2024").toJSON(),
        },
        "prizeMoney": "22,500"
      
    },{
        "eventName": "WTT Feeder series",
        "location": "Turkey",
        "countryCode": countryCodeMap["Turkey"],
        "image": "https://example.com/images/wtt_feeder_series.jpg",
        "dates": {
          "startDate": new Date("May 11, 2024").toJSON(),
          "endDate": new Date("May 17, 2024").toJSON(),
        },
        "prizeMoney": "22,500"
      
    }]

    exports.EventDetails=async (req, res) => {
    
        try {
          res.status(201).json({success:true,message:"event and news datas get successfully",events});
        } catch (err) {
          res.status(500).json({success:false,message:"server error"}); 
          
        }
      };
    