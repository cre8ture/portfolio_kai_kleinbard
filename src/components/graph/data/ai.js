// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

// const nodeDefaults = {
//   sourcePosition: Position.right,
//   targetPosition: Position.left,
// };

export const deep_learning_nodes = [
  {
    id: "deep_learning_header",
    type: "project_node_norm",
    position: { x: 800, y: 1200 },
    data: {
      title: "Deep Learning",
      description: "",
      isConnectable: true,
      link: "",
    },
    // ...nodeDefaults,
  },
  {
    id: "Fine Tuning GPT",
    type: "project_node_norm",
    position: { x: 200, y: 900 },
    data: {
      title: "Fine Tuning GPT-2",
      description: "Fine tuning a GPT-2 model to write sone lyrics",
      isConnectable: true,
      link: "https://github.com/cre8ture/GPT2_fine_tuning",
    },
    // ...nodeDefaults,
  },
  {
    id: "Embedding and Qauntization",
    type: "project_node_norm",
    position: { x: 600, y: 900 },
    data: {
      title: "Embedding and Qauntization",
      description: "Using embeddings and qauntization to vectorize data",
      isConnectable: true,
      link: "https://github.com/cre8ture/Embeddings2",
    },
    // ...nodeDefaults,
  },
  {
    id: "flood",
    type: "project_node_norm",
    position: { x: 200, y: 1100 },
    data: {
      title: "Convolutional Network Flooding",
      description: "CNN analyzing data to predict flooding in Ireland",
      isConnectable: true,
      link: "https://github.com/cre8ture/CNN_flood_deep_learning.git",
    },
    // ...nodeDefaults,
  },
  {
    id: "VIT Transfomers",
    type: "project_node_norm",
    position: { x: 200, y: 1300 },
    data: {
      title: "VIT Transfomers",
      description:
        "A customized version of the paper, An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale",
      isConnectable: true,
      link: "https://github.com/cre8ture/VIT_transformer",
    },
    // ...nodeDefaults,
  },
  {
    id: "Variational Autoencoder",
    type: "project_node_norm",
    position: { x: 620, y: 1470 },
    data: {
      title: "Variational Autoencoder",
      description:
        "Custom implementation of the paper An Introduction to Variational Autoencoders",
      isConnectable: true,
      link: "https://github.com/cre8ture/VAE_encoders",
    },
    // ...nodeDefaults,
  },
  {
    id: "Stable Diffusion",
    type: "project_node_norm",
    position: { x: 1020, y: 1470 },
    data: {
      title: "Stable Diffusion",
      description: "Experiments with Stable Diffusion",
      isConnectable: true,
      link: "https://github.com/cre8ture/stable_diffusion_experiments",
    },
    // ...nodeDefaults,
  },
];

export const deep_learning_edges = [
  {
    id: "deep_learning_edge1",
    source: "deep_learning_header",
    // sourceHandle: "source_left"
    sourceHandle: "top_source",
    targetHandle: "right_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "Fine Tuning GPT",
  },
  {
    id: "deep_learning_edge2",
    source: "deep_learning_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "flood",
  },
  {
    id: "deep_learning_edge3",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "left_source",
    targetHandle: "right_target",
    target: "VIT Transfomers",
  },
  {
    id: "deep_learning_edge4",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Variational Autoencoder",
  },
  {
    id: "deep_learning_edge5",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Stable Diffusion",
  },
  {
    id: "deep_learning_edge5",
    source: "deep_learning_header",
    // sourceHandle: "source_left",
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    target: "Embedding and Qauntization",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
