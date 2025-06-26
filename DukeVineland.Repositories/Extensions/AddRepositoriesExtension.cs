using Microsoft.Extensions.DependencyInjection;

namespace DukeVineland.Repositories.Extensions
{
    public static class AddRepositoriesExtension
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.Scan(scan =>
                scan.FromAssembliesOf(
                        typeof(MongoBooksRepository))
                    .AddClasses(classes =>
                        classes.Where(
                            type =>
                                type.Name.EndsWith(
                                    "Repository",
                                    StringComparison.InvariantCultureIgnoreCase)))
                    .AsImplementedInterfaces()
                    .WithTransientLifetime());

            return services;
        }
    }
}
