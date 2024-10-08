const countryCodeMap = {
  "China": "CHN",
    "Croatia": "CRO",
    "Japan": "JPN",
    "Brazil": "BRA",
    "Sweden": "SWE",
};


const players= [
    {
      "ittfID": "1001",
      "playerGivenName": "WANG",
      "playerFamilyName": "chuquin",
      "country": "China",
      "countryCode": countryCodeMap["China"],
      "ranking": 1,
      "rankingPoints":7925
    },
    {
      "ittfID": "1002",
      "playerGivenName": "Fan",
      "playerFamilyName": "Zhendong",
      "country": "China",
      "countryCode": countryCodeMap["China"],
      "ranking": 2,
      "rankingPoints": 7500
    },
    {
      "ittfID": "1003",
      "playerGivenName": "Tomokazu",
      "playerFamilyName": "Harimoto",
      "country": "Japan",
      "countryCode": countryCodeMap["Japan"],
      "ranking": 3,
      "rankingPoints": 6500
    },
    {
      "ittfID": "1004",
      "playerGivenName": "Hugo",
      "playerFamilyName": "Calderano",
      "country": "Brazil",
      "countryCode": countryCodeMap["Brazil"],
      "ranking": 4,
      "rankingPoints": 6000
    },
    {
      "ittfID": "1005",
      "playerGivenName": "Truls",
      "playerFamilyName": "Möregårdh",
      "country": "Sweden",
      "countryCode": countryCodeMap["Sweden"],
      "ranking": 5,
      "rankingPoints": 5500
    }
  ]


exports.PlayerDetails=async (req, res) => {
    
    try {
      res.status(201).json({success:true,message:"Players get successfully",players});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };

  
exports.SinglePlayerDetails=async (req, res) => {
    const id = req.params.id;
      if (!id) {
        return res.status(404).json({ error: "PlayerID required" });
      }
    try {
        let filterdata=players.filter((d)=>(d.ittfID==id))
        console.log();
        
      res.status(201).json({success:true,message:`Player ${filterdata[0].playerGivenName} profile get successfully`,filterdata});
    } catch (err) {
      res.status(500).json({success:false,message:"server error"}); 
      
    }
  };