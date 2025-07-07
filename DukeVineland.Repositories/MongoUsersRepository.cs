using DukeVineland.Domain.Users;
using DukeVineland.Dtos.Configuration;

using MongoDB.Driver;


namespace DukeVineland.Repositories
{
    public class MongoUsersRepository : IMongoUsersRepository
    {
        public string Name =>
            "MongoUsers: " + _collection.CollectionNamespace.CollectionName;

        MongoClient _client;
        IMongoDatabase _database;
        IMongoCollection<User> _collection;

        public MongoUsersRepository(MongoDatabaseConfig config)
        {
            // Initialize the repository with the provided connection strings
            _client = new MongoClient(config.DatabaseConnectionString);
            _database = _client.GetDatabase("books_read");
            _collection = _database.GetCollection<User>("users");
        }

        public async Task<User?> GetUser(string name)
        {
            FilterDefinition<User> filter =
                Builders<User>.Filter.Eq("name", name);

            return await _collection.Find(filter).FirstOrDefaultAsync();
        }
    }
}
