// import Project_node_norm from "../node_types/project_node_norm";
import Project_node_norm from "../node_types/Project_node_norm";
import { Position } from "reactflow";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const llms_nodes = [
  {
    id: "llms_header",
    type: "project_node_norm",
    position: { x: 1500, y: 1200 },
    data: {
      title: "Large Language Models",
      description: "",
      isConnectable: true,
      link: "",
    },
    ...nodeDefaults,
  },
  {
    id: "AI Life Coach",
    type: "project_node_norm",
    position: { x: 1600, y: 900 },
    data: {
      title: "AI Life Coach",
      description:
        "Using Motivational Interviewing as a protocal for an AI life coach",
      isConnectable: true,
      link: "https://streaming-chat-gamma.vercel.app/",
    },
    ...nodeDefaults,
  },
  {
    id: "Therapy Style Tester",
    type: "project_node_norm",
    position: { x: 1900, y: 1100 },
    data: {
      title: "Therapy Style Tester",
      description:
        "Talk to different therapists from Freud, Beck, Perls, Calkins...",
      isConnectable: true,
      link: "https://be-a-therapist.vercel.app/",
    },
    ...nodeDefaults,
  },
  {
    id: "PDF Chatter",
    type: "project_node_norm",
    position: { x: 1800, y: 1300 },
    data: {
      title: "PDF Chatter",
      description: "Converse with your documents",
      isConnectable: true,
      link: "https://talk-to-pdf-alpha.vercel.app/",
    },
    ...nodeDefaults,
  },
  {
    id: "Diagram Creator",
    type: "project_node_norm",
    position: { x: 1550, y: 1500 },
    data: {
      title: "Diagram Creator",
      description:
        "Image generator to create education diagrams (Work In Progress)",
      isConnectable: true,
      link: "https://ai-graph3-fvcfgsm18-cre8ture.vercel.app/",
    },
    ...nodeDefaults,
  },
];

export const llms_edges = [
  {
    id: "llms_edge1",
    source: "llms_header",
    // sourceHandle: "source_bottom",
    sourceHandle: "right_source",
    targetHandle: "left_target",
    target: "Therapy Style Tester",
  },
  {
    id: "llms_edge2",
    source: "llms_header",
    // sourceHandle: "source_left"
    sourceHandle: "top_source",
    targetHandle: "bottom_target",
    // sourcePosition: Position.Right,
    // targetPosition: Position.Left,
    target: "AI Life Coach",
  },
  {
    id: "llms_edge3",
    source: "llms_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "left_target",
    target: "PDF Chatter",
  },
  {
    id: "llms_edge4",
    source: "llms_header",
    // sourceHandle: "source_left",
    sourceHandle: "bottom_source",
    targetHandle: "top_target",
    target: "Diagram Creator",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  project_node_norm: Project_node_norm,
};
