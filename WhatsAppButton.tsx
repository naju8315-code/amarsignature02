/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageSquare, Send, X, ShieldAlert } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setSubmitted(true);
    setTimeout(() => {
      setMessage('');
      setSubmitted(false);
      setIsOpen(false);
    }, 4500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Chat Box Dialog */}
      {isOpen && (
        <div 
          className="w-80 bg-luxury-surface border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden mb-4 transition-all duration-300"
          id="whatsapp-chatbox"
        >
          {/* Box Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  AS
                </div>
                {/* Active Indicator Pulse dot */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full animate-pulse" />
              </div>

              <div className="text-left">
                <h4 className="font-serif text-sm font-bold">Amar Signature Support</h4>
                <p className="text-[10px] text-white/80 font-mono">Typically responds in under 5 minutes</p>
              </div>
            </div>

            <button 
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Whatsapp Desk"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages block */}
          <div className="p-4 bg-luxury-navy min-h-[140px] text-xs space-y-3.5 flex flex-col justify-end text-left max-h-56 overflow-y-auto">
            <div className="bg-luxury-surface border border-white/5 p-3 rounded-xl rounded-tl-none max-w-[85%] text-left">
              <p className="text-luxury-offwhite">
                Hello. Welcome to the elite advisory room of Amar Signature. I am Tasin Ahmed, your private concierge.
              </p>
              <span className="block text-[8px] text-luxury-muted text-right mt-1 font-mono">13:20 GMT+6</span>
            </div>

            <div className="bg-luxury-surface border border-white/5 p-3 rounded-xl rounded-tl-none max-w-[85%] text-left">
              <p className="text-luxury-offwhite font-medium text-emerald-400">
                How may I guide your personal brand trajectory today?
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg text-[10px] text-emerald-400">
                ✦ Message secure. Launching WhatsApp channel connection...
              </div>
            )}
          </div>

          {/* Input field Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="p-3 bg-luxury-surface border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your inquiry message..."
                className="flex-grow bg-luxury-navy border border-emerald-500/20 px-3 py-2 rounded-lg text-xs text-luxury-offwhite focus:outline-none focus:border-emerald-500"
              />
              <button 
                type="submit"
                className="p-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : null}

        </div>
      )}

      {/* Actual Green Trigger Button with Pulse animations */}
      <div className="relative group">
        
        {/* Wave pulses */}
        <span className="absolute -inset-1.5 bg-emerald-500/20 rounded-full blur-sm pulse-glow animate-ping pointer-events-none" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="whatsapp-trigger-btn"
          className="relative flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-400 text-luxury-navy rounded-full shadow-2xl transition-transform hover:scale-105 cursor-pointer z-10"
          aria-label="Open WhatsApp live help"
        >
          <MessageSquare className="w-6 h-6 stroke-[2.5]" />
          
          {/* Floating Online Badge dot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-emerald-500 rounded-full" />
        </button>

      </div>

    </div>
  );
}
