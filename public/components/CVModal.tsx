
import React, { useRef } from 'react';
import { X, Download, Printer } from 'lucide-react';
import ResumeCV, { CV_PDF_PATH } from './ResumeCV';

interface CVModalProps {
  onClose: () => void;
}

const CVModal: React.FC<CVModalProps> = ({ onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    const w = iframeRef.current?.contentWindow;
    if (w) {
      try {
        w.focus();
        w.print();
        return;
      } catch {
        /* fallback */
      }
    }
    window.open(CV_PDF_PATH, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = 'MOUAD_MEKRECH_CV.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#060B14]/90 backdrop-blur-xl" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl h-[90vh] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="bg-slate-50 border-b p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="font-sora font-bold text-slate-700 text-sm md:text-base">MOUAD_MEKRECH_CV.pdf</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 flex items-center gap-2 px-3 text-xs font-bold"
            >
              <Download size={16} /> <span className="hidden sm:inline">Download CV</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 flex items-center gap-2 px-3 text-xs font-bold"
            >
              <Printer size={16} /> <span className="hidden sm:inline">Print PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <ResumeCV ref={iframeRef} className="flex-1" />
      </div>
    </div>
  );
};

export default CVModal;
