using MongoDB.Bson;
using MongoDB.Driver;

using DukeVineland.Dtos.Configuration;

namespace DukeVineland.Repositories
{
    public class MongoBooksRepository : IMongoBooksRepository
    {
        public string Name => "MongoBooks: " + _collection.CollectionNamespace.CollectionName;

        MongoClient _client;
        IMongoDatabase _database;
        IMongoCollection<BsonDocument> _collection;

        public MongoBooksRepository(MongoDatabaseConfig config)
        {
            // Initialize the repository with the provided connection strings

            _client = new MongoClient(config.DatabaseConnectionString);
            _database = _client.GetDatabase("books_read");
            _collection = _database.GetCollection<BsonDocument>("books");

            //var list = await collection.Find(x => x.nationality == "Italy")
            //    .ToListAsync();
        }

        public async Task<List<BsonDocument>> GetBooksAsync()
        {

            //var list = await _collection.Find(x => x.nationality == "Italy")
            //    .ToListAsync();

            // Retrieve all books from the collection
            return await _collection.Find(new BsonDocument()).ToListAsync();
        }

    }
}
