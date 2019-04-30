import React, { Suspense } from 'react';

import Breakpoint, { BreakpointProvider } from 'react-socks';
// components
import Spiner from '../Spiner/Spiner';

const MobileNav = React.lazy(() =>
  import('./MobileNav' /* webpackChunkName: "mobile-nav" */),
);
const DesktopNav = React.lazy(() =>
  import('./DesktopNav' /* webpackChunkName: "desktop-nav" */),
);

const Nav = ({ items = [] }) => (
  <Suspense fallback={Spiner}>
    <BreakpointProvider>
      <div>
        <Breakpoint small down>
          <MobileNav items={items} />
        </Breakpoint>
        <Breakpoint medium up>
          <DesktopNav items={items} />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  </Suspense>
);
export default Nav;
