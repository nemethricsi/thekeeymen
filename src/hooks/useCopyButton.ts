import { CheckIcon, CopyIcon, CopyXIcon } from 'lucide-react';
import { useState } from 'react';

type CopyState = 'idle' | 'copied' | 'error';

interface UseCopyButtonProps {
  textToCopy: string;
  copyLabel: string;
  successLabel: string;
  errorLabel: string;
}

export const useCopyButton = ({
  textToCopy,
  copyLabel,
  successLabel,
  errorLabel,
}: UseCopyButtonProps) => {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const getCopyIcon = () => {
    switch (copyState) {
      case 'idle':
        return CopyIcon;
      case 'copied':
        return CheckIcon;
      case 'error':
        return CopyXIcon;
    }
  };

  const getCopyText = () => {
    switch (copyState) {
      case 'idle':
        return copyLabel;
      case 'copied':
        return successLabel;
      case 'error':
        return errorLabel;
    }
  };

  const handleClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyState('copied');
        setTimeout(() => setCopyState('idle'), 1200);
      })
      .catch(() => {
        setCopyState('error');
        setTimeout(() => setCopyState('idle'), 1200);
      });
  };

  return { copyState, handleClick, getCopyIcon, getCopyText };
};
