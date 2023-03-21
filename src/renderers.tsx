import React from 'react';
import { DEFAULT_RENDERERS } from 'myst-to-react';
import { MermaidNodeRenderer } from '@myst-theme/diagrams';
import { NodeRenderer } from '@myst-theme/providers';
import { InlineRenderer } from './inlineExpression';

export const renderers: Record<string, NodeRenderer> = {
  ...DEFAULT_RENDERERS,
  mermaid: MermaidNodeRenderer,
  inlineExpression: (node, children) => {
    return <InlineRenderer value={node.value} />;
  },
  html: (node, children) => {
    // TODO: This needs to be sanitized properly
    return <span dangerouslySetInnerHTML={{ __html: node.value }}></span>;
  }
};
