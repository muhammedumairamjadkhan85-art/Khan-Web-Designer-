import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Sliders } from 'lucide-react';
import { BrandConfig } from '../types';
import { initialBrandConfig, saveBrandConfig } from '../data/brandConfig';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BrandConfig;
  onSave: (newConfig: BrandConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<BrandConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBrandConfig(formData);
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setFormData(initialBrandConfig);
    saveBrandConfig(initialBrandConfig);
    onSave(initialBrandConfig);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#F8FAF7] dark:bg-[#102C23] border border-[#102C23]/20 dark:border-[#C9A44C]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#102C23]/10 dark:border-[#C9A44C]/20 bg-white/50 dark:bg-[#081710]/50">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#C9A44C]" />
            <h3 className="font-display font-bold text-lg text-[#17251C] dark:text-[#F8FAF7]">
              Brand Owner Configuration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:bg-[#102C23]/10 dark:hover:bg-[#183B2F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <p className="text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70">
            Customize your live business channels. All WhatsApp buttons, email links, and contact form routings update automatically across the site.
          </p>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1">
                Owner Name
              </label>
              <input
                type="text"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1">
                Professional Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1">
                  WhatsApp Raw Number (with country code)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="+923166097993"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102C23] dark:text-[#C9A44C] mb-1">
                  WhatsApp Display Label
                </label>
                <input
                  type="text"
                  value={formData.whatsappDisplay}
                  onChange={(e) => setFormData({ ...formData, whatsappDisplay: e.target.value })}
                  placeholder="0316 6097993"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7] focus:outline-none focus:ring-2 focus:ring-[#C9A44C]"
                  required
                />
              </div>
            </div>

            <div className="pt-2 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A44C] block">
                Social Profiles
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="url"
                  placeholder="LinkedIn Profile URL"
                  value={formData.socials.linkedin}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, linkedin: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                />
                <input
                  type="url"
                  placeholder="GitHub Profile URL"
                  value={formData.socials.github}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socials: { ...formData.socials, github: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 text-xs rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 bg-white dark:bg-[#081710] text-[#17251C] dark:text-[#F8FAF7]"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#102C23]/10 dark:border-[#C9A44C]/20 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#17251C]/70 dark:text-[#F8FAF7]/70 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-[#102C23]/20 dark:border-[#C9A44C]/30 text-[#17251C] dark:text-[#F8FAF7] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#102C23] text-white dark:bg-[#C9A44C] dark:text-[#081710] hover:bg-[#183B2F] dark:hover:bg-[#E3C477] transition-all cursor-pointer shadow-sm"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-900" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Configuration</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
