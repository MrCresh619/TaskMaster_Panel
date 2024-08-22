'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
 ServerStyleSheet,
 StyleSheetManager,
 ThemeProvider,
} from 'styled-components';
import { theme } from '../styles/theme.styles';
import { GlobalStyle } from '../styles/global-style.styles';
import '../styles/reset.scss';

export default function StyledComponentsRegistry({
 children,
}: {
 children: React.ReactNode;
}) {
 // Only create stylesheet once with lazy initial state
 const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

 useServerInsertedHTML(() => {
  const styles = styledComponentsStyleSheet.getStyleElement();
  styledComponentsStyleSheet.instance.clearTag();
  return <>{styles}</>;
 });

 return (
  <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
   <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
   </ThemeProvider>
  </StyleSheetManager>
 );
}