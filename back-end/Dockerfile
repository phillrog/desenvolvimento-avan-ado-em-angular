FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /app

COPY . /app

RUN chmod +x ./entrypoint.sh

RUN dotnet restore src/DevIO.Api/DevIO.Api.csproj

RUN dotnet publish src/DevIO.Api/DevIO.Api.csproj -c Release -o /app/publish 

EXPOSE 80
EXPOSE 443
CMD /bin/bash ./entrypoint.sh

ENTRYPOINT ["dotnet", "DevIO.Api.dll"]