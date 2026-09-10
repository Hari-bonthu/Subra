import React, { Component, type ReactNode } from 'react';
import { Phone, RefreshCw, MessageSquare, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Subra Application Error Caught by Boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = import.meta.env.BASE_URL;
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-[12px] p-8 border border-[#E2E8F0] shadow-[0_16px_50px_rgba(23,33,43,0.08)] text-center">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF9] text-[#16C2B0] flex items-center justify-center mx-auto mb-4 border border-[#D6F8F2]">
              <AlertCircle className="w-7 h-7 text-[#078F82]" />
            </div>

            <h1 className="font-display font-extrabold text-[22px] text-[#17212B]">
              Temporary Display Glitch
            </h1>

            <p className="font-sans text-[14px] text-[#64748B] mt-2 leading-relaxed">
              We encountered an unexpected rendering error. Your booking data is safe and our dispatch team remains on active duty.
            </p>

            <div className="mt-6 space-y-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={this.handleReset}
                icon={<RefreshCw className="w-4 h-4" />}
              >
                Reload Homepage
              </Button>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a href="tel:+919704380535" className="w-full">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<Phone className="w-3.5 h-3.5 text-[#16C2B0]" />}
                    className="text-[12.5px]"
                  >
                    Call Dispatch
                  </Button>
                </a>

                <a
                  href="https://wa.me/919392430205?text=Hello%20Subra,%20I%20would%20like%20to%20inquire%20about%20a%20cleaning%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />}
                    className="text-[12.5px]"
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
