module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      "events",
      [
        {
          event_type: "Symposium",
          event_date: "2018-05-01",
          title: "A Social-Neuroscience Perspective on Empathy",
          speaker: "Albert von Bezold, Jules Cotard, Marian Diamond",
          host: "Alcmaeon of Croton",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          event_type: "Colloquium",
          event_date: "2018-04-01",
          title: "The Neuroscience of Restorative Justice",
          speaker: "Albert Einstein",
          host: "Stephen Hawking",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          event_type: "Symposium",
          event_date: "2018-04-01",
          title: "Cognitive Development Theory",
          speaker: "Francis Glisson, Ragnar Granit, Nils-Åke Hillarp",
          host: "David H. Hubel, Herbert Jasper",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          event_type: "Symposium",
          event_date: "2017-05-01",
          title: "The Neuroscience of Moral Decision Making in Ethics",
          speaker: "Michel Jouvet, Bernard Katz, Emil Kraepelin",
          host: "Lawrence C. Katz",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          event_type: "Symposium",
          event_date: "2017-05-01",
          title: "Ovariectomy Effect on Hippocampus Spatial Memory",
          speaker:
            "Rita Levi-Montalcini, John C. Lilly, Horace Winchell Magoun",
          host: "Mondino de Luzzi, Walle Nauta",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          event_type: "Colloquium",
          event_date: "2017-05-01",
          title: "Left Brain Vs Right Brain how dose this impact learning",
          speaker: "Aristides Leão",
          host: "Louis Lapicque",
          published: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete("events", null, {})
};
