// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

// const nodeDefaults = {
//   sourcePosition: Position.right,
//   targetPosition: Position.left,
// };

export const creative_coding_nodes = [
  {
    id: "creative_coding_header",
    type: "project_node_norm",
    position: { x: 600, y: 2800 },
    data: {
      title: "Creative Coding",
      description: "",
      isConnectable: true,
      link: "",
    },
  },
  {
    id: "Text into Waves",
    type: "project_node_norm",
    position: { x: 150, y: 2500 },
    data: {
      title: "Text into Waves",
      description: "Turn text into waves based on readability score",
      isConnectable: true,
      link: "https://cre8ture.github.io/wordWaves/textWaves/",
    },
  },
  {
    id: "Mindful Breathing Waves",
    type: "project_node_norm",
    position: { x: 590, y: 2500 },
    data: {
      title: "Mindful Breathing Waves",
      description: "Use arrow keys to control your breath",
      isConnectable: true,
      link: "https://cre8ture.github.io/wave-breathing/",
    },
  },
  {
    id: "Vertigo: Lost in Space",
    type: "project_node_norm",
    position: { x: 1020, y: 2500 },
    data: {
      title: "Vertigo: Lost in Space",
      description: "2-D space game, built with Unity and C#",
      isConnectable: true,
      link: "https://kak2594.wixsite.com/vertigo",
    },
  },
  {
    id: "The Captain's Orders",
    type: "project_node_norm",
    position: { x: 1000, y: 2800 },
    data: {
      title: "The Captain's Orders",
      description: "A choose your own adventure story built with Unity",
      isConnectable: true,
      link: "https://earthling1111.itch.io/captainsorders",
    },
  },
];

export const creative_coding_edges = [
  {
    id: "creative_coding_edge1",
    source: "creative_coding_header",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "Text into Waves",
  },
  {
    id: "creative_coding_edge2",
    source: "creative_coding_header",
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    target: "Mindful Breathing Waves",
  },
  {
    id: "creative_coding_edge3",
    source: "creative_coding_header",
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    target: "Vertigo: Lost in Space",
  },
  {
    id: "creative_coding_edge4",
    source: "creative_coding_header",
    sourceHandle: "right_source",
    targetHandle: "bottom_target",
    target: "The Captain's Orders",
  },
];

const nodeTypes = {
  project_node_norm: Project_node_norm,
};
