const express = require('express');
const { PlayerDetails, SinglePlayerDetails } = require('../components/PlayersComponent');
const { ScheduleDetails, SchedulePlayerDetails } = require('../components/ScheduleComponent');
const { EventDetails } = require('../components/EventNews');
const { LiveDetails } = require('../components/LivescoreComponet');
const { playerprofile } = require('../components/playerProfile/Myprofile');
const { playerstats } = require('../components/playerProfile/Mystats');
const { playerprofileadded, allplayerprofile, getsingleplayerprofile } = require('../components/PlayerCosmos/Playerprofileadd');
const router = express.Router();

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Get all players
 *     description: Retrieve a list of all players.
 *     responses:
 *       200:
 *         description: A list of players.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/players', PlayerDetails);

/**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Get player by ID
 *     description: Retrieve details of a single player by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player's ID.
 *     responses:
 *       200:
 *         description: A single player's data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/players/:id', SinglePlayerDetails);

/**
 * @swagger
 * /api/Schedule:
 *   get:
 *     summary: Get all schedules
 *     description: Retrieve all scheduled events.
 *     responses:
 *       200:
 *         description: A list of schedules.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/Schedule', ScheduleDetails);

/**
 * @swagger
 * /api/Schedule/{id}:
 *   get:
 *     summary: Get schedule by player ID
 *     description: Retrieve details of a specific schedule by player ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The player ID.
 *     responses:
 *       200:
 *         description: A single schedule's data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/Schedule/:id', SchedulePlayerDetails);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve all event news.
 *     responses:
 *       200:
 *         description: A list of events.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/events', EventDetails);

/**
 * @swagger
 * /api/liveScore:
 *   get:
 *     summary: Get live scores
 *     description: Retrieve live scores for events.
 *     responses:
 *       200:
 *         description: A list of live scores.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/liveScore', LiveDetails);




router.get("/playerstats",playerstats)



router.post("/playersadd",playerprofileadded)

/**
 * @swagger
 * tags:
 *   name: PlayersProfiles 
 *   description: The Player Profiles API Integrated with Cosmos DB
 */

/**
 * @swagger
 * /api/cosmosdb/playersprofiles:
 *   get:
 *     summary: Get all player profiles
 *     tags: [PlayersProfiles]
 *     responses:
 *       200:
 *         description: Successfully retrieved all player profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 count:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       ittfid:
 *                         type: string
 *                       # Add more properties as per your model
 *       404:
 *         description: No players found
 *       500:
 *         description: Server error
 */
router.get("/cosmosdb/playersprofiles", allplayerprofile);

/**
 * @swagger
 * /api/cosmosdb/playersprofiles/{id}:
 *   get:
 *     summary: Get a single player profile
 *     tags: [PlayersProfiles]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the player profile to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the player profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     ittfid:
 *                       type: string
 *                     # Add more properties as per your model
 *       400:
 *         description: ID player is required
 *       404:
 *         description: Player not found
 */
router.get('/cosmosdb/playersprofiles/:id', getsingleplayerprofile);





























/**
 *  @swagger
 *  tags:
 *    name: PlayerProfile
 *    description: playerprofile apis
 */
/**



/**
 * @swagger
 * /api/playerprofile:
 *   get:
 *     summary: Get player profile information
 *     tags: [PlayerProfile]
 *     description: Provide the ITTF ID to retrieve a specific player's profile, or get all player profiles if no ITTF ID is provided., with optional filters for country and specific data types.
 *     parameters:
 *       - in: query
 *         name: ittfID
 *         required: false
 *         schema:
 *           type: string
 *         description: Provide the ITTF ID to retrieve a specific player's profile, or get all player profiles if no ITTF ID is provided.
 *       - in: query
 *         name: field
 *         required: false
 *         schema:
 *           type: string
 *         description: Comma-separated values of requested data types (playerProfile, contacts, personalDetails, sportsDetails) (optional)
 *     responses:
 *       200:
 *         description: Player profile data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 playerProfile:
 *                   type: object
 *                   description: Player profile details
 *                 contacts:
 *                   type: object
 *                   description: Player's contact information
 *                 personalDetails:
 *                   type: object
 *                   description: Personal details of the player
 *                 sportsDetails:
 *                   type: object
 *                   description: Sports-related information of the player
 *       400:
 *         description: ITTF ID is required
 *       404:
 *         description: Player not found or country mismatch
 */



router.get("/playerprofile",playerprofile)


/**
 * @swagger
 * /api/playerstats:
 *   get:
 *     summary: Get player statistics
 *     tags: [PlayerProfile]
 *     description: Retrieve detailed player statistics by ITTF ID, with optional filters for year, category, and data type (like career growth, rank changes, world ranking points breakdown, etc.).
 *                  If `ittfID` is not provided, you will get an error message indicating the player is required.
 *     parameters:
 *       - in: query
 *         name: ittfID
 *         required: true
 *         schema:
 *           type: string
 *         description: ITTF ID of the player (required).
 *       - in: query
 *         name: field
 *         schema:
 *           type: string
 *           enum: [playerProfile, careerGrowth, rankChanges,winLossData, worldRankingPointsBreakdown]
 *         description: The type of data you want to retrieve (optional).
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: The category of the player's stats you want to filter by (optional).
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *         description: Year for filtering career growth, rank changes, or world ranking points breakdown (optional).
 *     responses:
 *       200:
 *         description: Successful response with player statistics.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 playerProfile:
 *                   type: object
 *                   description: Player profile information.
 *                 careerGrowth:
 *                   type: object
 *                   description: Career growth statistics.
 *                 rankChanges:
 *                   type: object
 *                   description: Ranking changes over time.
 *                 worldRankingPointsBreakdown:
 *                   type: object
 *                   description: Breakdown of world ranking points.
 *       400:
 *         description: Bad request. ITTF ID is required or invalid field provided.
 *       404:
 *         description: Player not found.
 */



module.exports = router;
