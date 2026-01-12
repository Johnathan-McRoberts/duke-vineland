using DukeVineland.Domain.Geography;

namespace DukeVineland.Repositories
{
    public interface IMongoGeographyRepository
    {
        public string Name { get; }

        Task<List<Nation>> GetNations();
    }
}