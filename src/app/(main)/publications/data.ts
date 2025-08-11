
interface LinksProps {
  paper?: any;
  home?: any;
  code?: any;
  dataset?: any;
}

interface PubProps {
  year: number;
  venue: string[];
  title: string;
  authors: string[];
  links?: LinksProps;
}

export const publications : {[key : number] : PubProps[] }  = {
  2025: [
    {
      year: 2025,
      venue: [
        "International Conference on Computer Vision (ICCV)",
      ],
      title: "Grouped Speculative Decoding for Autoregressive Image Generation",
      authors: [
        "Junhyuk So",
        "Juncheol Shin",
        "Hyunho Kook",
        "Eunhyeok Park",
      ],
      links: {
        paper: "asdas",
        home: "a",
        code: "b",
        dataset: "c",
      }
    },
    {
      year: 2025,
      venue: [
        "International Conference on Computer Vision (ICCV)",
      ],
      title: "Holistic Unlearning Benchmark: A Multi-Faceted Evaluation for Text-to-Image Diffusion Model Unlearning",
      authors: [
        "Saemi Moon*",
        "Minjong Lee*",
        "Sangdon Park",
        "Dongwoo Kim",
      ],
    },
  ],
  2024: [
    {
      year: 2024,
      venue: [
        "Special Interest Group on Discourse and Dialogue (SIGDIAL)",
      ],
      title: "An Investigation Into Explainable Audio Hate Speech Detection",
      authors: [
        "Jinmyeong An", 
        "Wonjun Lee", 
        "Yejin Jeon", 
        "Jungseul Ok", 
        "Yunsu Kim", 
        "Gary Geunbae Lee",
      ],
    },
    {
      year: 2024,
      venue: [
        "Advances in Neural Information Processing Systems (NeurIPS)",
      ],
      title: "Selective Generation for Controllable Language Models",
      authors: [
        "Minjae Lee*",
        "Kyungmin Kim*",
        "Taesoo Kim",
        "Sangdon Park",
      ],
    },
  ],
  2023: [
    {
      year: 2023,
      venue: [
        "Advances in Neural Information Processing Systems (NeurIPS)",
        "Workshop on New Frontiers in Graph Learning",
      ],
      title: "Non-backtracking Graph Neural Networks",
      authors: [
        "Seonghyun Park",
        "Narae Ryu",
        "Gahee Kim",
        "Dongyeop Woo",
        "Se-Young Yun",
        "Sungsoo Ahn",
      ],
    },
    {
      year: 2023,
      venue: [
        "Advances in Neural Information Processing Systems (NeurIPS)",
        "Workshop on New Frontiers in Graph Learning",
      ],
      title: "A Simple and Scalable Representation for Graph Generation",
      authors: [
        "Yunhui Jang",
        "Seul Lee",
        "Sungsoo Ahn",
      ],
    },
  ],
}
