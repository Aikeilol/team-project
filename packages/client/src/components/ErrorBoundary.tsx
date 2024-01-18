import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  errorMessage?: string
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.errorMessage ?? 'Ошибка'
    }

    return this.props.children
  }
}

export default ErrorBoundary
