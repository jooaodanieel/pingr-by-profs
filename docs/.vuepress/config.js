module.exports = {
  themeConfig: {
    nav: [
      { text: "Pingr", link: "/" },
      {
        text: "Visões",
        ariaLabel: "Visões Arquiteturais",
        items: [
          { text: "Busca", link: "/views/msview-busca.md" },
          { text: "Seguir", link: "/views/msview-seguir.md" },
          { text: "DPs", link: "/views/msview-dps.md" },
          { text: "Pings - Microsserviços", link: "/views/msview-pings.md" },
          { text: "Pings - Sequência", link: "/views/dseqview-pings.md" }
        ]
      },
      {
        text: "Padrões",
        ariaLabel: "Análises de Trade-Offs de Padrões",
        items: [
          { text: "API Gateway", link: "/extras/apigateway_tradeoffs.md" },
          {
            text: "Asynchronous Messaging",
            link: "/extras/asyncmsg_tradeoffs.md"
          },
          { text: "CQRS", link: "/extras/cqrs_tradeoffs.md" },
          {
            text: "Database per Service",
            link: "/extras/dbperservice_tradeoffs.md"
          },
          { text: "Event Sourcing", link: "/extras/eventsourcing_tradeoffs.md" }
        ]
      }
    ]
  }
};
