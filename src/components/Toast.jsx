import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 glass-panel border border-neonCyan/40 px-5 py-4 rounded-xl shadow-neon-cyan flex items-center space-x-3 max-w-sm animate-bounce-once">
      <div className="text-neonCyan flex-shrink-0">
        {toast.type === 'error' ? (
          <AlertCircle className="w-5 h-5 text-red-400" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-neonCyan" />
        )}
      </div>
      <div className="flex-1 pr-2">
        <h4 className="font-semibold text-xs uppercase tracking-wider text-white">
          {toast.title}
        </h4>
        <p className="text-xs text-zinc-400 mt-0.5">{toast.message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
