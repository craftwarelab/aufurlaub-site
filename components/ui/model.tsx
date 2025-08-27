"use client";

import React, {
  HTMLAttributes,
  ReactNode,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { X as CloseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Define props interface extending HTML div attributes
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  isOpen?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  isOpen,
  onClose,
  ...props
}) => {
  const modelRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        modelRef.current &&
        !modelRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/30",
        className
      )}
      {...props}
      role="dialog"
      aria-modal="true"
    >
      <div
        className=" bg-white rounded-lg shadow-lg min-w-[40vw] max-w-[60vw]"
        ref={modelRef}
      >
        <div className="relative w-full h-[40px] ">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <CloseIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
          </div>
        </div>
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
