const { connectToCosmos } = require("../../database/cosmos");
let cosmosContainer;
connectToCosmos().then(({ container }) => {
  cosmosContainer = container;
  console.log('databaseconnection:'+"successfully");
}).catch((err)=>{console.log(err.message);
});

const newUser={
    "id": "416968",
    "ittfid": "416968",
    "OrganizationId": "ITA",
    "OrganizationName": "Organization 80",
    "Gender": "F",
    "Nationality": "YEM",
    "NationalityName": "Yemen",
    "IsActive": true,
    "birthDate": "1994-09-28T01:13:49.1160454Z",
    "deathdate": null,
    "address1": "123 Main St",
    "address2": "Apt 4B",
    "address3": null,
    "city": "Anytown",
    "Residing_country_code": "USA",
    "Residing_country_name": "United States",
    "PassportDetails": {
        "Passport_fullname": "John Doe",
        "passport_no": "6265981",
        "passport_issue_date": "2019-09-28T01:13:49.1162414Z",
        "passport_expiry_date": "2029-09-28T01:13:49.1162534Z",
        "passport_type": "Regular"
    },
    "EmergencyContacts": [
        {
            "givenName": "Jane",
            "familyName": "Doe"
        }
    ],
    "Default_Language_Code": "en-US",
    "Default_LanguageName": "English",
    "State": "CA",
    "IsDeleted": false,
    "OfficeLocation": "Main Office",
    "passport_photo": "http://example.com/photo.jpg",
    "StateCode": "CA",
    "PhotoL": "http://example.com/photoL.jpg",
    "PhotoR": "http://example.com/photoR.jpg",
    "ContactDetails": {
        "ContactNumber": "555-1234",
        "ContactPriority": "High",
        "ContactnoMediumType": "Mobile",
        "ContactValue": "john.doe@example.com"
    },
    "EmailDetails": [
        {
            "Email": "player314@example.com",
            "EmailCategory": "Personal",
            "EmailPriority": "1"
        }
    ],
    "DocumentDetails": [
        {
            "DocumentType": "Passport",
            "DocumentTitle": "John Doe Passport",
            "DocumentURL": "http://example.com/passport.pdf"
        }
    ],
    "JoinedYear": "2024",
    "GrandFatherEligibility": true,
    "OlympicEligibility": true,
    "TeamEligibility": false,
    "WorldTitleEligibility": false,
    "WTTEligibility": true,
    "ActiveFrom": "2024-09-28T01:13:49.1167541Z",
    "COVIDInformation": {
        "COVIDVaccinationStatus": "Fully Vaccinated",
        "COVIDNoOfVaccinations": 2,
        "COVIDDateOfVaccination": "2024-03-28T01:13:49.1168069Z",
        "COVIDVaccinationCertificate": "http://example.com/covid_certificate.pdf"
    },
    "PhotoUrl": "http://example.com/player.jpg",
    "PhotoType": "Profile",
    "CurrentOutOfCompetitionStartDate": null,
    "ProtectedRankingInfo": {
        "ProtectedRanking": 1200,
        "ProtectedRankingActivationDate": "2024-08-28T01:13:49.1169099Z",
        "ProtectedRankingPeriodInMonths": 12,
        "ProtectedRankingNoOfEvents": 5,
        "ProtectedRankingRemainingNoOfMonths": 11,
        "ProtectedRankingPoints": 150
    },
    "PenaltyInfo": {
        "NumberOfZeroPointPenaltiesIncurred": 1,
        "PenaltyPointInCurrentRankingWeek": 0,
        "PenaltyPointInCurrentRankingMonth": 5,
        "PenaltyPointInCurrentRankingYear": 15
    },
    "Hand": "Right",
    "Grip": "Shakehand",
    "ZeroPointPenaltyExpiryDate": "2025-03-28T01:13:49.117054Z",
    "PlayingStyle": "Attacker",
    "ShortBio": "Professional table tennis player.",
    "IsParaPlayer": false,
    "initials": "JD",
    "givenname": "John",
    "familyname": "Doe",
    "Language_Code": "en",
    "Language": "English",
    "ProfileTypes": [
        {
            "ProfileType": "Competitive"
        }
    ],

}

exports.playerprofileadded= async (req, res) => {
 
try {
    
             const { resource: createdItem } = await cosmosContainer.items.create(newUser);
                return res.status(201).json({
                    success: true,
                    message: 'Playerprofile add successfully',
                   createdItem
                });

  
} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message || 'Internal Server Error',
    });
}
    
  }


exports.allplayerprofile=async(req,res)=>{
    try {
        const { resources: items } = await cosmosContainer.items.query("SELECT * FROM c").fetchAll();
        if (items.length === 0) {
          return res.status(404).json({ error: "players not found" });
        }
        res.status(200).json({success:true,message:"All playersprofiles get successfully",count:items.length,data:items});
      } catch (err) {
        res.status(500).json({ message:err.body?.code,error: err.message });
      }
}


exports.getsingleplayerprofile= async (req, res) => {
    const itemId = req.params.id;

      
    if (!itemId) {
        return res.status(400).json("ID player is required");
    }
  try {
      const { resource: item } = await cosmosContainer.item(itemId,itemId).read();
     
      if (!item) {
        return res.status(404).json({ error: "player not found" });}
     
      res.status(200).json({
        success:true,
        message:"playerprofile  get successfully",
        data:item
        });
    } catch (err) {
        console.log(err);
        
      res.status(404).json({message:err.body?.code, error: "Item not found" });
    }
  };
  

//   required fields
// profileimage
//  flag,
//  memberAssociation
//  ,age,
//  EmergencyContacts.
//  EmergencyContactsNumber,
//   whatsapp,
//  agentDetails,
//   wechat,
//   nickname,
//   educationLevel
//  habits
//  favoriteMusic
// league/ountry
// academy
// coachName
// currentSponsor
// uniqueFacts
// playingEquipment
    