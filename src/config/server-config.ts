const COLLECTIONS = {
    MOVIES: {
        collectionName: "movies",
        keyName: "movieId",
        Indexes: { //docs/indexing/mongodb-atlas.md
            INDEX_MOVIES_QUICK_TEXT_SEARCH: "index_movies_quick_text_search",
            INDEX_MOVIES_BASIC_SEARCH: "index_movies_basic_search"
        }
    },
    MASTER_CATEGORIES: {
        collectionName: "masterCategories",
        keyName: "_id",
        Indexes: { //docs/indexing/mongodb-atlas.md
            INDEX_MASTER_CATEGORIES: "index_master_categories"
        }
    },

};

const getServerConfig = () => {
    const dbName = process.env.MONGODB_DB_NAME || "dbSpeedMernDemo";

    return {
        httpServer: {
            apiPrefix: "/api",
            port: process.env.PORT || 3001,
        },
        mongoDb: {
            connectionUrl: process.env.MONGODB_URL || "",// || `mongodb://localhost:27017/${dbName}`
            dbName: dbName
        },
        redis: {
            connectionUrl: process.env.REDIS_URL || ""
        },
        seeder: {
            collectionsPath: "./data/collections"
        }
    };
};


export {
    getServerConfig,
    COLLECTIONS
};

