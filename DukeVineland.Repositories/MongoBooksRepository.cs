using MongoDB.Driver;

using DukeVineland.Domain.Books;

using DukeVineland.Dtos.Configuration;

namespace DukeVineland.Repositories
{
    public class MongoBooksRepository : IMongoBooksRepository
    {
        public string Name => "MongoBooks: " + _collection.CollectionNamespace.CollectionName;

        MongoClient _client;
        IMongoDatabase _database;
        IMongoCollection<BookRead> _collection;

        public MongoBooksRepository(MongoDatabaseConfig config)
        {
            // Initialize the repository with the provided connection strings
            _client = new MongoClient(config.DatabaseConnectionString);
            _database = _client.GetDatabase("books_read");
            _collection = _database.GetCollection<BookRead>("books");
        }
        public async Task<List<BookRead>> GetAllBooksRead()
        {
            // This is a query to get everything. 
            FilterDefinition<BookRead> filter =
                Builders<BookRead>.Filter.Empty;

            // Retrieve all books from the collection based on the filter
            List<BookRead> books = await _collection.Find(filter).ToListAsync();

            return books;
        }
    }
}
