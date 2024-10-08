 
 
 const liveScores = [
  {
    "matchID": "M001",
    "eventName": " WTT Youth Contender Spa 2024",
    "image": "https://example.com/images/WTT_Youth_Contender.jpg",
    "dates": {
      "startDate": new Date("APR 22, 2024").toJSON(),
      "endDate": new Date("APR 28, 2024").toJSON(),
    },
    "status": "Ongoing", 
    "prizeMoney": "1000", 
    "livePlatforms": ["YouTube"] 
  }, {
    "matchID": "M002",
    "eventName": "WTT Feeder series",
    "image": "https://example.com/images/WTT Feeder series.jpg",
    "dates": {
      "startDate": new Date("APR 22, 2024").toJSON(),
      "endDate": new Date("APR 30, 2024").toJSON(),
    },
    "status": "pending", 
    "prizeMoney": "1000", 
    "livePlatforms": ["YouTube","Twitch"] 
  }
];


exports.LiveDetails=async (req, res) => {
    
    try {
      res.status(201).json({success:true,message:"Livedata get successfully",liveScores});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };
