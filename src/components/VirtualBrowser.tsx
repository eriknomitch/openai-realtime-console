import React, { useState } from 'react';

interface VirtualBrowserProps {
  url: string;
  content: string;
}

export const VirtualBrowser: React.FC<VirtualBrowserProps> = ({
  url,
  content,
}) => {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [currentContent, setCurrentContent] = useState(content);

  return (
    <div className="virtual-browser">
      <div className="browser-toolbar">
        <input type="text" value={currentUrl} readOnly />
      </div>
      <div className="browser-content">
        <div dangerouslySetInnerHTML={{ __html: currentContent }} />
      </div>
    </div>
  );
};
