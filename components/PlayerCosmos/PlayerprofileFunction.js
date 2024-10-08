const { connectToCosmos } = require("../../database/cosmos");
let cosmosContainer;
connectToCosmos().then(({ container }) => {
  cosmosContainer = container;
  console.log('databaseconnection:'+"successfully");
}).catch((err)=>{console.log(err.message);
});

exports.allplayerprofile = async function (context, req) {
    try {
        const { resources: items } = await container.items.query("SELECT * FROM c").fetchAll();
        
        if (items.length === 0) {
            context.res = {
                status: 404,
                body: { error: "Players not found" }
            };
            return;
        }
        
        context.res = {
            status: 200,
            body: {
                success: true,
                message: "All items retrieved successfully",
                data: items
            }
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: { message: err.body.code, error: err.message }
        };
    }
};

exports.singleplayerprofile = async function (context, req) {
    const itemId = req.params.id;

    if (!itemId) {
        context.res = {
            status: 400,
            body: { error: "ID player is required" }
        };
        return;
    }

    try {
        const { resource: item } = await container.item(itemId, itemId).read();
        context.res = {
            status: 200,
            body: {
                success: true,
                message: "Player data retrieved successfully",
                item
            }
        };
    } catch (err) {
        context.res = {
            status: 404,
            body: { message: err.body.code, error: "Item not found" }
        };
    }
};


