import React from 'react';

/** Fichier servi depuis la racine Vite (`public/cv-mouad.pdf` → `/cv-mouad.pdf`). */
export const CV_PDF_PATH = '/cv-mouad.pdf';

interface ResumeCVProps {
  className?: string;
}

const ResumeCV = React.forwardRef<HTMLIFrameElement, ResumeCVProps>(
  ({ className = '' }, ref) => {
    return (
      <div className={`flex flex-1 flex-col min-h-0 bg-slate-200 ${className}`}>
        <iframe
          ref={ref}
          title="CV Mouad Mekrech"
          src={`${CV_PDF_PATH}#view=FitH`}
          className="w-full flex-1 min-h-[70vh] border-0 bg-white"
        />
        <p className="no-print shrink-0 text-center text-xs text-slate-600 py-2 bg-slate-100 border-t border-slate-200">
          Si le PDF ne s’affiche pas,{' '}
          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            ouvrir dans un nouvel onglet
          </a>
        </p>
      </div>
    );
  }
);

ResumeCV.displayName = 'ResumeCV';

export default ResumeCV;
