import React from 'react';

interface Tool {
  name: string;
  description: string;
}

interface EnabledToolsProps {
  tools: Tool[];
}

export const EnabledTools: React.FC<EnabledToolsProps> = ({ tools }) => {
  return (
    <div className="content-block enabled-tools">
      <div className="content-block-title">Enabled Tools</div>
      <div className="content-block-body">
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>
              <strong>{tool.name}</strong>: {tool.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
