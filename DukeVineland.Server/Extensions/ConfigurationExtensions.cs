using Microsoft.Extensions.Options;

using DukeVineland.Dtos.Configuration;

namespace DukeVineland.Server.Extensions
{
    public static class ConfigurationExtensions
    {
        public static IServiceCollection AddMongoDatabaseConfig(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            IConfigurationSection mongoDatabaseConfig =
                configuration.GetSection("MongoDatabaseConfig");

            services.Configure<MongoDatabaseConfig>(mongoDatabaseConfig);

            services.AddSingleton(
                typeof(MongoDatabaseConfig),
                x => x.GetService<IOptions<MongoDatabaseConfig>>()!.Value);

            return services;
        }
    }
}
