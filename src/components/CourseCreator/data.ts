const templates = [
  {
    id: 1,
    title: "E-Learning",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop",
    description: "A standard elearning package such as SCORM or xAPI",
  },
  {
    id: 2,
    title: "Masterclass",
    image:
      "https://images.unsplash.com/photo-1580894732930-0babd100d356?q=80&w=320&auto=format&fit=crop",
    description: "An engaging multi-part course or programme",
  },
  {
    id: 3,
    title: "Face-to-Face Event",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=320&auto=format&fit=crop",
    description: "An in-person event, such as a training day or conference",
  },
  {
    id: 4,
    title: "Web",
    image:
      "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=320&auto=format&fit=crop",
    description: "A website such as a blog, article or company intranet",
  },
  {
    id: 5,
    title: "Document",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=320&auto=format&fit=crop",
    description: "A single document, e.g. a PDF",
  },
  //   {
  //     id: 6,
  //     title: "Video",
  //     image:
  //       "https://images.unsplash.com/photo-1556132877-ded3bb0173b5?q=80&w=320&auto=format&fit=crop",
  //     description: "An online video, e.g. YouTube or Vimeo",
  //   },
  {
    id: 7,
    title: "Online Event",
    image:
      "https://images.unsplash.com/photo-1623949556303-b0d17d198863?q=80&w=320&auto=format&fit=crop",
    description: "An online-only event such as a webinar",
  },
  {
    id: 8,
    title: "Hybrid Event",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=320&auto=format&fit=crop",
    description: "An event with a choice of in-person or remote attendance",
  },
  //   {
  //     id: 9,
  //     title: "MOOC",
  //     image:
  //       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop",
  //     description: "A Massive Online Open Course",
  //   },
];

export type Template = (typeof templates)[number];

const categories = [
  {
    id: 1,
    title: "Course",
    templates: [1, 2, 9],
  },
  {
    id: 2,
    title: "Event",
    templates: [3, 7, 8],
  },
  {
    id: 3,
    title: "Basic",
    templates: [4, 5, 6],
  },
];

export { templates, categories };
