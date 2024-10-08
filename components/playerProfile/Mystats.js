const data=[{
    "playerProfile": {
        "ittfID": "1001",
        "playerGivenName": "WANG",
        "playerFamilyName": "Chuquin",
        "country": "China",
        "countryCode": "CHN",
        "age": 28,
        "nationality": "Chinese", 
        "memberAssociation": "Chinese Table Tennis Association",
        "dateOfBirth":new Date("1995-06-15").toJSON(),
        "gender": "Male",
        "playingStyle": "Right-handed",
        "profilePicture": "https://example.com/images/player_wang_chuquin.jpg",
        "flag": "https://flagcdn.com/w320/cn.png", 
        "ranking": {
            "currentRanking": 1,
            "rankingPoints": 7925,
            "lastUpdated": new Date("2024-05-01").toJSON()
        }
    },

    "rankChanges": {
        "currentRanking": 35,  
        "rankHistory": [
            {
                "week": 1,
                "date":new Date("2024-01-01").toJSON(),
                "rank": 25,
                "points": 7925,
                "year": 2024,
                "category": "ms" 
            },
            {
                "week": 26,
                "date": new Date("2023-06-01").toJSON(),
                "rank": 18,
                "points": 8150,
                "year": 2023,
                "category": "ms" 
            },
            {
                "week": 48,
                "date": new Date("2022-12-01").toJSON(),
                "rank": 12,
                "points": 8500,
                "year": 2022,
                "category": "ms" 
            },
            {
                "week": 22,
                "date":new Date("2022-06-01").toJSON(),
                "rank": 20,
                "points": 8300,
                "year": 2022,
                "category": "ms" 
            }
        ]
    },




    "careerGrowth": {
        "startYear": 2015,
        "currentYearWinLoss": {
            "wins": 25,
            "losses": 10,
            "category": "ms",
            "year": 2024
        },
            "careerWinLoss": { 
                "yearsActive": [2015, 2024],
                "yearlyStats": [
                    {
                        "year": 2015,
                        "wins": 20,
                        "losses": 10,
                        "category": "ms" 
                    },
                    {
                        "year": 2016,
                        "wins": 25,
                        "losses": 12,
                        "category": "ms" 
                    },
                    {
                        "year": 2017,
                        "wins": 30,
                        "losses": 8,
                        "category": "ms" 
                    },
                    {
                        "year": 2018,
                        "wins": 28,
                        "losses": 12,
                        "category": "ms" 
                    },
                    {
                        "year": 2019,
                        "wins": 32,
                        "losses": 9,
                        "category": "ms" 
                    },
                    {
                        "year": 2020,
                        "wins": 35,
                        "losses": 15,
                        "category": "ms" 
                    },
                    {
                        "year": 2021,
                        "wins": 40,
                        "losses": 10,
                        "category": "ms" 
                    },
                    {
                        "year": 2022,
                        "wins": 38,
                        "losses": 13,
                        "category": "ms" 
                    },
                    {
                        "year": 2023,
                        "wins": 42,
                        "losses": 9,
                        "category": "ms" 
                    },
                    {
                        "year": 2024,
                        "wins": 30,
                        "losses": 8,
                        "category": "ms" 
                    },
                    {
                        "year": 2024,
                        "wins": 30,
                        "losses": 8,
                        "category": "md" 
                    },
                    {
                        "year": 2024,
                        "wins": 30,
                        "losses": 8,
                        "category": "md" 
                    }
                ]
            }
        
        
    },
 

    "winLossData": {
        "totalMatches": 120,
        "wins": 92,
        "losses": 28,
        "winLossByYear": [
            {
                "year": 2023,
                "wins": 30,
                "losses": 10,
                "category": "ms" 
            },
            {
                "year": 2022,
                "wins": 28,
                "losses": 12,
                "category": "ms" 
            },
            {
                "year": 2021,
                "wins": 25,
                "losses": 8,
                "category": "md" 
            },
            {
                "year": 2020,
                "wins": 9,
                "losses": 6,
                "category": "md" 
            }
        ],
    },


 
    "worldRankingPointsBreakdown": {
        "totalPoints": 25000,
        "breakdown": [
            {
                "tournament": "WTT Star Contender",
                "year": 2023,
                "pointsEarned": 5000,
                "eventname": "2024 Singapore Smash, Singapore (SGP)", 
                "expiresOn": new Date("2024-11-30").toJSON(),
                "position": "Winner",
                "week": 1,
                "category": "md" 
            },
            {
                "tournament": "WTT Grand Smash",
                "year": 2023,
                "pointsEarned": 4000,
                "eventname": "2023 Grand Smash, Doha (QAT)",  
                "expiresOn":new Date("2024-11-30").toJSON(),
                "position": "Runner-up",
                "week": 5,
                "category": "md" 
            },
            {
                "tournament": "WTT Champions",
                "year": 2023,
                "pointsEarned": 3000,
                "eventname": "2023 Champions, Tokyo (JPN)",  
                "expiresOn":new Date("2024-10-01").toJSON(),
                "position": "Semi-finalist",
                "week": 10,
                "category": "ms" 
            },
            {
                "tournament": "Asian Championships",
                "year": 2022,
                "pointsEarned": 2500,
                "eventname": "2022 Asian Championships, Bangkok (THA)",
                "expiresOn":new Date("2023-09-15").toJSON(),
                "position": "Finalist",
                "week": 15,
                "category": "ms" 
            }
        ]
    }
},
]

exports.playerstats = (req, res) => {
    const ittfID = req.query.ittfID;
    const field = req.query.field;
    const category = req.query.category; 
    const year = parseInt(req.query.year); 

    if (!ittfID) {
        return res.status(400).json({ message: 'ittfID player is required' });
    }

    const player = data.find(p => p.playerProfile.ittfID === ittfID);

    if (!player) {
        return res.status(404).json({ message: 'Player not found' });
    }

    const response = {};

    
    if (field) {
        switch (field.trim().toLowerCase()) {
            case 'playerprofile':
                response.playerProfile = player.playerProfile;
                break;
            case 'careergrowth':
                if (year) {
                    response.careerGrowth = player.careerGrowth.careerWinLoss.yearlyStats
                        .filter(stat => (stat.year === year) && (!category || stat.category.toLowerCase() === category.toLowerCase())) || {};
                } else {
                    response.careerGrowth = player.careerGrowth;
                }
                break;
                case 'winlossdata':
                    if (year) {
                        response.winLossData = player.winLossData.winLossByYear
                            .filter(rank => (rank.year === year) && (!category || rank.category.toLowerCase() === category.toLowerCase())) || {};
                    } else {
                        response.winLossData = player.winLossData;
                    }
                    break;
            case 'rankchanges':
                if (year) {
                    response.rankChanges = player.rankChanges.rankHistory
                        .filter(rank => (rank.year === year) && (!category || rank.category.toLowerCase() === category.toLowerCase())) || {};
                } else {
                    response.rankChanges = player.rankChanges;
                }
                break;
            case 'worldrankingpointsbreakdown':
                if (year) {
                    response.worldRankingPointsBreakdown = player.worldRankingPointsBreakdown.breakdown
                        .filter(tournament => (tournament.year === year) && (!category || tournament.category.toLowerCase() === category.toLowerCase()));
                } else {
                    response.worldRankingPointsBreakdown = player.worldRankingPointsBreakdown;
                }
                break;
            default:
                return res.status(400).json({ message: 'Invalid field provided' });
        }
    }

  
    if (!field || Object.keys(response).length === 0) {
        return res.json(player);
    }

    return res.json(response);
};
