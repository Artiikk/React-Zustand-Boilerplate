import { ReactNode, Component } from 'react';
import { LayoutError } from 'src/components/Layouts/LayoutError';

export class PageErrorBoundary extends Component<{ children: JSX.Element }> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  //   componentDidCatch(error: Error, info: React.ErrorInfo): void {
  //     logError(
  //       {
  //         message: 'Rendering error: ' + error.message,
  //         block: 'PageErrorBoundary'
  //       },
  //       error
  //     );
  //   }

  render(): ReactNode {
    if (this.state.error) {
      return <LayoutError />;
    }

    return this.props.children;
  }
}
