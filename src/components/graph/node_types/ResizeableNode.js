import { memo, useCallback } from "react";
import { Handle, Position, NodeResizer } from "reactflow";

const ResizableNodeSelected = ({ data, selected, isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  return (
    <>
      <div className="text-updater-node bg-white border h-full border-gray-300  rounded">
        <NodeResizer
          color="#ff0071"
          isVisible={selected}
          minWidth={100}
          minHeight={100}
        />
        <Handle id="left_targ" type="target" position={Position.Left} />
        <div style={{ padding: 10 }}>{data.label}</div>
        <Handle
          id="top_targ"
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        <textarea
          id="text"
          name="text"
          onChange={onChange}
          className="text-gray-700 h-full nodrag p-5"
          placeholder="enter the title of your node"
          style={{ width: "100%", height: "100%" }}
        ></textarea>
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom_new"
          className="Bottom-10"
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Top}
          id="top_new"
          className="Top-10"
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left_new"
          className="Left-10"
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right_new"
          className="Right-10"
        />
      </div>
    </>
  );
};

export default memo(ResizableNodeSelected);
