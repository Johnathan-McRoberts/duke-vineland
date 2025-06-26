using Microsoft.Extensions.DependencyInjection;

using DukeVineland.Services.Services;

namespace DukeVineland.Services.Extensions
{
    public static class AddServicesExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.Scan(scan =>
                scan.FromAssembliesOf(
                        typeof(BookReaderService))
                    .AddClasses(classes =>
                        classes.Where(
                            type =>
                                type.Name.EndsWith(
                                    "Service",
                                    StringComparison.InvariantCultureIgnoreCase) ||
                                type.Name.EndsWith(
                                    "Generator",
                                    StringComparison.InvariantCultureIgnoreCase)))
                    .AsImplementedInterfaces()
                    .WithTransientLifetime());

            return services;
        }
    }
}
